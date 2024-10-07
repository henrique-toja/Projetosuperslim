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

       // Carrega o conteúdo inicial da página home.html ao carregar o site
       const contentFile = 'home.html';
       loadContent(contentFile);

       // Seleciona todos os botões com o atributo data-page
       const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');
       console.log('Botões encontrados:', buttons); // Log dos botões encontrados

       buttons.forEach(button => {
           button.addEventListener('click', function (event) {
               event.preventDefault(); // Impede o comportamento padrão do botão
               const page = button.getAttribute('data-page'); // Obtém a página a ser carregada
               console.log('Botão clicado, carregando página:', page); // Log da página a ser carregada
               loadContent(page); // Carrega o conteúdo da página selecionada
           });
       });
   });