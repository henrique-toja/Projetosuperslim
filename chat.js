const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        // Adiciona a mensagem na tela como enviada pelo usuário
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'self');
        messageDiv.textContent = messageText;
        chatMessages.appendChild(messageDiv);

        // Limpa o campo de entrada
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simula uma resposta automática
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('chat-message');
            botMessage.textContent = "Obrigado por sua mensagem! 😊";
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
});