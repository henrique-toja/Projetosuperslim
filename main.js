document.addEventListener("DOMContentLoaded", function () {
    // Function to load HTML content and add animation
    function loadHTMLContent(page) {
        const content = document.getElementById('content-placeholder');
        content.classList.add('fade-out');

        setTimeout(() => {
            fetch(page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    content.innerHTML = data;
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');

                    // Reapply events to dynamically loaded buttons and links
                    applyButtonEvents();
                    applyChatEvents(); // Ensure chat events are applied after content load
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Apply events to dynamically loaded buttons and links
    function applyButtonEvents() {
        const buttonsAndLinks = document.querySelectorAll(
            '#content-placeholder .btn-know[data-page], ' +
            '#content-placeholder .btn-next[data-page], ' +
            '#content-placeholder .btn-auth[data-page], ' +
            'a[data-page]'
        );

        buttonsAndLinks.forEach(element => {
            element.removeEventListener('click', handleClick);
            element.addEventListener('click', handleClick);
        });
    }

    function handleClick(event) {
        const page = this.getAttribute('data-page') || this.getAttribute('href');
        if (page) {
            event.preventDefault();
            loadHTMLContent(page);
        }
    }

    // Apply chat events
    function applyChatEvents() {
        const chatForm = document.getElementById("chat-form");
        if (chatForm) {
            chatForm.addEventListener("submit", async function (event) {
                event.preventDefault(); // Prevents redirection

                const chatInput = document.getElementById("chat-input");
                const userMessage = chatInput.value;
                chatInput.value = ""; // Clear input field

                // Add user message to chat
                addMessageToChat(userMessage, "user");

                try {
                    const botResponse = await getOpenAIResponse(userMessage);
                    addMessageToChat(botResponse, "bot");
                } catch (error) {
                    console.error('Erro ao enviar mensagem:', error);
                    addMessageToChat("Desculpe, não consegui responder. Tente novamente mais tarde.", "bot");
                }
            });
        }
    }

    // Call backend to get AI response
    async function getOpenAIResponse(userMessage) {
        const endpoint = 'https://models.inference.ai.azure.com';
        const modelName = 'gpt-4o-mini';
        const token = process.env["GITHUB_TOKEN"];

        const client = new OpenAI({ baseURL: endpoint, apiKey: token });

        const response = await client.chat.completions.create({
            messages: [
                { role:"system", content: "Você é um assistente útil." },
                { role:"user", content: userMessage }
            ],
            temperature: 1.0,
            top_p: 1.0,
            max_tokens: 1000,
            model: modelName
        });

        return response.choices[0].message.content;
    }

    function addMessageToChat(message, sender) {
        const chatContainer = document.getElementById("chat-container");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = message;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat
    }

    // Load initial page content
    loadHTMLContent('home.html');
});
