// main.js
document.addEventListener("DOMContentLoaded", function() {
    // Define o caminho para o arquivo home.html
    const contentFile = 'home.html';

    // Busca o conteúdo do arquivo home.html e insere no content-placeholder
    fetch(contentFile)
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
});