document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar e executar scripts .js dinamicamente
    function loadContent(pageScript) {
        // Remove o conteúdo anterior
        document.getElementById('content-placeholder').innerHTML = '';

        // Remove script anterior se existir
        const existingScript = document.getElementById('dynamic-script');
        if (existingScript) {
            existingScript.remove();
        }

        // Cria um novo script para carregar o conteúdo .js
        const script = document.createElement('script');
        script.src = pageScript;  // Caminho para o arquivo JS
        script.id = 'dynamic-script';  // ID para facilitar a remoção
        script.type = 'text/javascript';
        
        // Adiciona o script na página, que executa o código correspondente
        document.body.appendChild(script);
    }

    // Carrega o conteúdo inicial da página (home.js)
    loadContent('home.js');

    // Seleciona todos os botões com o atributo data-page
    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const page = button.getAttribute('data-page');

            // Verifica se o botão tem o atributo data-page
            if (page) {
                event.preventDefault();
                loadContent(page);  // Carrega o módulo JS especificado no data-page
            }
        });
    });
});