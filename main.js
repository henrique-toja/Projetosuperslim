document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar conteúdo HTML
    function loadContent(page) {
        fetch(page)  // Busca o conteúdo do arquivo HTML
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                }
                return response.text();  // Converte o conteúdo para texto
            })
            .then(data => {
                // Insere o conteúdo HTML no content-placeholder
                document.getElementById('content-placeholder').innerHTML = data;
                
                // Reaplica os eventos aos botões carregados dinamicamente
                applyButtonEvents();
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                document.getElementById('content-placeholder').innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
            });
    }

    // Aplica eventos aos botões carregados dinamicamente
    function applyButtonEvents() {
        // Seleciona todos os botões com o atributo data-page dentro do content-placeholder
        const buttons = document.querySelectorAll('#content-placeholder .btn-know[data-page], #content-placeholder .btn-next[data-page]');
        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                const page = button.getAttribute('data-page');
                if (page) {
                    event.preventDefault();
                    loadContent(page);  // Carrega o novo conteúdo HTML
                }
            });
        });
    }

    // Carrega o conteúdo inicial da página home.html
    loadContent('home.html');
});