function registrarAula() {
    const data = document.getElementById("dataAula").value;
    const conteudo = document.getElementById("conteudoAula").value;

    if (!data || !conteudo) {
        alert("Preencha a data e o conteúdo!");
        return;
    }

    const aula = {
        data: data,
        conteudo: conteudo
    };

    const chave = `aulas-${materiaId}`;

    let aulas = JSON.parse(localStorage.getItem(chave)) || [];
    aulas.push(aula);

    localStorage.setItem(chave, JSON.stringify(aulas));

    exibirAulas();
    document.getElementById("dataAula").value = "";
    document.getElementById("conteudoAula").value = "";
}

function exibirAulas() {
    const container = document.getElementById("aulasSalvas");
    container.innerHTML = "";

    const chave = `aulas-${materiaId}`;
    let aulas = JSON.parse(localStorage.getItem(chave)) || [];

    aulas.forEach((aula, index) => {
        container.innerHTML += `
            <div class="aula-card">
                <h4>${aula.data}</h4>
                <p>${aula.conteudo}</p>
                <button onclick="excluirAula(${index})">Excluir</button>
            </div>
        `;
    });
}

function excluirAula(index) {
    const chave = `aulas-${materiaId}`;
    let aulas = JSON.parse(localStorage.getItem(chave)) || [];

    aulas.splice(index, 1);

    localStorage.setItem(chave, JSON.stringify(aulas));
    exibirAulas();
}

window.onload = exibirAulas;

