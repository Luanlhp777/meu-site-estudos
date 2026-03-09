function renderizarAulas(lista, containerId) {                  // Função responsável por renderizar (mostrar) as aulas na tela. Ela recebe dois parâmetros: lista -> array com todas as aulas. containerId -> id do elemento HTML onde os cards serão inseridos.
    const container = document.getElementById(containerId);    // Busca no HTML o elemento que receberá os cards das aulas.

    lista                                                     // Ordena a lista de aulas pela data. new Date() transforma a string da data em objeto Date. b.data - a.data faz ordenar da mais recente para a mais antiga.
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .forEach((aula, index) => {                          // Percorre cada aula da lista. Index é usado para criar identificadores únicos.

            const card = document.createElement("div");     // Cria um novo elemento <div> que será o card da aula.
            card.classList.add("card-aula");               // Adiciona a classe CSS "card-aula" ao card.

            let imagensHTML = '';                               // Variável que armazenará o HTML das imagens da aula.
            if (aula.imagens && aula.imagens.length > 0) {      // Verifica se a aula possui imagens associadas. aula.imagens -> array de imagens.
                imagensHTML = aula.imagens.map(imagem => {      // map percorre o array de imagens. Para cada imagem cria um elemento <img>.
                    return `<img src="${imagem}" alt="Imagem da Aula" class="aula-imagem" onclick="abrirModal('${imagem}')" />`;    // Cada imagem recebe: src -> caminho da imagem. class -> estilo CSS. onclick -> abre o modal ao clicar.

                }).join('');                            // join transforma o array de imagens em uma única string HTML
            }

            card.innerHTML =                           // Define o conteúdo interno do card usando template string (` `)
                `
                <div class="card-header" onclick="toggleAula(${index})">                <!-- Cabeçalho do card -->
                    <span class="badge-data">                                           <!-- Badge com a data da aula -->
                        ${formatarData(aula.data)}                                      <!-- A função formatarData transforma a data para dd/mm/aaaa -->
                    </span>
                    <span class="icone">▾</span>                                        <!-- Ícone de seta que indica expansão do conteúdo -->
                </div>
                                                                                        <!-- Corpo do card -->
                <div class="card-body" id="aula-${index}">                              <!-- Cada aula recebe um id único baseado no index -->
                    <p>${aula.conteudo}</p>                                             <!-- Conteúdo textual da aula -->
                    <div class="imagens-container">                                     <!-- Container que armazenará as imagens da aula -->
                        ${imagensHTML}                                                  <!-- Aqui serão inseridas as imagens geradas anteriormente -->
                    </div>
                </div>
            `;

            container.appendChild(card);            // Adiciona o card criado dentro do container da página.
        });
}

function toggleAula(id) {                                     // Função responsável por abrir ou fechar o conteúdo da aula.
    const elemento = document.getElementById(`aula-${id}`);  // Busca o elemento da aula usando o id gerado anteriormente.
    elemento.classList.toggle("ativo"); // Alterna a classe CSS "ativo". Se tiver a classe → remove. Se não tiver → adiciona. Isso geralmente controla a exibição com CSS (expandir/recolher).
}

function formatarData(dataString) {                         // Função responsável por formatar a data da aula.

    if (!dataString) return "Data inválida";                // Se a data não existir retorna mensagem de erro.

    const partes = dataString.split("-");                   // Espera que a data esteja no formato yyyy-mm-dd. split separa a string em partes usando "-"
    if (partes.length !== 3) return "Data inválida";        // Se não tiver exatamente 3 partes (ano, mês, dia), retorna erro.

    const [ano, mes, dia] = partes;                         // Desestruturação do array. ano = partes[0]. mes = partes[1]. dia = partes[2]

    return `${dia}/${mes}/${ano}`;                          // Retorna a data formatada no padrão brasileiro.
}