// Seleção dos elementos do DOM
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// API Configuração
const API_ENDPOINT = "https://models.inference.ai.azure.com/v1/chat/completions";
const API_KEY = "sua_chave_api"; // Substitua pela chave real
const MODEL_NAME = "gpt-4o-mini"; // Modelo usado na API

// Função para adicionar mensagens ao chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `message-${type}`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática para o final
}

// Função de envio de mensagem
async function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        // Adiciona a mensagem do usuário ao chat
        addMessage(message, 'user');
        messageInput.value = '';

        // Exibe uma mensagem de "digitando" enquanto aguarda a resposta
        addMessage('Gabi-GPT está digitando...', 'bot');
        const typingMessage = chatMessages.querySelector('.message-bot:last-child');

        // Chama a função de obter resposta da API
        const botResponse = await getBotResponse(message);
        if (typingMessage) typingMessage.remove(); // Remove a mensagem de "digitando"
        addMessage(botResponse, 'bot');
    }
}

// Função para obter resposta da API
async function getBotResponse(userMessage) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: [
                    { 
                        role: "system", 
                        content: 
                            "Você é Gabi-GPT, a Assistente Oficial do Projeto Super Slim. " +
                            "Seu papel é oferecer dicas personalizadas de exercícios para as participantes, " +
                            "motivá-las e guiá-las em suas jornadas de emagrecimento. " +
                            "Seja acolhedora, prestativa e motivadora em suas respostas."
                    },
                    { role: "user", content: userMessage }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Erro ao obter resposta do bot:", error);
        return "Desculpe, ocorreu um problema ao tentar processar sua mensagem. Tente novamente mais tarde.";
    }
}

// Exibe mensagem inicial ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = 
        "Olá! Eu sou a Gabi-GPT, sua Assistente IA oficial do Projeto Super Slim. " +
        "Estou aqui para ajudar você com dicas personalizadas de exercícios físicos. " +
        "Como posso ajudar você hoje?";
    addMessage(welcomeMessage, 'bot');
});

// Evento de clique no botão de envio
sendButton.addEventListener('click', sendMessage);

// Evento de envio ao pressionar Enter
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});