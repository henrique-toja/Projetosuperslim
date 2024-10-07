document.addEventListener("DOMContentLoaded", function () {
    function loadContent(page) {
        // ... (código original para carregar o conteúdo)
    }

    // Carrega o conteúdo inicial da página home.html
    loadContent('home.html');

    // Seleciona todos os botões com o atributo data-page
    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const page = button.getAttribute('data-page');

            // Verifica se o botão tem o atributo data-page
            if (page) {
                event.preventDefault();
                loadContent(page);
            }
        });
    });
});