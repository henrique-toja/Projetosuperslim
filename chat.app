/* Estilos do container principal do chat */
#chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    height: calc(100vh - 12rem); /* Espaço restante entre header e footer */
    border: 1px solid var(--color-purple);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: auto;
    position: relative; /* Para garantir que o container se posicione corretamente */
}

/* Cabeçalho do chat */
#chat-header {
    background-color: var(--color-purple);
    color: var(--color-white);
    text-align: center;
    padding: 10px;
    font-size: var(--font-size-h3);
    flex-shrink: 0; /* Impede que o cabeçalho encolha */
}

/* Mensagens do chat (área rolável) */
#chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto; /* Adiciona rolagem apenas aqui */
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Estilo das mensagens */
.chat-message {
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--color-green);
    color: var(--color-white);
    max-width: 80%;
    word-wrap: break-word;
}

.chat-message.self {
    background-color: var(--color-purple);
    margin-left: auto;
    text-align: right;
}

/* Campo de entrada do chat */
#chat-input {
    display: flex;
    border-top: 1px solid #ccc;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    flex-shrink: 0; /* Impede que o campo de entrada encolha */
}

#message-input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    font-size: var(--font-size-body);
}

#send-button {
    padding: 10px;
    background-color: var(--color-purple);
    color: var(--color-white);
    border: none;
    cursor: pointer;
    transition: var(--button-transition);
}

#send-button:hover {
    background-color: var(--color-green);
}