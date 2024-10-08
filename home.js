// Cria os elementos principais para o conteúdo da página
const homeContainer = document.createElement('div');

// Seção 1
const section1 = document.createElement('section');
const section1Title = document.createElement('h3');
section1Title.textContent = 'Projeto Super Slim';
const section1Paragraph = document.createElement('p');
section1Paragraph.textContent = 'O Projeto Super Slim não se resume apenas à perda de peso, mas sim à construção de uma mentalidade forte e resiliente para a adoção de hábitos saudáveis que permanecem ao longo da vida.';
section1.appendChild(section1Title);
section1.appendChild(section1Paragraph);

// Seção 2
const section2 = document.createElement('section');
const section2Title = document.createElement('h3');
section2Title.textContent = 'Plataforma de Emagrecimento Feminino';
const section2Paragraph = document.createElement('p');
section2Paragraph.textContent = 'Ao alcançar o peso ideal, espera-se que a participante NUNCA MAIS precise participar do Projeto Super Slim. Portanto, após concluir sua jornada de emagrecimento, o acesso ao projeto é bloqueado, podendo ser restaurado apenas mediante solicitação. As conquistas e pontuações, no entanto, permanecem no ranking, servindo de inspiração para outras participantes que ainda estão na jornada.';
section2.appendChild(section2Title);
section2.appendChild(section2Paragraph);

// Contêiner dos botões
const buttonContainer = document.createElement('div');
buttonContainer.className = 'btn-container';

// Botão "Saiba Mais"
const btnKnow = document.createElement('button');
btnKnow.className = 'btn-know';
btnKnow.textContent = 'Saiba Mais';
btnKnow.addEventListener('click', () => {
    window.location.href = '/slim';
});

// Botão "Entrar"
const btnNext = document.createElement('button');
btnNext.className = 'btn-next';
btnNext.textContent = '🔥 Entrar 🔥';
btnNext.addEventListener('click', () => {
    window.location.href = '/login';
});

// Botão para Telegram
const btnTelegram = document.createElement('button');
btnTelegram.className = 'btn-know';
btnTelegram.textContent = 'Conversar com a Slim IA no Telegram';
btnTelegram.addEventListener('click', () => {
    window.open('https://t.me/projetosuperslimbot', '_blank');
});

// Adiciona os botões ao contêiner
buttonContainer.appendChild(btnKnow);
buttonContainer.appendChild(btnNext);
buttonContainer.appendChild(btnTelegram);

// Adiciona todas as seções e botões ao contêiner principal
homeContainer.appendChild(section1);
homeContainer.appendChild(section2);
homeContainer.appendChild(buttonContainer);

// Insere o conteúdo no elemento com ID 'home' no index.html
document.getElementById('home').appendChild(homeContainer);