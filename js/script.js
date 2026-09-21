const app = document.getElementById("app");

const rotas = {
    inicio: `
        <h2>Bem-vindo à Esperança Viva</h2>
        <p>Conheça a ONG e nossas ações sociais.</p>
    `,

    projetos: `
        <h2>Nossos Projetos</h2>
        <p>Conheça nossas principais iniciativas.</p>
    `,

    cadastro: `
        <h2>Cadastro</h2>
        <p>Preencha seus dados para participar das nossas ações.</p>
    `
};

function navegar(pagina) {
    app.innerHTML = rotas[pagina] || rotas.inicio;
}

document.querySelectorAll("[data-rota]").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.dataset.rota;

        navegar(pagina);
    });
});

navegar("inicio");