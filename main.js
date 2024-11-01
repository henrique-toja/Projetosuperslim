document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content-placeholder');

    // Função de verificação de login
    function isLoggedIn() {
        // Exemplo: Verifica se existe um token de autenticação no localStorage
        return localStorage.getItem('authToken') !== null;
    }

    // Função para carregar o conteúdo correto dependendo do status de login
    function loadContentBasedOnAuth() {
        const page = isLoggedIn() ? 'index-app.html' : 'index.html';
        loadHTMLContent(page);
    }

    // Função para carregar conteúdo HTML com animação
    function loadHTMLContent(page) {
        content.classList.add('fade-out');

        setTimeout(() => {
            fetch(page)
                .then(response => {
                    if (!response.ok) throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                    return response.text();
                })
                .then(data => {
                    content.innerHTML = data;
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');
                    applyButtonEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Aplica eventos aos botões e links dinamicamente carregados
    function applyButtonEvents() {
        const elements = document.querySelectorAll(
            '#content-placeholder .btn-know[data-page], ' +
            '#content-placeholder .btn-next[data-page], ' +
            '#content-placeholder .btn-auth[data-page], ' +
            'a[data-page]'
        );

        elements.forEach(element => {
            element.removeEventListener('click', handleClick);
            element.addEventListener('click', handleClick);
        });
    }

    // Função de clique para carregar página
    function handleClick(event) {
        const page = this.getAttribute('data-page') || this.getAttribute('href');
        if (page) {
            event.preventDefault();
            loadHTMLContent(page);
        }
    }

    // Carregar conteúdo baseado no status de login ao iniciar
    loadContentBasedOnAuth();
});
