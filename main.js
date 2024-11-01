document.addEventListener("DOMContentLoaded", function () {
    // Load initial page content based on authentication status
    const authToken = localStorage.getItem('authToken');
    const initialPage = authToken ? 'home' : 'login'; // Usando 'home' ou 'login' sem .html
    loadHTMLContent(initialPage);

    // Function to load HTML content and add animation
    function loadHTMLContent(page) {
        const content = document.getElementById('content-placeholder');
        content.classList.add('fade-out');

        setTimeout(() => {
            fetch(page + '.html') // Adiciona .html para a requisição
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

                    // Atualiza a URL sem a extensão .html
                    history.pushState({ page: page }, '', page);

                    // Reapply events to dynamically loaded buttons and links
                    applyButtonEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Apply events to dynamically loaded buttons and links
    function applyButtonEvents() {
        const buttonsAndLinks = document.querySelectorAll(
            '#content-placeholder .btn-know[data-page], ' +
            '#content-placeholder .btn-next[data-page], ' +
            '#content-placeholder .btn-auth[data-page], ' +
            'a[data-page]'
        );

        buttonsAndLinks.forEach(element => {
            element.removeEventListener('click', handleClick);
            element.addEventListener('click', handleClick);
        });
    }

    function handleClick(event) {
        const page = this.getAttribute('data-page') || this.getAttribute('href');
        if (page) {
            event.preventDefault();
            loadHTMLContent(page);
        }
    }

    // Handle browser navigation (back and forward)
    window.onpopstate = function(event) {
        if (event.state) {
            loadHTMLContent(event.state.page);
        }
    };
});