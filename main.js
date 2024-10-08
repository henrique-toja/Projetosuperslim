document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar conteúdo HTML e adicionar animação
    function loadHTMLContent(page) {
        // Seleciona o content-placeholder
        const content = document.getElementById('content-placeholder');

        // Aplica a classe fade-out para iniciar a transição de desaparecimento
        content.classList.add('fade-out');

        // Espera a transição terminar antes de carregar o novo conteúdo
        setTimeout(() => {
            fetch(page)  // Busca o arquivo HTML
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                    }
                    return response.text();  // Converte o conteúdo para texto
                })
                .then(data => {
                    // Insere o conteúdo HTML no content-placeholder
                    content.innerHTML = data;

                    // Remove a classe fade-out e adiciona fade-in para a nova transição
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');

                    // Reaplica os eventos aos botões carregados dinamicamente
                    applyButtonEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500); // Tempo da animação fade-out (0.5s)
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
                    loadHTMLContent(page);  // Carrega o novo conteúdo HTML com animação
                }
            });
        });
    }

    // Carrega o conteúdo inicial da página home.html
    loadHTMLContent('home.html');
});
