SELECT * FROM meu_site_estudos.modulos;

SHOW TABLES;

DESCRIBE projetos;

SELECT * FROM modulos;

SELECT * FROM aulas;

SELECT * FROM materiais;

SELECT * FROM projetos;

SELECT * FROM tecnologias;

-- =====================================================

SELECT
    disciplinas.id_disciplina,
    disciplinas.nome AS disciplina,
    modulos.nome AS modulo
FROM disciplinas
INNER JOIN modulos
    ON disciplinas.id_modulo = modulos.id_modulo
ORDER BY modulos.ordem, disciplinas.nome;

-- =====================================================

SELECT
    id_disciplina,
    nome
FROM disciplinas
ORDER BY id_disciplina;

-- =====================================================

SELECT
    aulas.id_aula,
    aulas.data_aula,
    aulas.titulo AS aula,
    disciplinas.nome AS disciplina,
    modulos.nome AS modulo,
    materiais.tipo AS tipo_material,
    materiais.titulo AS material,
    materiais.url
FROM aulas
INNER JOIN disciplinas
    ON aulas.id_disciplina = disciplinas.id_disciplina
INNER JOIN modulos
    ON disciplinas.id_modulo = modulos.id_modulo
LEFT JOIN materiais
    ON aulas.id_aula = materiais.id_aula
ORDER BY aulas.data_aula DESC;

-- =====================================================

SELECT
    aulas.id_aula,
    aulas.data_aula,
    aulas.titulo,
    disciplinas.nome AS disciplina,
    modulos.nome AS modulo
FROM aulas
INNER JOIN disciplinas
    ON aulas.id_disciplina = disciplinas.id_disciplina
INNER JOIN modulos
    ON disciplinas.id_modulo = modulos.id_modulo
ORDER BY aulas.data_aula DESC;

-- =====================================================

SELECT
    projetos.nome AS projeto,
    tecnologias.nome AS tecnologia
FROM projeto_tecnologia
INNER JOIN projetos
    ON projeto_tecnologia.id_projeto = projetos.id_projeto
INNER JOIN tecnologias
    ON projeto_tecnologia.id_tecnologia = tecnologias.id_tecnologia
WHERE projetos.id_projeto = 1
ORDER BY tecnologias.nome;