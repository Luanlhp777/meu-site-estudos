INSERT INTO modulos (nome, descricao, ordem)
VALUES
    ('Módulo 1', 'Fundamentos de programação e desenvolvimento', 1),
    ('Módulo 2', 'Desenvolvimento de sistemas e aplicações', 2);
    
-- =====================================================
    
INSERT INTO disciplinas (id_modulo, nome, descricao, slug)
VALUES
    (1, 'Programação Web I', 'Fundamentos de desenvolvimento web', 'programacao-web-1'),
    (1, 'Programação e Algoritmos', 'Fundamentos de lógica e programação', 'programacao-algoritmos'),
    (1, 'Banco de Dados I', 'Fundamentos de bancos de dados relacionais', 'banco-de-dados-1'),
    (1, 'Projetos de TIC', 'Desenvolvimento de projetos em tecnologia', 'projetos-tic');
    
-- =====================================================
    
INSERT INTO disciplinas (id_modulo, nome, descricao, slug)
VALUES
    (2, 'Programação Web II', 'Desenvolvimento front-end com frameworks', 'programacao-web-2'),
    (2, 'Banco de Dados II', 'Modelos de bancos de dados não relacionais', 'banco-de-dados-2'),
    (2, 'Desenvolvimento de Sistemas I', 'Desenvolvimento de aplicações back-end', 'desenvolvimento-sistemas-1'),
    (2, 'Programação de Aplicativos Mobile I', 'Desenvolvimento de aplicações mobile', 'mobile-1'),
    (2, 'Planejamento do TCC', 'Planejamento do Trabalho de Conclusão de Curso', 'planejamento-tcc'),
    (2, 'Projetos de Desenvolvimento de Sistemas', 'Planejamento e design de soluções de software', 'projetos-desenvolvimento-sistemas'),
    (2, 'Análise e Projeto de Sistemas', 'Análise e modelagem de sistemas de software', 'analise-projeto-sistemas');
    
-- =====================================================
    
    INSERT INTO materiais (
    id_aula,
    tipo,
    titulo,
    url
)
VALUES (
    1,
    'github',
    'Repositório da aula',
    'https://github.com/Luanlhp777'
);

-- =====================================================

INSERT INTO aulas (
    id_disciplina,
    titulo,
    data_aula,
    conteudo
)
VALUES (
    5,
    'Introdução à Programação Web II',
    '2026-09-25',
    'Primeiro registro de teste da disciplina Programação Web II.'
);

-- =====================================================

INSERT INTO projetos (
    nome,
    slug,
    descricao_curta,
    descricao_completa,
    url_repositorio,
    url_site,
    destaque,
    status
)
VALUES (
    'Coguis Informática',
    'coguis-informatica',
    'Projeto web desenvolvido para apresentar os serviços e a presença digital da Coguis Informática.',
    'Projeto desenvolvido para a Coguis Informática com foco na apresentação profissional dos serviços, presença digital e evolução contínua da plataforma.',
    NULL,
    NULL,
    TRUE,
    'Em desenvolvimento'
);

-- =====================================================

INSERT INTO tecnologias (nome)
VALUES
    ('HTML5'),
    ('CSS3'),
    ('JavaScript'),
    ('Node.js'),
    ('React'),
    ('MySQL'),
    ('MongoDB'),
    ('Git'),
    ('GitHub');
    
-- =====================================================
    
INSERT INTO projeto_tecnologia (
    id_projeto,
    id_tecnologia
)
VALUES
    (1, 1), -- HTML5
    (1, 2), -- CSS3
    (1, 3), -- JavaScript
    (1, 8), -- Git
    (1, 9); -- GitHub