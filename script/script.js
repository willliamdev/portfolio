
const main = document.getElementById('conteudo-principal');

function render(pagina) {
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
}


document.addEventListener("DOMContentLoaded", function () {

    const home = "pages/home.html"
    render(home);

    const links = document.querySelectorAll('nav a[data-pagina]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const pagina = this.getAttribute('data-pagina');
            render(pagina)
        });
    });
});
