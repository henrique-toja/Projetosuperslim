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

                    // Reaplica os eventos do chat carregados dinamicamente
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
            // Remove eventos anteriores, se necessário (opcional)
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

    // Função para obter o token do backend
    function getToken() {
        return fetch('/get_token')  // Endpoint para obter o token
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao obter token: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem("SLIM_IA_TOKEN", data.token); // Armazena o token no localStorage
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Função para aplicar eventos do chat
    function applyChatEvents() {
        const chatForm = document.getElementById("chat-form");
        if (chatForm) {
            chatForm.addEventListener("submit", function(event) {
                event.preventDefault(); // Impede o redirecionamento

                const chatInput = document.getElementById("chat-input");
                const userMessage = chatInput.value;
                chatInput.value = ""; // Limpa o campo de entrada

                // Adiciona a mensagem do usuário ao chat
                addMessageToChat(userMessage, "user");

                // Obtém o token do localStorage
                const token = localStorage.getItem("SLIM_IA_TOKEN");

                // Envia a mensagem para a API
                fetch('/chat', {  // URL relativo
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`  // Use o token armazenado
                    },
                    body: JSON.stringify({ message: userMessage })
                })
                .then(response => response.json())
                .then(data => {
                    const botResponse = data.response;
                    addMessageToChat(botResponse, "bot");
                })
                .catch(error => {
                    console.error('Erro ao enviar mensagem:', error);
                    addMessageToChat("Desculpe, não consegui responder. Tente novamente mais tarde.", "bot");
                });
            });
        }
    }

    function addMessageToChat(message, sender) {
        const chatContainer = document.getElementById("chat-container");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = message;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Rola para o final do chat
    }

    // Carrega o conteúdo inicial da página home.html e obtém o token
    loadHTMLContent('home.html');
    getToken(); // Obtém o token e armazena no localStorage
});