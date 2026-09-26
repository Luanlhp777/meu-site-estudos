-- =====================================================
-- BANCO DE DADOS
-- Meu Site de Estudos - Full Stack
-- =====================================================

CREATE DATABASE IF NOT EXISTS meu_site_estudos
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE meu_site_estudos;

-- =====================================================
-- TABELA: MODULOS
-- Armazena os módulos do curso
-- =====================================================

CREATE TABLE IF NOT EXISTS modulos (
    id_modulo INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    ordem TINYINT NOT NULL,

    PRIMARY KEY (id_modulo),
    UNIQUE (ordem)
);

-- =====================================================
-- TABELA: DISCIPLINAS
-- Armazena as disciplinas pertencentes a cada módulo
-- =====================================================

CREATE TABLE IF NOT EXISTS disciplinas (
    id_disciplina INT AUTO_INCREMENT,
    id_modulo INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    descricao VARCHAR(255),
    slug VARCHAR(150) NOT NULL,

    PRIMARY KEY (id_disciplina),
    UNIQUE (slug),

    CONSTRAINT fk_disciplinas_modulos
        FOREIGN KEY (id_modulo)
        REFERENCES modulos(id_modulo)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- =====================================================
-- TABELA: AULAS
-- Armazena as aulas registradas em cada disciplina
-- =====================================================

CREATE TABLE IF NOT EXISTS aulas (
    id_aula INT AUTO_INCREMENT,
    id_disciplina INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    data_aula DATE NOT NULL,
    conteudo TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id_aula),

    CONSTRAINT fk_aulas_disciplinas
        FOREIGN KEY (id_disciplina)
        REFERENCES disciplinas(id_disciplina)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- =====================================================
-- TABELA: MATERIAIS
-- Armazena materiais e links relacionados às aulas
-- =====================================================

CREATE TABLE IF NOT EXISTS materiais (
    id_material INT AUTO_INCREMENT,
    id_aula INT NOT NULL,
    tipo VARCHAR(30) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    url VARCHAR(500) NOT NULL,

    PRIMARY KEY (id_material),

    CONSTRAINT fk_materiais_aulas
        FOREIGN KEY (id_aula)
        REFERENCES aulas(id_aula)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- =====================================================
-- TABELA: PROJETOS
-- Armazena os projetos exibidos no portfólio
-- =====================================================

CREATE TABLE IF NOT EXISTS projetos (
    id_projeto INT AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL,
    descricao_curta VARCHAR(300) NOT NULL,
    descricao_completa TEXT,
    url_repositorio VARCHAR(500),
    url_site VARCHAR(500),
    destaque BOOLEAN NOT NULL DEFAULT FALSE,
    status VARCHAR(30) NOT NULL DEFAULT 'Em desenvolvimento',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id_projeto),
    UNIQUE (slug)
);

-- =====================================================
-- TABELA: TECNOLOGIAS
-- Armazena as tecnologias utilizadas nos projetos
-- =====================================================

CREATE TABLE IF NOT EXISTS tecnologias (
    id_tecnologia INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,

    PRIMARY KEY (id_tecnologia),
    UNIQUE (nome)
);

-- =====================================================
-- TABELA: PROJETO_TECNOLOGIA
-- Relaciona projetos às tecnologias utilizadas
-- =====================================================

CREATE TABLE IF NOT EXISTS projeto_tecnologia (
    id_projeto INT NOT NULL,
    id_tecnologia INT NOT NULL,

    PRIMARY KEY (id_projeto, id_tecnologia),

    CONSTRAINT fk_projeto_tecnologia_projeto
        FOREIGN KEY (id_projeto)
        REFERENCES projetos(id_projeto)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_projeto_tecnologia_tecnologia
        FOREIGN KEY (id_tecnologia)
        REFERENCES tecnologias(id_tecnologia)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- =====================================================
-- TABELA: USUARIOS
-- Armazena os usuários autorizados a acessar o painel
-- administrativo do sistema
-- =====================================================

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id_usuario),
    UNIQUE (email)
);