function registrarAula() {
    const data = document.getElementById("dataAula").value;
    const conteudo = document.getElementById("conteudoAula").value;

    if (!data || !conteudo) {
        alert("Preencha a data e o conteúdo!");
        return;
    }

    fetch("https://railway-distribute-circumstances-unlimited.trycloudflare.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `materia=${encodeURIComponent(materiaId)}&data=${encodeURIComponent(data)}&conteudo=${encodeURIComponent(conteudo)}`
    })
        .then(response => response.text())
        .then(res => {
            console.log(res);
            exibirAulas();
            document.getElementById("dataAula").value = "";
            document.getElementById("conteudoAula").value = "";
        })
        .catch(error => console.error("Erro:", error));
}

function exibirAulas() {
    const container = document.getElementById("aulasSalvas");
    container.innerHTML = "Carregando...";

    fetch(`https://railway-distribute-circumstances-unlimited.trycloudflare.com${encodeURIComponent(materiaId)}`)
        .then(response => response.json())
        .then(aulas => {
            container.innerHTML = "";

            if (aulas.length === 0) {
                container.innerHTML = "<p>Nenhuma aula registrada.</p>";
                return;
            }

            aulas.forEach(aula => {
                container.innerHTML += `
                    <div class="aula-card">
                        <h4>${aula.data}</h4>
                        <p>${aula.conteudo}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = "Erro ao carregar aulas.";
            console.error(error);
        });
}

function excluirAula(index) {
    const chave = `aulas-${materiaId}`;
    let aulas = JSON.parse(localStorage.getItem(chave)) || [];

    aulas.splice(index, 1);

    localStorage.setItem(chave, JSON.stringify(aulas));
    exibirAulas();
}

document.addEventListener("DOMContentLoaded", exibirAulas);

