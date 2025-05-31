document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a[data-pagina]');
    const main = document.getElementById('conteudo-principal');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const pagina = this.getAttribute('data-pagina');

            if (pagina === 'index.html') {
                // Restaurar conteúdo inicial do main
                main.innerHTML = '<h2>Bem vindo!</h2><p>Conteúdo principal</p>';
                return;
            }

            fetch(pagina)
                .then(response => {
                    if (!response.ok) throw new Error('Erro ao carregar ' + pagina);
                    return response.text();
                })
                .then(html => {
                    main.innerHTML = html;
                })
                .catch(error => {
                    main.innerHTML = `<p style="color:red;">Erro ao carregar conteúdo: ${error.message}</p>`;
                });
        });
    });
});
