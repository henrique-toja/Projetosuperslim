// Aguarda o carregamento completo do conteúdo da página antes de executar a função
document.addEventListener("DOMContentLoaded", function () {
    
    // Função que carrega o conteúdo de uma página via fetch e injeta no HTML
    function loadContent(page) {
        fetch(page) // Faz uma requisição para carregar o conteúdo da página
            .then(response => {
                // Verifica se a resposta foi bem-sucedida
                if (!response.ok) {
                    // Lança um erro caso a resposta não seja bem-sucedida
                    throw new Error('Erro ao carregar o conteúdo: ' + response.statusText);
                }
                return response.text(); // Retorna o conteúdo da resposta como texto
            })
            .then(data => {
                // Insere o conteúdo carregado dentro do elemento com o id 'content-placeholder'
                document.getElementById('content-placeholder').innerHTML = data;
            })
            .catch(error => {
                // Em caso de erro na requisição, exibe a mensagem de erro no console e insere uma mensagem de erro na página
                console.error('Erro ao carregar o conteúdo:', error);
                document.getElementById('content-placeholder').innerHTML = '<p>Não foi possível carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
            });
    }

    // Carrega o conteúdo inicial da página 'main.html' ao carregar a página
    loadContent('main.html');

    // Seleciona todos os botões no footer e header que possuem o atributo 'data-page'
    const buttons = document.querySelectorAll('.footer-button[data-page], .header-button[data-page]');

    // Itera sobre cada botão e adiciona um evento de clique
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Obtém o valor do atributo 'data-page' do botão clicado
            const page = button.getAttribute('data-page');

            // Verifica se o botão possui o atributo 'data-page' com o nome da página
            if (page) {
                event.preventDefault(); // Impede o comportamento padrão do botão (como redirecionamento)
                loadContent(page); // Carrega o conteúdo da página associada ao botão
            }
        });
    });
});