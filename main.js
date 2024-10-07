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

    // Load the initial content from 'home.html' on page load
    const contentFile = 'home.html';
    loadContent(contentFile); // Simplified to use the loadContent function

    // Select all buttons that have a data-page attribute
    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default button behavior
            const page = button.getAttribute('data-page'); // Get the page to load
            loadContent(page); // Load the content for the selected page
        });
    });
});
