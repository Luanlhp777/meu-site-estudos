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
]