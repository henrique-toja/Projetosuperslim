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

    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const page = button.getAttribute('data-page');
            loadContent(page);
        });
    });
});
