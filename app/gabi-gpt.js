        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');
        const chatMessages = document.getElementById('chat-messages');

        function addMessage(message, type) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', `message-${type}`);
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendButton.addEventListener('click', () => {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message, 'user');
                messageInput.value = '';

                // Simulação de resposta do bot
                setTimeout(() => {
                    addMessage('Entendi. Como posso te ajudar com isso? 🤔', 'bot');
                }, 1000);
            }
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
