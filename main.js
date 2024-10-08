document.addEventListener("DOMContentLoaded", function () {
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

                    // Reaplica os eventos aos botões e links carregados dinamicamente
                    applyButtonEvents();
                })
                .catch(error => {
                    console.error('Erro ao carregar o conteúdo:', error);
                    content.innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
                });
        }, 500);
    }

    // Aplica eventos aos botões e links carregados dinamicamente
    function applyButtonEvents() {
        const buttonsAndLinks = document.querySelectorAll(
            '#content-placeholder .btn-know[data-page], ' +
            '#content-placeholder .btn-next[data-page], ' +
            '#content-placeholder .btn-auth[data-page], ' +
            '#content-placeholder a[data-page]'
        );

        buttonsAndLinks.forEach(element => {
            // Remove eventos anteriores, se necessário (opcional)
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

    // Carrega o conteúdo inicial da página home.html
    loadHTMLContent('home.html');
});