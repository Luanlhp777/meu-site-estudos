const aulasBd = [
    {
        data: "2026-02-23",
        titulo: "Introdução ao Banco de Dados",
        conteudo: `Banco de dados é um conjunto estruturado de dados relacionados, organizado para garantir integridade, segurança e eficiência das informações. Seu funcionamento se baseia em três pilares fundamentais: organização, relacionamento e regras.<br><br>
        No modelo relacional, criado por Edgar F. Codd, os dados são estruturados com base na teoria dos conjuntos. A organização ocorre por meio de tabelas (relações), compostas por linhas (tuplas) e colunas (atributos). Cada atributo possui um domínio, que define o tipo de dado permitido.<br><br>
        Para evitar duplicidade de registros, cada tabela deve possuir um identificador único chamado chave primária. Além disso, existe a chave estrangeira, responsável por estabelecer o relacionamento entre tabelas, permitindo a extração e associação de dados de diferentes estruturas.`
    },
    {
        data: "2026-03-09",
        titulo: "Entidade | Atributos | Relacionamento",
        conteudo: `Na aula de hoje estudamos os conceitos de entidade, atributos, relacionamento e cardinalidade dentro da modelagem de banco de dados. Entidade é qualquer objeto ou conceito do mundo real sobre o qual desejamos armazenar informações, como aluno, cliente ou produto. Os atributos são as características que descrevem essas entidades, como nome, endereço, telefone ou idade.<br><br>
        Também aprendemos que relacionamento representa a associação entre duas ou mais entidades, geralmente identificado por verbos que ligam os elementos no texto. Já a cardinalidade define a quantidade mínima e máxima de ocorrências entre entidades, indicando relações como um para um ou um para muitos.<br><br>
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
        conteudo: `Na aula de hoje estudamos a linguagem SQL (Structured Query Language), utilizada para consultar, inserir, atualizar e controlar dados em um banco de dados. Foi explicado que o SQL não é uma linguagem de programação tradicional, mas sim uma linguagem declarativa, pois o usuário informa o que deseja obter do banco e não como o sistema deve executar a tarefa.<br><br>
        Durante a prática, utilizamos o MySQL Workbench para criar um banco de dados chamado escola com o comando CREATE DATABASE escola. Em seguida, selecionamos o banco com USE escola e criamos a tabela aluno, definindo os campos id_aluno como chave primária, nome como texto (VARCHAR) e idade como número inteiro.<br><br>
        Também foi apresentado o conceito de operações básicas conhecidas como CRUD, como SELECT para consultar dados, INSERT para inserir registros, UPDATE para atualizar informações e DELETE para remover dados. Foi destacado o cuidado no uso da cláusula WHERE, pois sua ausência pode alterar ou excluir todos os registros da tabela.<br><br>
        Além disso, foram introduzidos conceitos importantes como filtros com operadores, ordenação com ORDER BY, agrupamento de dados com GROUP BY e o uso de JOIN para relacionar tabelas, reforçando a importância das chaves primárias e estrangeiras para garantir a integridade dos dados no banco.
        `
    },
    {
        data: "2026-03-30",
        titulo: "CRUD Academia",
        conteudo: ` Na aula de hoje desenvolvemos um projeto prático de CRUD no MySQL, utilizando como exemplo um sistema de academia. O objetivo foi entender na prática como criar, consultar, atualizar e excluir dados dentro de um banco de dados relacional.<br><br>
        Aprendemos que um banco de dados relacional organiza as informações em tabelas que se relacionam entre si, evitando duplicidade e melhorando a organização. No projeto, criamos as tabelas alunos, planos e matriculas, onde a tabela matriculas faz a ligação entre alunos e planos.<br><br>
        Também revisamos o conceito de chave primária (identificador único de cada registro) e chave estrangeira (responsável por criar o relacionamento entre tabelas), garantindo a integridade dos dados. Foi utilizado o AUTO_INCREMENT para gerar automaticamente os IDs em sequência.<br><br>
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
    {
        data: "2026-04-06",
        titulo: "JOIN | CRUD Clinica",
        conteudo: `Na aula de hoje estudamos o conceito de JOIN em SQL, que é utilizado para juntar informações de diferentes tabelas e formar um resultado completo. Foi explicado que, em bancos relacionais, os dados ficam separados em tabelas e o JOIN permite conectar essas informações por meio de campos em comum, geralmente chaves primárias e estrangeiras.<br><br>
        Aprendemos a importância de seguir uma sequência correta na criação das tabelas, garantindo que os relacionamentos funcionem corretamente. Também vimos que o comando DESCRIBE permite visualizar a estrutura de uma tabela e o SELECT é utilizado para consultar dados, sendo recomendado evitar o uso de SELECT * e especificar apenas os campos necessários.<br><br>
        Foi apresentado o uso de alias, que são apelidos temporários para tabelas ou colunas, facilitando a escrita e evitando ambiguidades, especialmente em consultas com JOIN. Outro ponto importante foi o uso do ON, que define a regra de relacionamento entre as tabelas.<br><br>
        Revisamos também o uso do WHERE para filtrar registros específicos, destacando que sua ausência em comandos como UPDATE e DELETE pode alterar ou apagar todos os dados da tabela. Por fim, vimos o comando DROP TABLE, que remove completamente uma tabela do banco de dados, sendo uma operação irreversível.<br><br>
        A aula reforçou boas práticas em SQL, como sempre utilizar WHERE em operações críticas, usar JOIN corretamente com ON e evitar consultas desnecessárias para manter o desempenho e a segurança dos dados.
        `,
        imagens: [
            "../../images/imgBd/0604img1.png",
            "../../images/imgBd/0604img2.png",
            "../../images/imgBd/0604img3.png",
            "../../images/imgBd/0604img4.png",
            "../../images/imgBd/0604img5.png",
            "../../images/imgBd/0604img6.png",
            "../../images/imgBd/0604img7.png",
            "../../images/imgBd/0604img8.png"
        ]
    },
    {
        data: "2026-04-13",
        titulo: "Atividade para nota",
        conteudo: ` Na aula de hoje realizamos uma atividade prática (prova) com foco em CRUD no MySQL, aplicando todos os conceitos de banco de dados relacional estudados até o momento. O objetivo foi desenvolver um sistema de gestão de eventos, criando um banco de dados completo com tabelas relacionadas.<br><br>
        Iniciamos com a criação do banco de dados e, em seguida, desenvolvemos três tabelas: participantes, eventos e inscrições. Cada tabela foi estruturada com chave primária (PRIMARY KEY) e utilizamos chave estrangeira (FOREIGN KEY) para criar o relacionamento entre participantes e eventos por meio da tabela inscrições.<br><br>
        Na sequência, realizamos a verificação das tabelas com comandos como SHOW TABLES e DESCRIBE, garantindo que a estrutura estivesse correta. Depois, inserimos dados nas tabelas respeitando a ordem lógica, primeiro nas tabelas principais e depois na tabela de relacionamento.<br><br>
        Também executamos consultas utilizando SELECT para visualizar os dados e aplicamos JOIN para unir informações de diferentes tabelas, mostrando, por exemplo, o nome do participante e o evento em que está inscrito.<br><br>
        Por fim, utilizamos os comandos UPDATE para alterar dados e DELETE para excluir registros, sempre com o uso da cláusula WHERE para evitar alterações ou exclusões em massa. A atividade reforçou a importância da integridade dos dados, do uso correto de relacionamentos e das boas práticas em SQL.
        `,
        imagens: [
            "../../images/imgBd/1304img1.png",
            "../../images/imgBd/1304img2.png",
            "../../images/imgBd/1304img3.png"
        ]
    },
    {
        data: "2026-04-27",
        titulo: "Correção da atividade",
        conteudo: ` Na aula de hoje realizamos a correção completa da prova prática de CRUD em MySQL, analisando passo a passo a construção de um banco de dados relacional para um sistema de gestão de eventos.<br><br>
        Iniciamos revisando a criação do banco de dados com o comando CREATE DATABASE eventos e sua seleção com USE eventos, reforçando a importância de sempre trabalhar no banco correto antes de executar comandos.<br><br>
        Em seguida, foi feita a análise da criação das tabelas: participantes, eventos e inscricoes. Cada tabela foi estruturada com chave primária (PRIMARY KEY) utilizando AUTO_INCREMENT, garantindo um identificador único para cada registro. Também foi destacado o uso de chave estrangeira (FOREIGN KEY) na tabela inscricoes, responsável por criar o relacionamento entre participantes e eventos, assegurando a integridade dos dados.<br><br>
        Na parte de verificação, utilizamos comandos como SHOW TABLES para listar as tabelas criadas e DESCRIBE para visualizar a estrutura de cada tabela, validando se os campos e tipos de dados estavam corretos.<br><br>
        Durante a correção da inserção de dados (INSERT), foi reforçada a importância da ordem lógica: primeiro inserir dados nas tabelas principais (participantes e eventos) e depois na tabela de relacionamento (inscricoes), evitando erros de referência.<br><br>
        Na etapa de consultas (SELECT), revisamos tanto consultas simples quanto consultas com JOIN, onde foi demonstrado como unir dados de diferentes tabelas para obter informações completas, como o nome do participante e o nome do evento em que está inscrito. Foi enfatizado o uso correto do JOIN com a cláusula ON para garantir a associação correta dos registros.<br><br>
        Também foi corrigido o uso do comando UPDATE, destacando a obrigatoriedade do uso do WHERE para evitar alterações em todos os registros da tabela. O mesmo cuidado foi reforçado no comando DELETE, onde a ausência do WHERE pode apagar todos os dados.
        <br/>
        <br/>
        Por fim, revisamos as questões teóricas da prova, reforçando que:<br/>
        - Sem WHERE no UPDATE, todos os registros são alterados<br/>
        - A chave estrangeira garante o relacionamento e a integridade dos dados<br/>
        - O JOIN permite integrar informações de diferentes tabelas<br/>
        <br/>
        A aula consolidou o entendimento sobre CRUD (Create, Read, Update, Delete), reforçando boas práticas, prevenção de erros críticos e a importância da modelagem correta em bancos de dados relacionais.
        `,
        imagens: [
            "../../images/imgBd/2704img1.png",
            "../../images/imgBd/2704img2.png"
        ]
    },
    {
        data: "2026-05-04",
        titulo: "Modelagem Relacional",
        conteudo: ` 1-) Na aula de ontem aprofundamos o estudo de modelagem relacional completa, indo além do SQL básico e entendendo como estruturar corretamente um banco de dados antes da implementação.<br><br>
        Foi reforçado que a modelagem relacional organiza os dados em tabelas (relações), definindo atributos, chaves primárias (PK) e chaves estrangeiras (FK), garantindo integridade e evitando inconsistências. Também revisamos os tipos de relacionamento, como 1:1, 1:N e N:M, sendo este último resolvido por uma tabela associativa.<br><br>
        Estudamos conceitos mais avançados como especialização e generalização, que permitem organizar entidades de forma mais inteligente, separando ou agrupando dados conforme o contexto do sistema.<br><br>
        Outro ponto importante foram as Formas Normais (1FN, 2FN e 3FN), utilizadas para eliminar redundâncias e problemas como dependências parciais e transitivas. Foi demonstrado que um banco bem modelado evita repetição de dados e facilita manutenção.<br><br>
        Também vimos o conceito de desnormalização, utilizado em cenários específicos para melhorar performance, mesmo que introduza redundância controlada.<br><br>
        Por fim, foi feita a revisão completa do CRUD da prova, reforçando boas práticas como uso correto de JOIN, uso obrigatório de WHERE em UPDATE e DELETE, e a importância das chaves estrangeiras para manter a consistência dos dados.<br><br>
        A aula consolidou a base teórica e prática de banco de dados, mostrando como modelar corretamente antes de implementar.<br/><br/>
        *O que acontece sem WHERE no UPDATE? Todos os registros da tabela são alterados. Ex: UPDATE participantes SET nome = 'X' muda o nome de TODOS os participantes — perda irreversível.<br><br>
        *Por que usar chave estrangeira? Garante integridade referencial: impede inserir uma inscrição para um participante ou evento inexistente. O banco rejeita dados inconsistentes.<br><br>
        *Para que serve o JOIN? Combina dados de duas ou mais tabelas em uma consulta, usando o relacionamento PK « FK. Sem JOIN precisaríamos de múltiplas consultas.<br/><br/>
        2-) No exercício prático, desenvolvemos a modelagem de um sistema de escola de natação, aplicando os conceitos de banco de dados relacional.<br/><br/>
        Foram criadas as principais entidades:<br/>
        - Professores: responsáveis pelas aulas, com informações como nome, especialidade e data de contratação.<br/>
        - Níveis: representam o nível do aluno (iniciante, intermediário, avançado), incluindo o valor da mensalidade.<br/>
        - Alunos: armazenam dados pessoais e informações de matrícula.<br/>
        - Turmas: representam as aulas, associando professor, nível, horário e dias da semana.<br/>
        - Matrículas: tabela associativa que relaciona alunos e turmas.<br><br>
        O modelo utiliza relacionamentos importantes:<br/>
        - 1:N entre Professores e Turmas (um professor pode ter várias turmas)<br/>
        - 1:N entre Níveis e Turmas<br/>
        - N:M entre Alunos e Turmas, resolvido pela tabela Matrículas<br/><br/>
        Também foram aplicadas chaves primárias (AUTO_INCREMENT) e chaves estrangeiras para garantir a integridade referencial, impedindo registros inválidos.<br><br>
        Além disso, o sistema inclui controle de status do aluno (ativo, inativo, trancado), mostrando uma aplicação mais próxima de um sistema real.<br><br>
        Esse MER demonstra uma estrutura bem organizada, normalizada e preparada para operações de CRUD e consultas com JOIN, sendo um exemplo completo de modelagem de banco de dados aplicada.<br><br>
        `,
        imagens: [
            "../../images/imgBd/0405img1.png"
        ]
    },
    {
        data: "2026-05-11",
        titulo: "Projeto QUIZ | Levantamento de requisitos",
        conteudo: ` Na aula de hoje iniciamos o desenvolvimento do projeto QUIZ do curso de Desenvolvimento de Sistemas, com foco principal na análise e planejamento da estrutura do banco de dados antes da implementação do sistema.<br/><br/>
        A professora apresentou os requisitos iniciais do projeto, explicando que o sistema deverá armazenar informações dos alunos, respostas, pontuação, desempenho e ranking, além de organizar as questões por disciplina e conteúdos do curso. Também foi reforçada a importância de planejar corretamente a modelagem relacional para evitar problemas futuros de integridade, redundância e escalabilidade do sistema.<br/><br/>
        Durante a atividade, começamos identificando as entidades principais do projeto, como:<br/>
        - curso<br/>
        - usuario<br/>
        - disciplina<br/>
        - questao<br/>
        - alternativa<br/>
        - tentativa<br/>
        - resposta<br/><br/>
        Foi discutido que essas entidades precisam existir separadamente porque possuem informações próprias e funções específicas dentro do sistema. Também iniciamos o estudo dos relacionamentos entre elas, analisando cardinalidades como:<br/>
        - Um aluno pode realizar várias tentativas (1:N)<br/>
        - Uma questão pode possuir várias alternativas (1:N)<br/>
        - Uma tentativa pode possuir várias respostas do aluno (1:N)<br/><br/>
        Além disso, discutimos como armazenar o desempenho dos alunos, organizar questões por disciplina e estruturar o ranking do sistema. Foram levantadas reflexões importantes sobre:<br/>
        - Controle de tentativas para evitar manipulação do ranking<br/>
        - Ranking geral ou por turma<br/>
        - Controle de tempo de resposta<br/>
        - Níveis de dificuldade das questões<br/>
        - Possibilidade de cadastro de professores<br/><br/>
        A aula teve foco em modelagem de banco de dados, análise de requisitos e estruturação lógica do sistema, reforçando a importância de pensar primeiro na arquitetura e organização das informações antes de iniciar o desenvolvimento da aplicação.
        `,
    },
    {
        data: "2026-05-18",
        titulo: "Projeto QUIZ | Criação de tabelas",
        conteudo: ` Na aula de hoje avançamos na implementação do banco de dados do Projeto Quiz Educacional, transformando a modelagem conceitual em tabelas reais no MySQL.<br/><br/>

        Criamos as tabelas principais do sistema:<br/>
        - curso<br/>
        - usuario<br/>
        - disciplina<br/>
        - questao<br/>
        - alternativa<br/>
        - tentativa<br/>
        - resposta<br/><br/>

        Durante a implementação trabalhamos com:<br/>
        - PRIMARY KEY<br/>
        - FOREIGN KEY<br/>
        - AUTO_INCREMENT<br/>
        - CONSTRAINT<br/>
        - integridade referencial<br/>
        - normalização de dados<br/><br/>

        Também analisamos o MER (Modelo Entidade-Relacionamento), entendendo os relacionamentos entre usuários, tentativas, questões e respostas. Foi reforçada a importância da separação entre tentativa e resposta para melhorar controle estatístico e organização do sistema.<br/><br/>

        A aula teve foco em modelagem relacional, estrutura escalável, organização do banco e boas práticas de desenvolvimento SQL.<br/><br/>
        <a href="https://github.com/Luanlhp777/bancoQUIZ" target="_blank" class="btn-github">Ver código no GitHub</a>
        `,
    },
    {
        data: "2026-05-25",
        titulo: "Projeto QUIZ | Tabela Resposta e Integridade Referencial",
        conteudo: ` Na aula de hoje demos continuidade ao desenvolvimento do Projeto Quiz Educacional, com foco na criação da tabela resposta, integridade referencial, inserção de dados de teste e desenvolvimento de consultas SQL.<br/><br/>

        Inicialmente, criamos a tabela resposta, responsável por armazenar as respostas dos alunos durante as tentativas do quiz. A tabela foi estruturada utilizando PRIMARY KEY AUTO_INCREMENT e três FOREIGN KEY, relacionando as tabelas tentativa, questao e alternativa. Também utilizamos um campo BOOLEAN para identificar se a resposta está correta ou incorreta.<br/><br/>

        Durante a implementação, foi reforçada a importância da integridade referencial no banco de dados, garantindo que não existam respostas sem tentativas, questões ou alternativas válidas.<br/><br/>

        Em seguida, realizamos vários INSERT INTO para popular o banco de dados com informações de teste, cadastrando cursos, disciplinas, questões e alternativas, respeitando toda a hierarquia dos relacionamentos criados anteriormente.<br/><br/>

        Também desenvolvemos consultas SQL utilizando INNER JOIN para relacionar tabelas e exibir informações organizadas. Uma das consultas gerava o ranking dos alunos através da maior pontuação obtida, utilizando GROUP BY, MAX() e ORDER BY. Outra consulta listava questões juntamente com suas respectivas disciplinas.<br/><br/>

        A aula também abordou conceitos importantes como:<br/>
        - normalização;<br/>
        - organização de entidades;<br/>
        - integridade referencial;<br/>
        - redução de redundância;<br/>
        - escalabilidade do banco;<br/>
        - boas práticas em SQL.<br/><br/>

        Por fim, discutimos futuras melhorias do projeto, como autenticação JWT, API REST, dashboard administrativo, gamificação, ranking em tempo real e integração com Inteligência Artificial.<br/><br/>
        <a href="https://github.com/Luanlhp777/bancoQUIZ" target="_blank" class="btn-github">Ver código no GitHub</a>
        `,
    },
    {
        data: "2026-06-01",
        titulo: "Procedure | Trigger | View | Índice",
        conteudo: ` Na aula de hoje demos continuidade ao desenvolvimento do projeto Quiz Educacional, estudando recursos avançados do MySQL voltados para automação, desempenho e organização das regras de negócio do banco de dados. O conteúdo abordado corresponde às páginas 25 a 39 da apresentação do projeto.<br/><br/>

        Inicialmente foi realizada uma introdução aos conceitos de Procedure, Trigger, View e Índice, entendendo como cada recurso pode contribuir para a construção de um banco de dados mais eficiente e inteligente.<br/><br/>

        Foi apresentado o conceito de Stored Procedure, que consiste em um conjunto de comandos SQL armazenados dentro do próprio banco de dados para executar tarefas repetitivas de forma centralizada. Utilizando o contexto do Quiz Educacional, discutimos como uma Procedure pode automatizar processos como validação de respostas, atualização de pontuações e geração de rankings, reduzindo a quantidade de código necessária na aplicação.<br/><br/>

        Também estudamos o funcionamento das Triggers, mecanismos executados automaticamente pelo banco de dados em resposta a eventos como INSERT, UPDATE e DELETE. Foi demonstrado como uma Trigger pode ser utilizada para atualizar pontuações, registrar estatísticas ou validar informações sem necessidade de intervenção da aplicação principal.<br/><br/>

        Outro tema abordado foi o uso de Views, estruturas que funcionam como tabelas virtuais criadas a partir de consultas SQL. As Views permitem simplificar consultas complexas, facilitar relatórios e fornecer informações consolidadas para usuários e administradores sem alterar os dados originais armazenados nas tabelas.<br/><br/>

        Na sequência estudamos os Índices (Indexes), recursos utilizados para otimizar a velocidade das consultas ao banco de dados. Foi discutida a importância dos índices em tabelas que possuem grande volume de registros, melhorando significativamente o desempenho de pesquisas, filtros e ordenações.<br/><br/>

        Durante a aula também foi apresentada a integração completa da aplicação, demonstrando como os componentes do sistema se conectam:<br/><br/>

        Aluno → Interface HTML → Node.js → MySQL<br/><br/>

        Foi analisado o fluxo das informações desde a interação do usuário até o processamento das regras de negócio e armazenamento dos dados no banco. Esse modelo evidencia a separação de responsabilidades entre Front-end, Back-end e Banco de Dados.<br/><br/>

        Conceitos reforçados:<br/>
        - Stored Procedures;<br/>
        - Triggers;<br/>
        - Views;<br/>
        - Índices (Indexes);<br/>
        - Automação de processos no banco;<br/>
        - Integridade e regras de negócio;<br/>
        - Otimização de consultas;<br/>
        - Arquitetura HTML → Node.js → MySQL;<br/>
        - Integração entre aplicação e banco de dados;<br/>
        - Boas práticas de desenvolvimento de sistemas.<br/>
        `,
    },
];