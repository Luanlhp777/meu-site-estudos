const aulasBd = [
    {
        data: "2026-02-26",
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
    }
];