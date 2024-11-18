// Seleciona os elementos HTML que serão utilizados no script
const messageInput = document.getElementById('message-input');  // Campo de entrada de mensagem
const sendButton = document.getElementById('send-button');      // Botão de envio
const chatMessages = document.getElementById('chat-messages');  // Área onde as mensagens são exibidas

// Função para adicionar uma nova mensagem na área de chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');       // Cria um novo elemento 'div' para a mensagem
    messageElement.classList.add('message', `message-${type}`); // Adiciona classes de estilo à mensagem (definidas pelo tipo)
    messageElement.textContent = message;                        // Define o texto da mensagem
    chatMessages.appendChild(messageElement);                    // Adiciona a mensagem à área de mensagens
    chatMessages.scrollTop = chatMessages.scrollHeight;          // Garante que a área de mensagens sempre role para o final
}

// Adiciona um evento de clique ao botão de envio
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();  // Obtém o valor da mensagem digitada, removendo espaços extras
    if (message) {  // Se a mensagem não estiver vazia
        addMessage(message, 'user');  // Adiciona a mensagem do usuário ao chat
        messageInput.value = '';      // Limpa o campo de entrada

        // Simula uma resposta do bot após 1 segundo
        setTimeout(() => {
            addMessage('Entendi. Como posso te ajudar com isso? 🤔', 'bot');  // Resposta do bot
        }, 1000);  // A resposta do bot aparece após 1 segundo
    }
});

// Adiciona um evento de tecla pressionada no campo de entrada de mensagem
messageInput.addEventListener('keypress', (e) => {
    // Se a tecla pressionada for 'Enter', envia a mensagem
    if (e.key === 'Enter') {
        sendButton.click();  // Simula o clique no botão de envio
    }
});