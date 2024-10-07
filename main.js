// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar o conteúdo de uma página solicitada e inserir na div content-placeholder
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                // Substitui o conteúdo da div content-placeholder pelo conteúdo carregado
                document.getElementById('content-placeholder').innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                document.getElementById('content-placeholder').innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
            });
    }

    // Carrega o conteúdo inicial da página home.html ao carregar o site
    const contentFile = 'home.html';
    fetch(contentFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo inicial: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o conteúdo inicial:', error);
            document.getElementById('content-placeholder').innerHTML = '<p>Não foi possível carregar o conteúdo inicial. Por favor, tente novamente mais tarde.</p>';
        });

    // Seleciona os botões de navegação
    const btn-know = document.querySelector('.btn-know[href="slim"]');
    const btn-next = document.querySelector('.btn-next[href="login"]');

    // Adiciona eventos de clique para carregar o conteúdo dinamicamente ao clicar nos botões
    if (btn-know) {
        btn-know.addEventListener('click', function (event) {
            event.preventDefault();  // Impede o comportamento padrão do link
            loadContent('slim.html'); // Carrega o conteúdo da página slim.html
        });
    }

    if (btn-next) {
        btn-next.addEventListener('click', function (event) {
            event.preventDefault();  // Impede o comportamento padrão do link
            loadContent('login.html'); // Carrega o conteúdo da página login.html
        });
    }
});