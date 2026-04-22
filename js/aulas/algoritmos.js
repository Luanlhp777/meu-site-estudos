const aulasAlgoritmos = [
    {
        data: "2026-02-24",
        titulo: "Variáveis | Lógica",
        conteudo: `Em programação, um sistema é um conjunto de partes independentes que, ao se integrarem, formam uma estrutura funcional. A ordem das instruções é fundamental, pois o programa executa comandos passo a passo.
        Variáveis são espaços na memória utilizados para armazenar valores (exemplo: nome = valor). O controle do fluxo pode ser feito com estruturas de decisão, como if/else, que executam ações conforme uma condição. Já as estruturas de repetição, como for e while, automatizam tarefas repetitivas.
        As estruturas de dados, como listas (arrays) e dicionários (objetos), organizam informações dentro do sistema. Funções são blocos lógicos reutilizáveis que agrupam instruções para executar tarefas específicas.
        Foi utilizado o Visual Studio Code (VSCode) como ambiente de desenvolvimento. Criamos o arquivo index.html, que funciona como porta de entrada da aplicação, estruturamos o HTML e inserimos a tag script, onde escrevemos códigos e funções em JavaScript, incluindo o uso do alert.
        Foram abordados tipos de dados como string (texto, representado por aspas simples ou duplas) e number (número). Também criamos arquivos como logica.js e variaveis.js, reforçando que variáveis são responsáveis por armazenar informações no programa.
        `,
        imagens: [
            "../../images/imgAlgoritmos/2402img1.png",
            "../../images/imgAlgoritmos/2402img2.png",
            "../../images/imgAlgoritmos/2402img3.png"
        ]
    },
    {
        data: "2026-02-25",
        titulo: "Dados | Lógica | Operadores | Relacionais",
        conteudo: `Em JavaScript, os dados representam as informações manipuladas pelo programa, sendo os principais tipos: string (texto), number (número), boolean (verdadeiro ou falso), além de arrays e objetos para estruturas mais complexas.
        A lógica é a base do funcionamento do código, pois define a sequência de instruções e as regras que determinam o comportamento do sistema.
        Os operadores permitem realizar cálculos e comparações. Os operadores aritméticos (+, -, *, /, %) são utilizados para operações matemáticas. Já os operadores relacionais (>, <, >=, <=, ==, ===, !=, !==) são usados para comparar valores, retornando sempre um resultado booleano (true ou false).
        Esses operadores são fundamentais para a construção de condições em estruturas como if e while, permitindo a tomada de decisões dentro do programa.
        `,
        imagens: [
            "../../images/imgAlgoritmos/2502img1.png",
            "../../images/imgAlgoritmos/2502img2.png",
            "../../images/imgAlgoritmos/2502img3.png",
            "../../images/imgAlgoritmos/2502img4.png"
        ]
    },
    {
        data: "2026-03-03",
        titulo: "Conversão | Float | Verificar Idade",
        conteudo: `A aula abordou conceitos de JavaScript e o uso de pacotes com Node.js. Foi explicado que o JavaScript é uma linguagem tipada (com tipagem dinâmica) e que é possível utilizar bibliotecas, que são conjuntos de códigos prontos criados para facilitar o desenvolvimento.
        Foi apresentado o NPM (Node Package Manager), que é o gerenciador de pacotes do Node.js. Para instalar dependências, é necessário estar dentro da pasta do projeto. O comando npm init -y cria o arquivo package.json, preparando o projeto para receber pacotes. Em seguida, utilizamos npm i prompt-sync para instalar uma biblioteca. O arquivo package.json registra as dependências do projeto.
        Durante a prática, criamos o arquivo conversao.js para realizar conversão de dados e o arquivo float.js para trabalhar com números decimais. Também revisamos a estrutura condicional if/else, utilizada para executar blocos de comandos conforme uma condição, podendo conter instruções como console.log, laços de repetição, funções, procedimentos e outras estruturas de controle.
        `,
        imagens: [
            "../../images/imgAlgoritmos/0303img1.png",
            "../../images/imgAlgoritmos/0303img2.png",
            "../../images/imgAlgoritmos/0303img3.png"
        ]
    },
    {
        data: "2026-03-04",
        titulo: "Cálculo média | Par ou Ímpar",
        conteudo: `Na aula de hoje, iniciamos o trabalho no VSCode, instalando os pacotes .json e as dependências necessárias para o projeto. 
        Foi abordado o uso de operadores em JavaScript, onde o sinal de **=** é usado para atribuição de valores, enquanto **==** é para comparar a igualdade de valores e **!=** serve para verificar a diferença entre dois valores.
        Criamos o arquivo **parImpar.js**, que verifica se o número digitado é par ou ímpar. Utilizamos a estrutura condicional **if/else** e o operador de módulo **%** para calcular o resto da divisão (ex: numero % 2 == 0).
        Também criamos o arquivo **media.js** para calcular a média de duas notas, definindo as notas e dividindo o resultado por 2.
        `,
        imagens: [
            "../../images/imgAlgoritmos/0403img1.png",
            "../../images/imgAlgoritmos/0403img2.png"
        ]
    },
    {
        data: "2026-03-10",
        titulo: "Conversão Km/metros | Verificar Aluno(Aprovado ou Reprovado)",
        conteudo: `Na aula de hoje a turma foi dividida em grupos para responder questões e debater conceitos fundamentais de lógica de programação. Foram discutidos os conceitos de entrada, processamento e saída, utilizando como exemplo um programa que pergunta o nome e a idade de uma pessoa, armazena esses dados em variáveis, realiza uma concatenação e exibe uma mensagem de boas-vindas.
        Também analisamos situações para identificar quando ocorre entrada (input) e saída (output) em um programa, além de revisar conceitos como variáveis, tipos de dados e conversão de texto para número. Foram discutidos tipos de dados como texto (string), número e booleano (true e false), além de exemplos de números inteiros e decimais.
        Revisamos operadores aritméticos e relacionais, como soma, subtração, multiplicação, divisão, resto da divisão e comparações. Também aplicamos esses conceitos em exercícios de lógica, como verificar se uma pessoa é maior de idade, identificar se um número é par ou ímpar e descobrir qual é o maior entre dois números.
        Durante a prática criamos o arquivo exemplo01.js para realizar uma conversão de quilômetros e o exemplo02.js para verificar se um aluno foi aprovado com base na nota e frequência, utilizando o operador lógico de conjunção (&&). Ao final da aula também foi introduzido o conceito de operadores lógicos, como a conjunção (&&), onde todas as condições precisam ser verdadeiras, e a disjunção ( || ), onde pelo menos uma condição precisa ser verdadeira.
        `,
        imagens: [
            "../../images/imgAlgoritmos/1003img1.png",
            "../../images/imgAlgoritmos/1003img2.png"
        ]
    },
    {
        data: "2026-03-11",
        titulo: "Conversão Kg/toneladas | Cálculo Área | Cálculo Valor Total",
        conteudo: `Na aula de hoje, realizamos três exercícios práticos de lógica de programação.
        **Exercício 1**: Conversão de Quilos para Toneladas. O programa lê o peso em quilogramas e converte para toneladas utilizando a fórmula: **toneladas = quilos / 1000**.
        **Exercício 2**: Cálculo da quantidade de tinta necessária para pintar uma parede. O programa solicita ao usuário a altura e largura da parede, calcula a área e, em seguida, calcula os litros de tinta necessários com a fórmula: **área = altura * largura** e **litros = área / 5** (sabendo que uma lata de tinta cobre 5 m² por litro).
        **Exercício 3**: Identificação da Entrada, Processamento e Saída. Criamos um sistema simples de uma cantina escolar, onde o atendente informa o nome do produto, o preço unitário e a quantidade. O sistema processa esses dados e calcula o valor total da compra (preço * quantidade), exibindo o nome do produto e o valor total a ser pago.
        `,
        imagens: [
            "../../images/imgAlgoritmos/1103img1.png",
            "../../images/imgAlgoritmos/1103img2.png",
            "../../images/imgAlgoritmos/1103img3.png",
            "../../images/imgAlgoritmos/1103img4.png",
            "../../images/imgAlgoritmos/1103img5.png",
            "../../images/imgAlgoritmos/1103img6.png"
        ]
    },
    {
        data: "2026-03-17",
        titulo: "Switch/Case",
        conteudo: `Na aula de hoje estudamos a estrutura de decisão switch/case em JavaScript, utilizada para criar menus de opções e executar diferentes funcionalidades conforme a escolha do usuário.
        Foi proposto um exercício prático para desenvolver um programa no terminal utilizando Node.js e a biblioteca prompt-sync para entrada de dados. O programa apresenta um menu com opções como saudação conforme a hora informada, soma de dois números decimais com exibição do resultado utilizando o método toFixed(2), soma de dois números inteiros com verificação se o resultado é par ou ímpar utilizando o operador %, além da opção de encerrar o programa.
        Durante a atividade, revisamos conceitos importantes como entrada, processamento e saída de dados, uso de variáveis, operadores matemáticos, estrutura condicional if/else e a aplicação prática do switch/case para controle do fluxo do programa.
        `,
        imagens: [
            "../../images/imgAlgoritmos/1703img1.png",
            "../../images/imgAlgoritmos/1703img2.png",
            "../../images/imgAlgoritmos/1703img3.png",
            "../../images/imgAlgoritmos/1703img4.png",
            "../../images/imgAlgoritmos/1703img5.png",
            "../../images/imgAlgoritmos/1703img6.png",
            "../../images/imgAlgoritmos/1703img7.png",
            "../../images/imgAlgoritmos/1703img8.png",
            "../../images/imgAlgoritmos/1703img9.png",
            "../../images/imgAlgoritmos/1703img10.png"
        ]
    },
    {
        data: "2026-03-18",
        titulo: "Switch/Case | Laço de Repetição for",
        conteudo: `Na aula de hoje fizemos uma revisão da aula anterior e iniciamos o estudo sobre laços de repetição. Foi explicado que o laço de repetição serve para executar um bloco de código várias vezes automaticamente, evitando a repetição manual de instruções. Também foi destacado que todo laço de repetição precisa ter uma condição de parada, pois chega um momento em que ele deve finalizar sua execução.
        Foi apresentada a estrutura do laço for em JavaScript, que é composta por três partes principais: inicialização, condição e incremento. Na inicialização definimos a variável de controle (exemplo: i = 1). Na condição determinamos até quando o laço continuará executando (exemplo: i < 10). No incremento atualizamos o valor da variável a cada repetição (exemplo: i + 1 ou i++).
        Enquanto a condição for verdadeira, o bloco de código dentro do for será executado repetidamente. Quando a condição se tornar falsa, o laço é encerrado e o programa continua sua execução normalmente.
        `,
    },
    {
        data: "2026-03-24",
        titulo: "Laço de repetição for",
        conteudo: `Na aula de hoje estudamos o laço de repetição FOR em JavaScript, utilizado para executar um bloco de código várias vezes de forma automática. Foi relembrado que a variável é um espaço na memória usado para armazenar dados e que o laço de repetição permite inserir, processar e extrair informações de maneira organizada.
        Aprendemos também sobre incremento e decremento (++, --), responsáveis por atualizar o valor da variável de controle a cada repetição. Foi destacado que todo laço precisa ter uma condição de parada e um incremento ou decremento, para evitar repetições infinitas.
        Na prática, criamos o arquivo for1.js para gerar a tabuada do número 2, utilizando o laço for com inicialização, condição e incremento. Em seguida, no for2.js, trabalhamos com um array de frutas e utilizamos a propriedade length para percorrer cada item da lista e exibir no console.
        No exercício for3.js, utilizamos a biblioteca prompt-sync para solicitar ao usuário qual tabuada deseja visualizar, convertendo o valor digitado para número e aplicando o laço for para mostrar os resultados de 1 a 10.
        Também foi explicado o conceito de MOCK, que é quando definimos valores diretamente no código para testes, sem depender da entrada do usuário.
        `,
        imagens: [
            "../../images/imgAlgoritmos/2403img1.png",
            "../../images/imgAlgoritmos/2403img2.png",
            "../../images/imgAlgoritmos/2403img3.png",
            "../../images/imgAlgoritmos/2403img4.png",
            "../../images/imgAlgoritmos/2403img5.png",
            "../../images/imgAlgoritmos/2403img6.png"
        ]
    },
    {
        data: "2026-03-25",
        titulo: "Laço de repetição for (exercícios)",
        conteudo: `Na aula de hoje realizamos exercícios práticos utilizando o laço de repetição for, com o objetivo de reforçar a lógica de repetição e controle de fluxo.
        No primeiro exercício, desenvolvemos um programa para contar de 1 até 100. No segundo, fizemos uma contagem de 2 em 2, iniciando em 0 até 20. Já no terceiro exercício, criamos uma contagem regressiva de 10 até 0, trabalhando a lógica decrescente.
        No quarto exercício, aplicamos o for na construção de uma tabuada, onde o usuário informa um número. Foi adicionada uma condição: se o número for par, a tabuada é exibida de forma decrescente, e se for ímpar, de forma crescente, utilizando estruturas condicionais junto com o laço.
        Por fim, no quinto exercício, organizamos todas essas funcionalidades dentro de uma estrutura switch case, criando um menu de opções para o usuário escolher qual exercício executar, integrando conceitos de repetição, decisão e entrada de dados.
        `,
        imagens: [
            "../../images/imgAlgoritmos/2503img1.png",
            "../../images/imgAlgoritmos/2503img2.png",
            "../../images/imgAlgoritmos/2503img3.png",
            "../../images/imgAlgoritmos/2503img4.png",
            "../../images/imgAlgoritmos/2503img5.png",
            "../../images/imgAlgoritmos/2503img6.png",
            "../../images/imgAlgoritmos/2503img7.png",
            "../../images/imgAlgoritmos/2503img8.png",
            "../../images/imgAlgoritmos/2503img9.png",
            "../../images/imgAlgoritmos/2503img10.png"
        ]
    },
    {
        data: "2026-03-31",
        titulo: "Laço de repetição while/dowhile",
        conteudo: `Na aula de hoje fizemos uma revisão geral dos principais conceitos vistos até o momento, como sistema, condições, operadores, estruturas condicionais (if/else), operadores lógicos como conjunção (&&) e disjunção (||), além do laço de repetição for.
        Foi apresentado também um novo pacote para entrada de dados no Node.js, o readline-sync, utilizado para interagir com o usuário pelo terminal.
        Em seguida, estudamos novos laços de repetição, com foco no while, que executa um bloco de código enquanto uma condição for verdadeira, sempre testando a condição antes da execução. Diferente dele, o do...while executa o código pelo menos uma vez, pois a verificação ocorre ao final.
        Na prática, realizamos três exercícios com while:
        - No primeiro, criamos uma contagem iniciando em 5 até 9, demonstrando o uso de incremento.
        - No segundo, fizemos uma soma acumulativa até ultrapassar o valor 10, trabalhando lógica de repetição e atualização de variáveis.
        - No terceiro, desenvolvemos um sistema de verificação de senha, limitando tentativas com uso de condição e operador lógico (&&).
        Também utilizamos o do...while em um exemplo com números aleatórios, simulando o lançamento de um dado até obter o número 6.
        A aula reforçou o controle de fluxo com laços de repetição e a importância de definir corretamente as condições para evitar loops infinitos.
        `,
        imagens: [
            "../../images/imgAlgoritmos/3103img1.png",
            "../../images/imgAlgoritmos/3103img2.png",
            "../../images/imgAlgoritmos/3103img3.png",
            "../../images/imgAlgoritmos/3103img4.png",
            "../../images/imgAlgoritmos/3103img5.png",
            "../../images/imgAlgoritmos/3103img6.png",
            "../../images/imgAlgoritmos/3103img7.png",
            "../../images/imgAlgoritmos/3103img8.png",
        ]
    },
    {
        data: "2026-04-01",
        titulo: "Laço de repetição while/dowhile",
        conteudo: `Na aula de hoje demos continuidade ao estudo de laços de repetição e funções matemáticas em JavaScript. Trabalhamos com a criação de um jogo de dado utilizando o método Math.random() para gerar números aleatórios, Math.floor() para remover as casas decimais e o +1 para ajustar o intervalo, fazendo com que os números comecem a partir de 1.
        Revisamos também os principais laços de repetição:
        - for: utilizado quando sabemos a quantidade de repetições.
        - while: utilizado quando não sabemos quantas vezes o laço será executado, com a condição sendo testada antes da execução.
        - do...while: executa o bloco de código pelo menos uma vez, pois a verificação ocorre ao final.
        Durante a prática, criamos diferentes arquivos para testar esses conceitos. No dowhile.js, observamos que o bloco é executado mesmo quando a condição é falsa. No random.js, geramos números aleatórios. No while.js, fizemos uma contagem simples utilizando o laço while.
        Por fim, desenvolvemos um menu interativo no dowhile2.js utilizando readline-sync, combinando do...while com switch/case. O programa permite ao usuário escolher opções como exibir uma saudação, mostrar a data atual ou jogar um dado, demonstrando na prática o uso de condições, laços de repetição e interação com o usuário.
        A aula reforçou o controle de fluxo, a diferença entre os tipos de laços e a aplicação prática de funções matemáticas para criar programas dinâmicos.
        `,
        imagens: [
            "../../images/imgAlgoritmos/0104img1.png",
            "../../images/imgAlgoritmos/0104img2.png",
            "../../images/imgAlgoritmos/0104img3.png",
            "../../images/imgAlgoritmos/0104img4.png",
            "../../images/imgAlgoritmos/0104img5.png",
            "../../images/imgAlgoritmos/0104img6.png",
            "../../images/imgAlgoritmos/0104img7.png",
            "../../images/imgAlgoritmos/0104img8.png",
        ]
    },
    {
        data: "2026-04-07",
        titulo: "Exercícios de Analise de Requisitos",
        conteudo: `Na aula de hoje trabalhamos o conceito de Análise de Requisitos em Algoritmos, que consiste em entender completamente um problema antes de começar a programar. Foi reforçada a importância de identificar corretamente três etapas fundamentais: entrada (dados recebidos), processamento (o que será feito com os dados) e saída (resultado final).
        Durante a aula, realizamos exercícios práticos aplicando esse conceito. No primeiro exercício, fizemos a soma de números informados pelo usuário. No segundo, identificamos quantos números são pares utilizando operadores e condições. No terceiro, utilizamos o laço while para somar valores até o usuário digitar zero, trabalhando com repetição indefinida.
        Também desenvolvemos um sistema de notas, calculando a média de um aluno e classificando o resultado com if/else em aprovado, recuperação ou reprovado. Por fim, criamos um menu interativo utilizando do...while, permitindo ao usuário escolher operações como soma e subtração, reforçando o uso de estruturas de decisão e repetição.
        A aula integrou conceitos importantes como variáveis, operadores, estruturas condicionais e laços de repetição (for, while e do...while), destacando que a análise correta do problema é essencial para construir algoritmos eficientes e sem erros.
        `,
        imagens: [
            "../../images/imgAlgoritmos/0704img1.png",
            "../../images/imgAlgoritmos/0704img2.png",
            "../../images/imgAlgoritmos/0704img3.png",
            "../../images/imgAlgoritmos/0704img4.png",
            "../../images/imgAlgoritmos/0704img5.png",
            "../../images/imgAlgoritmos/0704img6.png",
            "../../images/imgAlgoritmos/0704img7.png",
            "../../images/imgAlgoritmos/0704img8.png",
            "../../images/imgAlgoritmos/0704img9.png",
            "../../images/imgAlgoritmos/0704img10.png"
        ]
    },
    {
        data: "2026-04-08",
        titulo: "Correção dos Exercícios de Analise de Requisitos",
        conteudo: `Na aula de hoje realizamos a correção dos exercícios de Análise de Requisitos, reforçando o entendimento de cada problema antes da implementação. Foram revisados os conceitos de entrada, processamento e saída, garantindo que a lógica estivesse correta em cada etapa.
        Durante a correção, o professor destacou boas práticas na construção dos algoritmos, como o uso adequado de variáveis, operadores, estruturas condicionais (if/else) e laços de repetição (for, while e do...while). Também foram corrigidos possíveis erros de lógica, como condições mal definidas, loops incorretos e problemas na soma ou contagem de valores.
        A aula teve foco no aperfeiçoamento da lógica de programação, mostrando a importância de analisar o problema com atenção para evitar erros e desenvolver soluções mais eficientes.
        `,
    },
    {
        data: "2026-04-14",
        titulo: "GitHub",
        conteudo: `Na aula de hoje iniciamos o uso do Git e GitHub, aprendendo a criar uma conta e entender o funcionamento de repositórios. Foi explicado que existem dois tipos de repositórios: o local (na máquina) e o remoto (no GitHub), que trabalham juntos no controle de versões do projeto.
        Aprendemos a criar um repositório de teste e utilizar os principais comandos do Git, como git init para iniciar o projeto, git status para verificar alterações, git add . para adicionar arquivos, git commit para salvar mudanças e git push para enviar o projeto ao GitHub. Também vimos o conceito de branch, que é uma ramificação do projeto principal.
        Foi apresentado o arquivo package.json, que armazena as dependências do projeto, e o .gitignore, utilizado para ignorar arquivos ou pastas desnecessárias, como node_modules, evitando subir conteúdos desnecessários para o repositório.
        Além disso, iniciamos o uso do Node.js com o comando npm i express para criar um servidor, e utilizamos o Git Bash para executar comandos do Git.
        Por fim, começamos a estudar funções em JavaScript, entendendo como criar uma função simples para somar dois valores e retornar o resultado, reforçando o conceito de reutilização de código.
        `,
    },
    {
        data: "2026-04-15",
        titulo: "Função",
        conteudo: `Na aula de hoje revisamos exercícios anteriores que utilizavam o laço de repetição for e evoluímos o código aplicando o conceito de funções, com o objetivo de organizar melhor a lógica e tornar o programa mais estruturado e reutilizável.
        Cada exercício foi separado em funções específicas, como contar até 100, contar de 2 em 2, contagem regressiva e tabuada, permitindo que cada parte do programa tenha uma responsabilidade definida. Também criamos uma função para exibir o menu de opções, melhorando a organização e a leitura do código.
        Além disso, utilizamos uma função principal (principal) para controlar o fluxo do programa, combinando um laço do...while com a estrutura switch/case. Isso possibilitou criar um menu interativo, onde o usuário escolhe qual funcionalidade deseja executar.
        A aula reforçou conceitos importantes como modularização do código, reutilização de funções, controle de fluxo com laços de repetição e estruturas condicionais, além da interação com o usuário via terminal utilizando prompt-sync.
        `,
        imagens: [
            "../../images/imgAlgoritmos/1504img1.png",
            "../../images/imgAlgoritmos/1504img2.png",
            "../../images/imgAlgoritmos/1504img3.png",
            "../../images/imgAlgoritmos/1504img4.png",
            "../../images/imgAlgoritmos/1504img5.png",
            "../../images/imgAlgoritmos/1504img6.png",
            "../../images/imgAlgoritmos/1504img7.png",
            "../../images/imgAlgoritmos/1504img8.png",
            "../../images/imgAlgoritmos/1504img9.png",
            "../../images/imgAlgoritmos/1504img10.png",
            "../../images/imgAlgoritmos/1504img11.png",
            "../../images/imgAlgoritmos/1504img12.png"
        ]
    },
];