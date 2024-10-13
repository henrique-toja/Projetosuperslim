document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar conteúdo HTML e adicionar animação
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

                    // Reaplica os eventos aos botões e links carregados dinamicamente
                    applyButtonEvents();
                    applyChatEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Aplica eventos aos botões e links carregados dinamicamente
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

    // Função para aplicar eventos do chat
    function applyChatEvents() {
        const chatForm = document.getElementById("chat-form");
        if (chatForm) {
            chatForm.addEventListener("submit", async function (event) {
                event.preventDefault(); // Impede o redirecionamento

                const chatInput = document.getElementById("chat-input");
                const userMessage = chatInput.value;
                chatInput.value = ""; // Limpa o campo de entrada

                // Adiciona a mensagem do usuário ao chat
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

    async function getOpenAIResponse(userMessage) {
        const apiKey = "API_GITHUB_TOKEN"; // O token será carregado dos secrets do GitHub
        const endpoint = "https://models.inference.ai.azure.com/v1/chat/completions";
        const modelName = "gpt-4o-mini";

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        };

        const body = JSON.stringify({
            model: modelName,
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userMessage }
            ],
            max_tokens: 1000,
            temperature: 1.0
        });

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`Erro na API OpenAI: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content; // Retorna a resposta da OpenAI
    }

    function addMessageToChat(message, sender) {
        const chatContainer = document.getElementById("chat-container");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = message;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Rola para o final do chat
    }

    // Carrega o conteúdo inicial da página home.html
    loadHTMLContent('home.html');
});
