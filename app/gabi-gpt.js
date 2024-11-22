const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

const API_ENDPOINT = "https://models.inference.ai.azure.com/v1/chat/completions";
const API_KEY = process.env["API_GITHUB_TOKEN"]; // Utilizando a variável de ambiente
const MODEL_NAME = "gpt-4o-mini"; // Modelo especificado

// Função para adicionar mensagens no chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `message-${type}`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para enviar mensagem para a API e obter resposta
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
        return "Desculpe, algo deu errado ao tentar responder.";
    }
}

// Exibe mensagem inicial ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = 
        "Olá! Eu sou a Gabi-GPT, sua Assistente IA oficial do Projeto Super Slim. " +
        "Estou aqui para ajudar você com dicas personalizadas de exercícios físicos. " +
        "Como posso ajudar você hoje?";
    addMessage(welcomeMessage, 'bot');
});

// Evento para enviar mensagem
sendButton.addEventListener('click', async () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, 'user'); // Adiciona mensagem do usuário ao chat
        messageInput.value = '';

        // Exibe uma mensagem de "digitando" enquanto espera a resposta
        addMessage('Gabi-GPT está digitando...', 'bot');

        // Obtém a resposta do bot e exibe
        const typingMessage = chatMessages.querySelector('.message-bot:last-child');
        const botResponse = await getBotResponse(message);

        if (typingMessage) typingMessage.remove(); // Remove a mensagem de "digitando"

        addMessage(botResponse, 'bot');
    }
});

// Evento para enviar mensagem ao pressionar Enter
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});