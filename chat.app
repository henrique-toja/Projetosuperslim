/* Estilos do container principal do chat */
#chat-container {
    display: flex; /* Usando o modelo de layout flexbox para organizar os elementos */
    flex-direction: column; /* Organiza os elementos verticalmente */
    width: 100%; /* Faz o container ocupar 100% da largura disponível */
    max-width: 600px; /* Limita a largura máxima do container */
    height: calc(100vh - 12rem); /* Define a altura do container como o espaço restante entre o header e o footer */
    border: 1px solid var(--color-purple); /* Adiciona uma borda roxa ao redor do container */
    border-radius: 10px; /* Arredonda os cantos do container */
    overflow: hidden; /* Garante que qualquer conteúdo fora do container seja ocultado */
    background: rgba(255, 255, 255, 0.85); /* Define um fundo semitransparente branco */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Aplica uma sombra suave ao redor do container */
    margin: auto; /* Centraliza o container horizontalmente */
    position: relative; /* Garante que o container seja posicionado corretamente em relação aos seus elementos filhos */
}

/* Cabeçalho do chat */
#chat-header {
    background-color: var(--color-purple); /* Define a cor de fundo do cabeçalho como roxa */
    color: var(--color-white); /* Define a cor do texto como branco */
    text-align: center; /* Centraliza o texto no cabeçalho */
    padding: 10px; /* Adiciona 10px de padding ao redor do texto */
    font-size: var(--font-size-h3); /* Define o tamanho da fonte do cabeçalho */
    flex-shrink: 0; /* Impede que o cabeçalho encolha ao redimensionar o container */
}

/* Mensagens do chat (área rolável) */
#chat-messages {
    flex: 1; /* Faz a área de mensagens ocupar o espaço restante */
    padding: 10px; /* Adiciona 10px de padding ao redor do conteúdo */
    overflow-y: auto; /* Permite a rolagem vertical quando necessário */
    background-color: #f9f9f9; /* Define a cor de fundo da área de mensagens */
    display: flex; /* Usando o modelo de layout flexbox para organizar as mensagens */
    flex-direction: column; /* Organiza as mensagens verticalmente */
    gap: 10px; /* Adiciona um espaço de 10px entre as mensagens */
}

/* Estilo das mensagens */
.chat-message {
    margin: 5px 0; /* Adiciona uma margem de 5px em cima e embaixo das mensagens */
    padding: 10px; /* Adiciona 10px de padding ao redor do texto das mensagens */
    border-radius: 5px; /* Arredonda os cantos das mensagens */
    background-color: var(--color-green); /* Define o fundo da mensagem com a cor verde */
    color: var(--color-white); /* Define a cor do texto da mensagem como branca */
    max-width: 80%; /* Limita a largura máxima da mensagem a 80% da largura do container */
    word-wrap: break-word; /* Quebra palavras longas para evitar que elas ultrapassem os limites da mensagem */
}

/* Estilo das mensagens enviadas pelo usuário (com a classe 'self') */
.chat-message.self {
    background-color: var(--color-purple); /* Muda a cor de fundo da mensagem enviada para roxa */
    margin-left: auto; /* Alinha a mensagem à direita */
    text-align: right; /* Alinha o texto da mensagem à direita */
}

/* Campo de entrada do chat */
#chat-input {
    display: flex; /* Usando o modelo de layout flexbox para organizar os elementos do campo de entrada */
    border-top: 1px solid #ccc; /* Adiciona uma borda superior suave */
    background-color: #fff; /* Define o fundo do campo de entrada como branco */
    padding: 10px; /* Adiciona 10px de padding ao redor do conteúdo do campo de entrada */
    box-sizing: border-box; /* Garante que padding e bordas sejam incluídos nas dimensões do campo de entrada */
    flex-shrink: 0; /* Impede que o campo de entrada encolha ao redimensionar o container */
}

/* Estilos do campo de texto onde o usuário digita a mensagem */
#message-input {
    flex: 1; /* Faz com que o campo de entrada ocupe o espaço restante disponível */
    padding: 10px; /* Adiciona 10px de padding ao redor do campo de texto */
    border: none; /* Remove a borda do campo de texto */
    outline: none; /* Remove o contorno ao focar no campo */
    font-size: var(--font-size-body); /* Define o tamanho da fonte do campo de texto */
}

/* Estilos do botão de envio */
#send-button {
    padding: 10px; /* Adiciona 10px de padding ao redor do botão */
    background-color: var(--color-purple); /* Define o fundo do botão como roxo */
    color: var(--color-white); /* Define a cor do texto do botão como branco */
    border: none; /* Remove a borda do botão */
    cursor: pointer; /* Muda o cursor para uma mãozinha ao passar sobre o botão */
    transition: var(--button-transition); /* Aplica uma transição suave para interações com o botão */
}

/* Efeito de hover no botão de envio */
#send-button:hover {
    background-color: var(--color-green); /* Muda o fundo do botão para verde quando o mouse passa por cima */
}