function adicionarAula(secaoId) {

    const titulo = prompt("Digite o título da aula:");
    const descricao = prompt("Digite o que você aprendeu:");

    if (!titulo || !descricao) {
        alert("Preencha todas as informações.");
        return;
    }

    const secao = document.querySelector(`#${secaoId} .container-aulas`);

    const novaAula = document.createElement("div");
    novaAula.classList.add("card");

    novaAula.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    `;

    secao.appendChild(novaAula);
}
