document.addEventListener("DOMContentLoaded", function () {
    const contentPlaceholder = document.getElementById('content-placeholder');

    const homeContent = `
        <section>
            <h3>Projeto Super Slim</h3>
            <p>O Projeto Super Slim não se resume apenas à perda de peso, mas sim à construção de uma mentalidade forte e resiliente para a adoção de hábitos saudáveis que permanecem ao longo da vida.</p>
        </section>

        <section>
            <h3>Plataforma de Emagrecimento Feminino</h3>
            <p>Ao alcançar o peso ideal, espera-se que a participante NUNCA MAIS precise participar do Projeto Super Slim. Portanto, após concluir sua jornada de emagrecimento, o acesso ao projeto é bloqueado, podendo ser restaurado apenas mediante solicitação. As conquistas e pontuações, no entanto, permanecem no ranking, servindo de inspiração para outras participantes que ainda estão na jornada.</p>
        </section>

        <div class="btn-container">
            <button class="btn-know" data-page="slim.js">Saiba Mais</button>
            <button class="btn-next" data-page="login.js">🔥 Entrar 🔥</button>
            <button class="btn-know" onclick="window.open('https://t.me/projetosuperslimbot', '_blank')">Conversar com a Slim IA no Telegram</button>
        </div>
    `;

    contentPlaceholder.innerHTML = homeContent;

    // Re-adiciona os event listeners para os botões carregados dinamicamente
    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const page = button.getAttribute('data-page');
            if (page) {
                event.preventDefault();
                fetch(page)
                    .then(response => response.text())
                    .then(data => {
                        contentPlaceholder.innerHTML = data;
                    });
            }
        });
    });
});