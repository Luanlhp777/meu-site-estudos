(() => {
    // Seletores do bloco de frase no hero
    const box = document.querySelector('[data-quote-box]');
    const text = document.querySelector('[data-quote-text]');
    const author = document.querySelector('[data-quote-author]');
    const status = document.querySelector('[data-quote-status]');

    // Se o bloco não existir na página, sai silenciosamente
    if (!box || !text || !author || !status) return;

    // Conjunto de frases locais (sem consumo de API)
    const quotes = [
        { content: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', author: 'Robert Collier' },
        { content: 'A persistência é o caminho do êxito.', author: 'Charles Chaplin' },
        { content: 'A imaginação é mais importante que o conhecimento.', author: 'Albert Einstein' },
        { content: 'A melhor maneira de prever o futuro é criá-lo.', author: 'Peter Drucker' },
        { content: 'Coragem é saber o que não temer.', author: 'Platão' },
        { content: 'A disciplina é a ponte entre metas e realizações.', author: 'Jim Rohn' }
    ];

    const pickRandom = () => quotes[Math.floor(Math.random() * quotes.length)];

    // Exibe uma frase fixa (aleatória) a cada carregamento da página
    const { content, author: who } = pickRandom();
    text.textContent = content;
    author.textContent = `— ${who}`;
    status.textContent = 'Frase do dia';
    box.classList.remove('loading');
})();