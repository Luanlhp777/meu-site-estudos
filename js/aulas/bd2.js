const aulasBd2 = [
    {
        data: "2026-08-03",
        titulo: "Evolução dos bancos relacionais",
        conteudo: ` Na aula de hoje iniciamos a disciplina de Banco de Dados II, estudando a evolução dos bancos relacionais até o cenário de Big Data, NoSQL e sistemas distribuídos.<br><br>

        Inicialmente, analisamos o crescimento da quantidade de dados gerados no mundo. Foi apresentado o conceito de Datasfera Global, que representa todo o volume de dados armazenados e trafegados, incluindo mensagens, vídeos, sensores e informações em nuvem. O material destacou que tecnologias como IoT, 5G, Edge Computing e Inteligência Artificial contribuíram diretamente para esse crescimento. <br><br>

        Também estudamos a mudança de escala dos dados. Em 2010 eram gerados aproximadamente 2 Zettabytes, enquanto a projeção para 2025 chegou a 175 Zettabytes. Esse crescimento deixou de ser linear e passou a ser exponencial principalmente porque máquinas, sensores, câmeras, dispositivos IoT e algoritmos passaram a gerar dados automaticamente. <br><br>

        Outro ponto importante foi a estrutura dos dados. Apenas uma pequena parte é formada por dados estruturados, como tabelas e planilhas. A maior parte é composta por dados semiestruturados e não estruturados, como JSON, logs, imagens, vídeos, áudios e dados provenientes de sensores, aumentando a dificuldade de processamento pelos bancos relacionais tradicionais. <br><br>

        Durante a aula também analisamos tecnologias criadas por grandes empresas para lidar com grandes volumes de dados. Foram apresentados exemplos como Dynamo da Amazon, Cassandra da Meta/Facebook, Apache Kafka do LinkedIn, arquiteturas distribuídas da Netflix, Bigtable e Spanner do Google e Hadoop/HDFS do Yahoo. Essas tecnologias contribuíram para a evolução do ecossistema NoSQL, Big Data e persistência distribuída.<br><br>

        Na segunda parte da aula, estudamos o RDBMS (Relational Database Management System), ou Sistema de Gerenciamento de Banco de Dados Relacional, baseado no modelo relacional proposto por Edgar F. Codd. Também revisamos as propriedades ACID utilizadas para garantir confiabilidade nas transações:<br><br>
        - Atomicidade: a operação acontece completamente ou é cancelada;<br>
        - Consistência: o banco permanece seguindo suas regras;<br>
        - Isolamento: transações simultâneas não interferem umas nas outras;<br>
        - Durabilidade: dados confirmados permanecem armazenados mesmo após falhas.<br><br>

        Por fim, estudamos as principais limitações dos bancos relacionais tradicionais em ambientes de grande escala. Foram destacados três gargalos principais:<br><br>
        - escalabilidade vertical (Scale-Up), que depende de aumentar recursos de um único servidor;<br>
        - rigidez do esquema (Schema-on-Write), que dificulta alterações em grandes estruturas;<br>
        - alto custo computacional de operações JOIN em sistemas distribuídos.<br><br>

        Essas limitações ajudam a explicar o surgimento de arquiteturas NoSQL e sistemas distribuídos, que utilizam escalabilidade horizontal e modelos de dados mais flexíveis.<br><br>

        Conceitos trabalhados:<br>
        - Banco de Dados II;<br>
        - Big Data;<br>
        - Datasfera Global;<br>
        - Zettabytes;<br>
        - IoT;<br>
        - 5G;<br>
        - Edge Computing;<br>
        - dados estruturados e não estruturados;<br>
        - RDBMS;<br>
        - modelo relacional;<br>
        - propriedades ACID;<br>
        - Scale-Up e Scale-Out;<br>
        - Schema-on-Write;<br>
        - JOIN;<br>
        - NoSQL;<br>
        - sistemas distribuídos;<br>
        - persistência poliglota.<br><br>
    
        `
    },
    {
        data: "2026-08-10",
        titulo: "Banco de dados NoSQL e Sistemas distribuídos",
        conteudo: ` Na aula de hoje aprofundamos o estudo dos bancos de dados NoSQL e dos sistemas distribuídos, entendendo por que essas tecnologias surgiram e quais problemas procuram resolver.<br><br>

        Inicialmente, estudamos a evolução do termo NoSQL. No começo, “No SQL” representava uma ruptura com o modelo relacional tradicional. Posteriormente, o conceito passou a ser interpretado como “Not Only SQL”, destacando que bancos relacionais e não relacionais podem coexistir. Essa abordagem é chamada de Persistência Poliglota: utilizar diferentes tecnologias de armazenamento de acordo com as necessidades de cada parte do sistema.<br><br>

        Também estudamos o Teorema CAP, formulado por Eric Brewer. Ele estabelece três propriedades importantes para sistemas distribuídos:<br><br>

        - Consistência (Consistency): os nós apresentam uma visão consistente dos dados;<br>
        - Disponibilidade (Availability): o sistema continua respondendo às requisições;<br>
        - Tolerância a Partição (Partition Tolerance): o sistema continua funcionando mesmo quando existem falhas de comunicação entre os nós.<br><br>

        Em sistemas distribuídos, falhas de rede precisam ser consideradas, fazendo com que a tolerância a partição seja essencial. Dessa forma, durante uma partição, existe um trade-off entre priorizar consistência ou disponibilidade.<br><br>

        Outro conceito abordado foi a comparação entre ACID e BASE.<br><br>

        ACID prioriza integridade e consistência das transações, sendo muito utilizado em sistemas financeiros, ERPs e outros cenários nos quais a integridade dos dados é fundamental.<br><br>

        BASE representa uma abordagem mais flexível encontrada em sistemas NoSQL:<br><br>
        - Basically Available: o sistema procura continuar disponível mesmo diante de falhas parciais;<br>
        - Soft State: o estado dos dados pode mudar durante processos de replicação;<br>
        - Eventual Consistency: diferentes réplicas podem convergir para o mesmo estado posteriormente.<br><br>

        Essa abordagem é adequada para sistemas de grande escala e alta disponibilidade, como redes sociais e grandes catálogos de produtos.<br><br>

        Na segunda parte da aula estudamos as principais famílias de bancos NoSQL:<br><br>

        1. Documentos<br>
        Armazenam informações em documentos flexíveis, normalmente JSON/BSON.<br>
        Exemplo: MongoDB.<br>
        Aplicações: catálogos, perfis de usuários e CMS.<br><br>

        2. Chave-Valor<br>
        Os dados são acessados através de uma chave associada a determinado valor.<br>
        Exemplo: Redis.<br>
        Aplicações: cache, sessões e carrinhos de compras.<br><br>

        3. Colunar Amplo (Wide-Column)<br>
        Organiza grandes volumes de dados utilizando famílias de colunas.<br>
        Exemplos: Cassandra e HBase.<br>
        Aplicações: séries temporais, IoT, logs e processamento de grandes volumes de dados.<br><br>

        4. Grafos<br>
        Representam informações utilizando nós, relacionamentos e propriedades.<br>
        Exemplo: Neo4j.<br>
        Aplicações: redes sociais, sistemas de recomendação e detecção de fraudes.<br><br>

        Também conhecemos ferramentas utilizadas para trabalhar com essas tecnologias, como MongoDB Compass, RedisInsight, DBeaver e Neo4j Desktop, além de soluções gerenciadas em nuvem.<br><br>

        Ao final da aula foi proposta a atividade prática “Raio-X NoSQL — A Ferramenta e o Negócio”. Cada dupla recebeu uma tecnologia NoSQL para investigar seu modelo de dados, funcionamento, diferencial técnico em relação aos bancos relacionais, casos reais de utilização, história e situações em que a ferramenta não seria adequada. <br><br>

        Nossa dupla ficou responsável pelo Apache HBase, um banco NoSQL da categoria Wide-Column integrado ao ecossistema Hadoop para trabalhar com grandes volumes de dados.<br><br>

        Na pesquisa sobre HBase, estudamos sua organização baseada em Table, Row, Row Key, Column Family, Column Qualifier e Value. A Row Key é especialmente importante porque influencia a ordenação e a eficiência de acesso aos dados. O HBase trabalha de forma distribuída sobre o HDFS e utiliza componentes como HMaster, RegionServers e Regions para distribuir armazenamento e processamento.<br><br>

        Como caso real, analisamos a FINRA, organização do mercado financeiro norte-americano que utiliza uma arquitetura envolvendo Apache HBase, Amazon EMR e Amazon S3 para trabalhar em escala de trilhões de registros. O exemplo demonstrou como bancos distribuídos podem ser necessários quando o volume de dados ultrapassa aquilo que seria adequado para uma arquitetura relacional tradicional.<br><br>

        Por fim, concluímos que NoSQL não significa substituir os bancos SQL. A escolha depende do problema. Sistemas com relacionamentos bem definidos, transações e volume controlado podem ser melhor atendidos por MySQL ou PostgreSQL, enquanto cenários de Big Data, alta distribuição e bilhões ou trilhões de registros podem justificar tecnologias como HBase.<br><br>

        Conceitos trabalhados:<br><br>
        - NoSQL;<br>
        - Not Only SQL;<br>
        - Persistência Poliglota;<br>
        - Sistemas Distribuídos;<br>
        - Teorema CAP;<br>
        - Consistência;<br>
        - Disponibilidade;<br>
        - Tolerância a Partição;<br>
        - ACID e BASE;<br>
        - Consistência Eventual;<br>
        - Bancos de Documentos;<br>
        - Bancos Chave-Valor;<br>
        - Wide-Column;<br>
        - Bancos de Grafos;<br>
        - MongoDB;<br>
        - Redis;<br>
        - Cassandra;<br>
        - Neo4j;<br>
        - Apache HBase;<br>
        - Hadoop e HDFS;<br>
        - Escalabilidade horizontal (Scale-Out);<br>
        - Big Data.<br><br>
        
        `
    },
    {
        data: "2026-08-17",
        titulo: "Apresentação HBase",
        conteudo: ` Na aula de hoje realizamos a apresentação do trabalho sobre Apache HBase, dentro da disciplina de Banco de Dados II. O tema abordou o uso de bancos NoSQL do tipo Wide-Column, sua relação com Hadoop, HDFS e cenários de Big Data. <br><br>

        Inicialmente, apresentamos o Apache HBase como um banco de dados NoSQL distribuído, baseado no Google Bigtable e integrado ao ecossistema Hadoop/HDFS.<br><br>

        Foi explicado que o HBase organiza os dados em uma estrutura diferente dos bancos relacionais tradicionais. Sua hierarquia é baseada em:<br><br>

        TABLE<br>
        → ROW<br>
        → ROW KEY<br>
        → COLUMN FAMILY<br>
        → COLUMN QUALIFIER<br>
        → VALUE<br><br>

        Cada linha possui uma Row Key única, responsável por identificar e ordenar os registros. Também vimos que o desenho da Row Key é muito importante, pois influencia diretamente a eficiência das consultas. As Column Families são definidas previamente, enquanto os Column Qualifiers possuem maior flexibilidade durante a execução. <br><br>

        Como exemplo, utilizamos dados de sensores IoT, demonstrando como uma Row Key pode identificar determinado sensor e data, enquanto diferentes Column Families armazenam informações como temperatura, pressão, status e localização.<br><br>

        Na sequência, apresentamos a arquitetura distribuída do HBase. O HMaster é responsável pela coordenação administrativa do cluster, enquanto os RegionServers realizam operações de leitura e escrita e gerenciam as Regions, que representam partes distribuídas das tabelas. O armazenamento dos dados é realizado sobre o HDFS.<br><br>

        Também estudamos o conceito de escalabilidade horizontal, ou Scale-Out. Em vez de aumentar continuamente a capacidade de um único servidor, o HBase permite adicionar novos nós ao cluster para distribuir os dados e a carga de processamento.<br><br>

        Durante a apresentação, fizemos uma comparação entre MySQL/PostgreSQL e HBase. Bancos relacionais trabalham com schemas estruturados, JOINs e transações, enquanto o HBase utiliza o modelo Wide-Column, arquitetura distribuída e escalabilidade horizontal, sendo mais indicado para grandes volumes de leitura e escrita. Também foi destacado que NoSQL não significa ausência de consistência, pois o HBase oferece operações de leitura e escrita fortemente consistentes. <br><br>

        Outro ponto abordado foi a história do Apache HBase. O Google publicou o paper do Bigtable em 2006, servindo de inspiração para o projeto. O desenvolvimento inicial do HBase começou ainda em 2006, depois entrou no ecossistema Apache Hadoop em 2007 e tornou-se um projeto de alto nível da Apache Software Foundation em 2010.<br><br>

        Como exemplo real de utilização, apresentamos a FINRA, organização ligada ao mercado financeiro. O caso demonstrou uma arquitetura com Apache HBase, Amazon EMR e Amazon S3 trabalhando com aproximadamente 3 trilhões de registros, cerca de 4 bilhões de novos registros por dia e aproximadamente 700 TB de dados. O exemplo mostrou a aplicação do HBase em cenários nos quais grande volume, baixa latência e escalabilidade distribuída são requisitos importantes.<br><br>

        Por fim, discutimos que o HBase é uma tecnologia poderosa, mas não é adequado para qualquer tipo de sistema.<br><br>

        O HBase faz sentido principalmente em cenários como:<br><br>
        - Big Data com bilhões ou trilhões de registros;<br>
        - IoT e telemetria;<br>
        - logs, eventos e métricas;<br>
        - dados esparsos;<br>
        - grandes volumes de leitura e escrita;<br>
        - necessidade de escalabilidade horizontal.<br><br>

        Por outro lado, sistemas com muitos relacionamentos, transações e volume controlado, como um sistema acadêmico envolvendo alunos, professores, disciplinas, matrículas e notas, tendem a ser melhor atendidos por bancos relacionais como MySQL ou PostgreSQL. <br><br>

        A apresentação reforçou a ideia de Persistência Poliglota, em que SQL e NoSQL podem ser utilizados de forma complementar. A principal conclusão foi que a escolha do banco de dados deve depender das características e necessidades do problema, e não apenas do poder ou da popularidade da tecnologia.<br><br>

        Conceitos apresentados:<br><br>
        - Apache HBase;<br>
        - NoSQL;<br>
        - Wide-Column;<br>
        - Hadoop;<br>
        - HDFS;<br>
        - Big Data;<br>
        - Google Bigtable;<br>
        - Row Key;<br>
        - Column Family;<br>
        - Column Qualifier;<br>
        - HMaster;<br>
        - RegionServer;<br>
        - Regions;<br>
        - escalabilidade horizontal;<br>
        - Scale-Out;<br>
        - sistemas distribuídos;<br>
        - consistência forte;<br>
        - IoT;<br>
        - FINRA;<br>
        - persistência poliglota;<br>
        - comparação entre SQL e NoSQL.<br><br>
        
        `
    },
    {
        data: "2026-08-24",
        titulo: "Aplicação NoSQL",
        conteudo: ` Na aula de hoje trabalhamos com uma aplicação Full Stack utilizando banco de dados NoSQL, com foco principal no MongoDB e na integração entre Front-end, Back-end e persistência real dos dados.<br><br>

        O projeto desenvolvido foi um sistema de gerenciamento de tarefas utilizando React no Front-end, Node.js + Express no Back-end e MongoDB como banco de dados. A comunicação entre Node.js e MongoDB foi feita com Mongoose. <br><br>

        O principal objetivo da aula foi entender, na prática, como funciona um banco NoSQL orientado a documentos.<br><br>

        Diferente dos projetos anteriores, em que os dados ficavam armazenados apenas em vetores na memória do servidor, agora os documentos são gravados no MongoDB e permanecem disponíveis mesmo depois que o servidor é reiniciado.<br><br>

        O banco utilizado foi:<br><br>

        tarefas_db<br><br>

        com conexão local através de:<br><br>

        mongodb://127.0.0.1:27017/tarefas_db<br><br>

        No MongoDB, os dados são organizados em documentos e coleções, em vez de tabelas e linhas como nos bancos relacionais tradicionais.<br><br>

        Cada tarefa pode armazenar informações como:<br><br>

        - título;<br>
        - responsável;<br>
        - prioridade;<br>
        - tags;<br>
        - status de conclusão;<br>
        - detalhes extras.<br><br>

        No Back-end, foi utilizado o Mongoose para criar um Schema que representa a estrutura principal dos documentos.<br><br>

        Entre os campos utilizados estão:<br><br>

        titulo<br>
        responsavel<br>
        prioridade<br>
        tags<br>
        concluida<br>
        detalhesExtras<br><br>

        O campo tags foi definido como um array de Strings:<br><br>

        tags: [String]<br><br>

        Isso permite que uma única tarefa possua várias tags associadas a ela.<br><br>

        Outro conceito importante estudado foi a flexibilidade dos documentos NoSQL.<br><br>

        O campo detalhesExtras utiliza:<br><br>

        mongoose.Schema.Types.Mixed<br><br>

        permitindo armazenar informações adicionais com estrutura variável.<br><br>

        Por exemplo, um documento pode possuir:<br><br>

        {<br>
        "anotacaoLivre": "Revisar atividade",<br>
        "atualizadoEm": "..."<br>
        }<br><br>

        Isso demonstrou na prática a característica flexível dos bancos orientados a documentos, em que determinadas informações podem variar entre os registros.<br><br>

        Também trabalhamos com CRUD completo.<br><br>

        As operações utilizadas foram:<br><br>

        CREATE → POST<br>
        READ → GET<br>
        UPDATE → PUT<br>
        PATCH → atualização parcial<br>
        DELETE → DELETE<br><br>

        Para cadastrar uma nova tarefa, utilizamos:<br><br>

        POST /api/tarefas<br><br>

        No Back-end, o documento é criado através de:<br><br>

        Tarefa.create(req.body)<br><br>

        Após a criação, a API retorna o status HTTP 201 Created.<br><br>

        Para listar as tarefas, utilizamos:<br><br>

        GET /api/tarefas<br><br>

        Os documentos são recuperados através de:<br><br>

        Tarefa.find()<br><br>

        Também trabalhamos com atualização completa utilizando:<br><br>

        PUT /api/tarefas/:id<br><br>

        Nesse caso, o Mongoose utiliza:<br><br>

        findByIdAndUpdate()<br><br>

        para localizar o documento pelo _id gerado pelo MongoDB e atualizar seus dados.<br><br>

        A opção:<br><br>

        new: true<br><br>

        faz com que a API retorne o documento já atualizado.<br><br>

        Além do PUT, utilizamos PATCH para realizar uma alteração parcial no documento.<br><br>

        A rota:<br><br>

        PATCH /api/tarefas/:id<br><br>

        é utilizada para alterar especificamente o status da tarefa, permitindo marcar como:<br><br>

        - concluída;<br>
        - não concluída.<br><br>

        Para excluir uma tarefa, utilizamos:<br><br>

        DELETE /api/tarefas/:id<br><br>

        e o Mongoose executa:<br><br>

        findByIdAndDelete()<br><br>

        removendo o documento da coleção.<br><br>

        Outro conceito importante foi o identificador _id.<br><br>

        No MongoDB, cada documento recebe automaticamente um identificador único, utilizado para localizar registros durante operações de alteração e exclusão.<br><br>

        Também utilizamos:<br><br>

        timestamps: true<br><br>

        no Schema.<br><br>

        Com isso, o MongoDB registra automaticamente informações como:<br><br>

        createdAt<br>
        updatedAt<br><br>

        permitindo saber quando determinado documento foi criado ou alterado.<br><br>

        No Front-end, utilizamos React com os hooks useState() e useEffect().<br><br>

        O useState() foi utilizado para controlar informações como:<br><br>

        - tarefas;<br>
        - id da tarefa em edição;<br>
        - título;<br>
        - responsável;<br>
        - prioridade;<br>
        - tags;<br>
        - observação;<br>
        - mensagens de status.<br><br>

        Já o useEffect() é utilizado quando a aplicação é carregada para executar a função que busca as tarefas cadastradas no banco.<br><br>

        A estrutura utilizada segue a lógica:<br><br>

        useEffect(() => {<br>
            carregarTarefas();<br>
        }, []);<br><br>

        A comunicação entre React e a API é realizada através da Fetch API.<br><br>

        O endereço utilizado pelo Front-end é:<br><br>

        http://localhost:5000/api/tarefas<br><br>

        O fluxo completo da aplicação ficou:<br><br>

        Usuário<br>
        ↓<br>
        React<br>
        ↓<br>
        fetch()<br>
        ↓<br>
        API REST<br>
        ↓<br>
        Node.js + Express<br>
        ↓<br>
        Mongoose<br>
        ↓<br>
        MongoDB<br>
        ↓<br>
        Coleção de tarefas<br>
        ↓<br>
        Documento<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        React atualiza a interface<br><br>

        A interface permite:<br><br>

        - cadastrar tarefas;<br>
        - listar tarefas;<br>
        - editar;<br>
        - cancelar uma edição;<br>
        - concluir ou reabrir tarefas;<br>
        - excluir;<br>
        - informar prioridade;<br>
        - cadastrar tags;<br>
        - adicionar observações extras;<br>
        - visualizar informações estruturadas em JSON/BSON;<br>
        - exibir mensagens de status.<br><br>

        Também trabalhamos com prioridades, utilizando os valores:<br><br>

        Baixa<br>
        Media<br>
        Alta<br><br>

        sendo Media o valor padrão.<br><br>

        Essa aula representou uma evolução importante em relação aos projetos anteriores, pois passamos de dados temporários armazenados em memória para uma aplicação com persistência real utilizando MongoDB.<br><br>

        Com isso, conseguimos visualizar na prática a integração completa entre as três camadas:<br><br>

        Front-end<br>
        → Back-end<br>
        → Banco de dados<br><br>

        Conceitos trabalhados:<br><br>
        - NoSQL;<br>
        - MongoDB;<br>
        - banco orientado a documentos;<br>
        - documentos;<br>
        - coleções;<br>
        - BSON;<br>
        - JSON;<br>
        - persistência de dados;<br>
        - Node.js;<br>
        - Express;<br>
        - Mongoose;<br>
        - Schema;<br>
        - Model;<br>
        - mongoose.Schema.Types.Mixed;<br>
        - arrays em documentos;<br>
        - _id;<br>
        - timestamps;<br>
        - createdAt;<br>
        - updatedAt;<br>
        - CRUD;<br>
        - POST;<br>
        - GET;<br>
        - PUT;<br>
        - PATCH;<br>
        - DELETE;<br>
        - Tarefa.create();<br>
        - Tarefa.find();<br>
        - findByIdAndUpdate();<br>
        - findByIdAndDelete();<br>
        - API REST;<br>
        - async/await;<br>
        - React;<br>
        - useState();<br>
        - useEffect();<br>
        - Fetch API;<br>
        - integração Front-end e Back-end;<br>
        - campos flexíveis;<br>
        - persistência real dos dados.<br><br>

        <a href="https://github.com/Luanlhp777/aplicacaoNoSQL" target="_blank" class="btn-github">Ver código no GitHub</a>`
    },
]