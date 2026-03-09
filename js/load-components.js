function carregarFooter() {                                         // Declara uma função chamada carregarFooter. Essa função será responsável por buscar e inserir o footer na página.
    const container = document.getElementById("footer-container");  // Busca no HTML um elemento que tenha o id "footer-container". Esse elemento será o local onde o footer será inserido.

    if (!container) return; // Verifica se o elemento foi encontrado. Se não existir esse elemento na página, a função é encerrada. Isso evita erros caso alguma página não tenha footer.

    fetch("/Projeto Web/meu-site-estudos/components/footer.html") // Faz uma requisição HTTP para buscar o arquivo footer.html. O fetch retorna uma Promise com a resposta da requisição.
        .then(response => response.text()) // Quando a resposta chegar, esta função é executada. O método text() transforma o conteúdo da resposta em texto (HTML).
        .then(data => {                   // Quando a resposta chegar, esta função é executada. O método text() transforma o conteúdo da resposta em texto (HTML).
            container.innerHTML = data;  // Insere o conteúdo do footer dentro do elemento. Que tem o id "footer-container".
        })
        .catch(error => console.error("Erro ao carregar footer:", error)); // Caso ocorra algum erro durante o fetch. O erro será exibido no console do navegador.
}

document.addEventListener("DOMContentLoaded", carregarFooter); // Adiciona um "escutador de evento" no documento.
// DOMContentLoaded dispara quando todo o HTML da página foi carregado.
// Quando isso acontecer, a função carregarFooter será executada.
