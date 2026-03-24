(() => {
    // Camada de código animado sempre injetada
    if (!document.querySelector('.codigo-fundo')) {
        const codes = [
            'function aprender() { return "code"; }',
            'console.log("Hello, World!");',
            'let stack = [HTML, CSS, JS];',
            'const dev = { foco: "FullStack", ano: 2026 };',
            'if (bug) { fix(); refactor(); }',
            'while (estudar) { evoluir++; }',
            'const db = new Map(); db.set("skills", true);',
            'Promise.resolve("ship it")'
        ];

        const spans = codes.map(c => `<span>${c}</span>`).join('');
        const codeLayer = `<div class="codigo-fundo">${spans}</div>`;
        document.body.insertAdjacentHTML('afterbegin', codeLayer);
    }

    const noLayout = document.body.dataset.noLayout === "true";
    if (noLayout) {
        return; // não injeta header/footer, apenas a camada de código
    }

    const root = document.body.dataset.root || "";

    const headerHtml = `
    <nav role="navigation" aria-label="Menu principal">
        <a href="${root}index.html" class="logo">Luan Araujo</a>
        <button type="button" class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="menu">
            \u2630 <span class="sr-only">Abrir menu</span>
        </button>
        <ul id="menu">
            <li><a href="${root}inicio.html">Início</a></li>
            <li><a href="${root}sobre.html">Sobre Mim</a></li>
            <li><a href="${root}projetos/projetos.html">Projetos</a></li>
            <li><a href="${root}estudos/estudos.html">Diário de Estudos</a></li>
        </ul>
    </nav>`;

    const footerHtml = `
    <footer class="footer-minimal">
        <div class="footer-inner">
            <p class="footer-copy">© 2026 Luan Araujo</p>
            <div class="footer-icons">
                <a href="https://instagram.com/luanlhp777" target="_blank" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9z" />
                    </svg>
                </a>
                <a href="https://github.com/luanlhp777" target="_blank" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5A12 12 0 000 12.6c0 5.5 3.4 10.2 8.2 11.8.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.6 2.2 3.6 1.6.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.4-2.4 1.1-3.2-.1-.3-.5-1.6.1-3.3 0 0 .9-.3 3.3 1.2a11.3 11.3 0 016 0c2.4-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.8 1.1 1.9 1.1 3.2 0 4.7-2.9 5.8-5.6 6.1.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12.1 12.1 0 0024 12.6 12 12 0 0012 .5z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/luan-pereira-24a8ba86/" target="_blank" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5A2.5 2.5 0 102 6a2.5 2.5 0 002.98-2.5zM2.4 8.9h5.1V21H2.4zM9.5 8.9h4.9v1.6h.1c.7-1.3 2.4-2.6 5-2.6 5.3 0 6.3 3.5 6.3 8V21h-5.1v-7c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V21H9.5z" />
                    </svg>
                </a>
            </div>
        </div>
    </footer>`;

    if (!document.querySelector('nav')) {
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
    }

    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHtml);
    }

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        const closeMenu = () => {
            menu.classList.remove('ativo');
            menuToggle.setAttribute('aria-expanded', 'false');
        };

        menuToggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('ativo');
            menuToggle.setAttribute('aria-expanded', isOpen.toString());
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }
})();
