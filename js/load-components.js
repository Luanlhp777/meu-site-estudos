function carregarFooter() {
    const container = document.getElementById("footer-container");

    if (!container) return;

    fetch("/Projeto Web/meu-site-estudos/components/footer.html")
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar footer:", error));
}

document.addEventListener("DOMContentLoaded", carregarFooter);
