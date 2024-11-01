document.addEventListener("DOMContentLoaded", function () {
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('content-placeholder').innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                document.getElementById('content-placeholder').innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
            });
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