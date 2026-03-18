function renderizarAulas(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    lista
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .forEach((aula, index) => {
            const card = document.createElement("div");
            card.classList.add("card-aula");

            const imagensHTML = (aula.imagens || [])
                .map(
                    (imagem) =>
                        `<img src="${imagem}" alt="Imagem da Aula" class="aula-imagem" onclick="abrirModal('${imagem}')" />`
                )
                .join("");

            card.innerHTML = `
                <div class="card-header" onclick="toggleAula(${index})">
                    <span class="badge-data">
                        ${formatarData(aula.data)}
                    </span>
                    <h3>${aula.titulo || "Aula"}</h3>
                    <span class="icone">▼</span>
                </div>
                <div class="card-body" id="aula-${index}">
                    <p>${aula.conteudo}</p>
                    <div class="imagens-container">
                        ${imagensHTML}
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
}

function toggleAula(id) {
    const elemento = document.getElementById(`aula-${id}`);
    if (elemento) elemento.classList.toggle("ativo");
}

function formatarData(dataString) {
    if (!dataString) return "Data inválida";

    const partes = dataString.split("-");
    if (partes.length !== 3) return "Data inválida";

    const [ano, mes, dia] = partes;
    return `${dia}/${mes}/${ano}`;
}
