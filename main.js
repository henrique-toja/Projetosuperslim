document.addEventListener("DOMContentLoaded", function () {
    function loadContent(pageScript) {
        document.getElementById('content-placeholder').innerHTML = '';

        const existingScript = document.getElementById('dynamic-script');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.src = pageScript;
        script.id = 'dynamic-script';
        script.type = 'text/javascript';

        document.body.appendChild(script);
    }

    loadContent('home.html');

    const buttons = document.querySelectorAll('.btn-know[data-page], .btn-next[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const page = button.getAttribute('data-page');
            if (page) {
                event.preventDefault();
                loadContent(page);
            }
        });
    });
});
