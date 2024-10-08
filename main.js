document.addEventListener("DOMContentLoaded", function () {
    // Carrega a página inicial ou a página salva no localStorage
    const currentPage = localStorage.getItem('currentPage') || 'home.html';
    loadHTMLContent(currentPage);

    // Função para carregar conteúdo HTML e adicionar animação
    function loadHTMLContent(page) {
        const content = document.getElementById('content-placeholder');
        content.classList.add('fade-out');

        setTimeout(() => {
            fetch(page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    content.innerHTML = data;
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');

                    // Armazena a página atual no localStorage
                    localStorage.setItem('currentPage', page);

                    // Atualiza o histórico
                    history.pushState({ page: page }, '', page);

                    applyButtonEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Gerenciar eventos de navegação
    window.addEventListener('popstate', function(event) {
        if (event.state) {
            loadHTMLContent(event.state.page);
        } else {
            loadHTMLContent('home.html');
        }
    });

    // Aplica eventos aos botões e links carregados dinamicamente
    function applyButtonEvents() {
        const buttonsAndLinks = document.querySelectorAll(
            '#content-placeholder .btn-know[data-page], ' +
            '#content-placeholder .btn-next[data-page], ' +
            '#content-placeholder .btn-auth[data-page], ' +
            '#content-placeholder a[href="FAQ.html"], ' +
            '#content-placeholder a[href="politica-de-privacidade.html"], ' +
            '#content-placeholder a[href="termos-de-uso.html"]'
        );

        buttonsAndLinks.forEach(element => {
            element.addEventListener('click', function (event) {
                const page = element.getAttribute('data-page') || element.getAttribute('href');
                if (page) {
                    event.preventDefault();
                    loadHTMLContent(page);
                }
            });
        });
    }
});