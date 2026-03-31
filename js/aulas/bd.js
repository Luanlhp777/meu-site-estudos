const aulasBd = [
    {
        data: "2026-02-23",
        titulo: "Introdução ao Banco de Dados",
        conteudo: `Banco de dados é um conjunto estruturado de dados relacionados, organizado para garantir integridade, segurança e eficiência das informações. Seu funcionamento se baseia em três pilares fundamentais: organização, relacionamento e regras.
        No modelo relacional, criado por Edgar F. Codd, os dados são estruturados com base na teoria dos conjuntos. A organização ocorre por meio de tabelas (relações), compostas por linhas (tuplas) e colunas (atributos). Cada atributo possui um domínio, que define o tipo de dado permitido.
        Para evitar duplicidade de registros, cada tabela deve possuir um identificador único chamado chave primária. Além disso, existe a chave estrangeira, responsável por estabelecer o relacionamento entre tabelas, permitindo a extração e associação de dados de diferentes estruturas.`
    },
    {
        data: "2026-03-09",
        titulo: "Entidade | Atributos | Relacionamento",
        conteudo: `Na aula de hoje estudamos os conceitos de entidade, atributos, relacionamento e cardinalidade dentro da modelagem de banco de dados. Entidade é qualquer objeto ou conceito do mundo real sobre o qual desejamos armazenar informações, como aluno, cliente ou produto. Os atributos são as características que descrevem essas entidades, como nome, endereço, telefone ou idade.
        Também aprendemos que relacionamento representa a associação entre duas ou mais entidades, geralmente identificado por verbos que ligam os elementos no texto. Já a cardinalidade define a quantidade mínima e máxima de ocorrências entre entidades, indicando relações como um para um ou um para muitos.
        Durante a aula realizamos dois estudos de caso, onde identificamos entidades, atributos, relacionamentos e cardinalidades a partir de um enunciado. Depois desenhamos os diagramas tanto no caderno quanto utilizando o site app.diagrams.net.
        `,
        imagens: [
            "../../images/imgBd/derLivro.png",
            "../../images/imgBd/derConsulta.png"
        ]
    },
    {
        data: "2026-03-23",
        titulo: "Introdução ao SQL",
        conteudo: `Na aula de hoje estudamos a linguagem SQL (Structured Query Language), utilizada para consultar, inserir, atualizar e controlar dados em um banco de dados. Foi explicado que o SQL não é uma linguagem de programação tradicional, mas sim uma linguagem declarativa, pois o usuário informa o que deseja obter do banco e não como o sistema deve executar a tarefa.
        Durante a prática, utilizamos o MySQL Workbench para criar um banco de dados chamado escola com o comando CREATE DATABASE escola. Em seguida, selecionamos o banco com USE escola e criamos a tabela aluno, definindo os campos id_aluno como chave primária, nome como texto (VARCHAR) e idade como número inteiro.
        Também foi apresentado o conceito de operações básicas conhecidas como CRUD, como SELECT para consultar dados, INSERT para inserir registros, UPDATE para atualizar informações e DELETE para remover dados. Foi destacado o cuidado no uso da cláusula WHERE, pois sua ausência pode alterar ou excluir todos os registros da tabela.
        Além disso, foram introduzidos conceitos importantes como filtros com operadores, ordenação com ORDER BY, agrupamento de dados com GROUP BY e o uso de JOIN para relacionar tabelas, reforçando a importância das chaves primárias e estrangeiras para garantir a integridade dos dados no banco.
        `
    },
    {
        data: "2026-03-30",
        titulo: "CRUD Academia",
        conteudo: ` Na aula de hoje desenvolvemos um projeto prático de CRUD no MySQL, utilizando como exemplo um sistema de academia. O objetivo foi entender na prática como criar, consultar, atualizar e excluir dados dentro de um banco de dados relacional.
        Aprendemos que um banco de dados relacional organiza as informações em tabelas que se relacionam entre si, evitando duplicidade e melhorando a organização. No projeto, criamos as tabelas alunos, planos e matriculas, onde a tabela matriculas faz a ligação entre alunos e planos.
        Também revisamos o conceito de chave primária (identificador único de cada registro) e chave estrangeira (responsável por criar o relacionamento entre tabelas), garantindo a integridade dos dados. Foi utilizado o AUTO_INCREMENT para gerar automaticamente os IDs em sequência.
        Durante a prática, criamos o banco de dados academia, as tabelas, verificamos sua estrutura com comandos como SHOW TABLES e DESCRIBE, inserimos dados com INSERT e realizamos consultas com SELECT. A aula reforçou a importância da ordem das operações e do entendimento das relações entre as tabelas para o correto funcionamento do sistema.
        `,
        imagens: [
            "../../images/imgBd/imgBanco1.png",
            "../../images/imgBd/imgBanco2.png",
            "../../images/imgBd/imgBanco3.png",
            "../../images/imgBd/imgBanco4.png",
            "../../images/imgBd/imgBanco5.png"
        ]
    },
];