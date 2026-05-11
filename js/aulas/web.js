const aulasWeb = [
    {
        data: "2026-02-20",
        titulo: "HTML",
        conteudo: ` Introdução ao HTML. `
    },
    {
        data: "2026-02-27",
        titulo: "Listas | Links",
        conteudo: ` A aula apresentou a introdução ao HTML, explorando a estrutura básica de páginas e o uso de listas, como lista ordenada (ol), lista não ordenada (ul), lista de descrição (dl) e listas aninhadas. Também foi aplicado o uso de links com a tag a para navegação entre páginas ou sites externos.<br><br>
        Além disso, foi abordado o uso de imagens com caminho relativo, indicando que o atributo href ou src pode apontar tanto para arquivos locais quanto para links externos de um site.. `
    },
    {
        data: "2026-03-06",
        titulo: "GET | POST",
        conteudo: ` Na aula de hoje foi apresentado o uso de formulários em HTML e os métodos GET e POST, utilizados para enviar dados. Também aprendemos sobre rótulos (labels), que identificam os campos do formulário, e o uso de placeholder para mostrar um texto de exemplo dentro dos campos de entrada.<br><br>
        Além disso, foram utilizados botões do tipo submit, responsáveis por enviar as informações preenchidas no formulário para processamento. `
    },
    {
        data: "2026-03-13",
        titulo: "Formulário",
        conteudo: ` Aula de hoje montamos um formulário de curriculo em html. `
    },
    {
        data: "2026-03-20",
        titulo: "CSS",
        conteudo: ` Na aula de hoje tivemos uma introdução ao CSS, linguagem utilizada para estilizar páginas HTML e melhorar a aparência visual dos elementos. Aprendemos a aplicar estilos para formatação de textos, como alteração de cores, tamanhos de fonte, alinhamento e espaçamentos.<br><br>
        Também trabalhamos com a inserção e estilização de imagens, ajustando propriedades como largura (width) e altura (height) para melhor organização no layout. Foram realizados pequenos ajustes em parágrafos, controlando dimensões, margens e espaçamentos para melhorar a leitura e a estrutura da página.<br><br>
        Além disso, utilizamos a propriedade background para aplicar cores ou imagens de fundo nos elementos, tornando o design mais atrativo. Esses conceitos são fundamentais para a construção de interfaces web organizadas, responsivas e visualmente agradáveis.
         `,
    },
    {
        data: "2026-03-27",
        titulo: "CSS - Posicionamento|Transformações|Transições",
        conteudo: ` Na aula de hoje estudamos o posicionamento de elementos no CSS, focando principalmente nas divs. Exploramos diferentes formas de posicionamento, como static, relative, absolute e fixed, entendendo como cada uma influencia na organização dos elementos na página.<br><br>
        Também trabalhamos com transformações (transform), permitindo alterar a forma e posição das divs, como mover, girar, aumentar ou diminuir elementos. Além disso, utilizamos transições (transition) para criar efeitos suaves nas mudanças de estilo, melhorando a experiência visual do usuário.<br><br>
        A aula foi prática, com testes e ajustes nos estilos para entender melhor o comportamento dos elementos e como aplicar esses conceitos no desenvolvimento de interfaces.
         `,
    },
    {
        data: "2026-04-10",
        titulo: "JavaScript | HTML",
        conteudo: ` Na aula de hoje iniciamos a utilização do JavaScript dentro do HTML, utilizando a tag script para inserir código diretamente na página. Trabalhamos com entrada de dados usando o prompt, permitindo que o usuário digite informações, e utilizamos a função Number() para converter os valores para número.<br><br>
        Na prática, desenvolvemos um exemplo que solicita quatro notas do aluno, armazena esses valores em variáveis e realiza o cálculo da média. Também aprendemos a importância dos parênteses na operação matemática para garantir o cálculo correto.<br><br>
        Por fim, utilizamos o alert para exibir o resultado na tela e o método toFixed() para formatar o número com casas decimais. A aula reforçou conceitos de variáveis, entrada e saída de dados, além da integração entre HTML e JavaScript.<br><br>
        `,
        imagens: [
            "../../images/imgWeb/1004img1.png",
            "../../images/imgWeb/1004img2.png"
        ]
    },
    {
        data: "2026-04-17",
        titulo: "JavaScript | HTML",
        conteudo: ` Na aula de hoje desenvolvemos exercícios práticos integrando HTML e JavaScript, com foco na coleta de dados via formulário, processamento das informações e exibição dos resultados na tela, seguindo o padrão de entrada, processamento e saída.<br><br>
        No primeiro exercício, criamos um sistema para uma vídeo locadora, onde o usuário informa o título e a duração do filme. O programa converte a duração de minutos para horas e minutos utilizando Math.floor() e o operador módulo (%), além de exibir as informações na página. Também foi acrescentado o campo de gênero do filme.<br><br>
        No segundo exercício, desenvolvemos um programa para uma revenda de veículos, que lê o modelo e o preço do veículo, calcula o valor da entrada (50%) e o saldo parcelado em 12 vezes. O resultado é exibido na tela utilizando textContent, e foi incluído o campo fabricante do veículo. Foi reforçado o uso de funções, manipulação de elementos HTML e eventos de botão.<br><br>
        No terceiro exercício, criamos um sistema para um restaurante, onde o programa calcula o valor a ser pago com base no preço por quilo e no consumo em gramas, realizando a conversão de unidades. Também foi adicionada a opção de incluir o valor da sobremesa e calcular o total final.<br><br>
        A aula reforçou a integração entre HTML e JavaScript, o uso de funções, manipulação do DOM, conversões matemáticas e a aplicação prática da lógica de programação em situações do dia a dia.<br><br>
        `,
        imagens: [
            "../../images/imgWeb/locadoraHTML.png",
            "../../images/imgWeb/locadoraJS.png",
            "../../images/imgWeb/locadoraWEB.png",
            "../../images/imgWeb/revendaHTML.png",
            "../../images/imgWeb/revendaJS.png",
            "../../images/imgWeb/revendaWEB.png",
            "../../images/imgWeb/restauranteHTML.png",
            "../../images/imgWeb/restauranteJS.png",
            "../../images/imgWeb/restauranteWEB.png"
        ]
    },
    {
        data: "2026-05-08",
        titulo: "JavaScript | HTML | CSS",
        conteudo: ` Na aula de hoje desenvolvemos diversos exercícios práticos integrando HTML, CSS e JavaScript, reforçando conceitos de lógica de programação, manipulação do DOM, validação de dados, estruturas condicionais e laços de repetição.<br><br>
        No primeiro exercício, criamos um programa de tabuada. O sistema captura o número digitado pelo usuário através de um campo HTML, converte o valor para número utilizando Number() e valida se o valor informado é válido. Caso o usuário deixe o campo vazio, digite zero ou um valor não numérico, o sistema exibe uma mensagem de alerta utilizando alert(). Após a validação, foi utilizado um laço for para gerar automaticamente a tabuada. Também trabalhamos com concatenação de texto em uma variável string e exibimos o resultado dentro da tag pre, mantendo a formatação organizada. O botão “Mostrar Tabuada” executa a função através do evento click utilizando addEventListener().<br><br>
        Outro exercício desenvolvido foi o programa “Contas do Mês”. O sistema lê a descrição da conta, o tipo da conta (fixa ou variável) e o valor a pagar. Após validar os dados digitados, o programa incrementa um contador de contas e acumula o valor total das despesas. Em seguida, os dados são concatenados em uma variável de resposta, formando uma lista organizada das contas cadastradas. Utilizamos o método toFixed(2) para formatar os valores monetários com duas casas decimais. O conteúdo foi exibido dinamicamente na página utilizando textContent. Também trabalhamos limpeza automática dos campos após o cadastro e posicionamento do cursor com focus().<br><br>
        Desenvolvemos ainda um sistema de situação do aluno, onde o programa calcula a média de quatro notas e classifica o aluno como aprovado, em exame ou reprovado. Foram utilizados if/else if/else para verificar as condições da média e alterar dinamicamente tanto o texto quanto a cor da mensagem exibida na tela, utilizando style.color.<br><br>
        Outro exercício importante foi o programa de cálculo do peso ideal. O sistema recebe o nome, altura e sexo da pessoa através de campos de formulário e radio buttons. O cálculo foi realizado utilizando Math.pow() para elevar a altura ao quadrado, aplicando fórmulas diferentes conforme o sexo selecionado. Também implementamos validação dos campos e uma função para limpar todos os dados do formulário automaticamente.<br><br>
        Além disso, criamos um sistema de caixa eletrônico, onde o usuário informa um valor de saque e o programa calcula automaticamente a quantidade de notas necessárias utilizando Math.floor() e o operador módulo (%). O sistema validava se o valor informado era compatível com as notas disponíveis (10, 20, 50, 100 e 200 reais) e exibia mensagens de erro quando necessário.<br><br>
        A aula reforçou diversos conceitos importantes:<br>
        - Manipulação do DOM com getElementById()<br>
        - Eventos com addEventListener()<br>
        - Entrada, processamento e saída de dados<br>
        - Estruturas condicionais if/else<br>
        - Laços de repetição for<br>
        - Concatenação de strings<br>
        - Validação de formulários<br>
        - Conversão de dados com Number()<br>
        - Operadores matemáticos e módulo (%)<br>
        - Uso de Math.floor() e Math.pow()<br>
        - Manipulação dinâmica de conteúdo HTML<br>
        - Organização de código em funções reutilizáveis<br><br>
        Foi uma aula bastante prática, focada em desenvolver aplicações interativas utilizando JavaScript integrado ao HTML.<br><br>
        `,
        imagens: [
            "../../images/imgWeb/caixaEletronicoHTML.png",
            "../../images/imgWeb/caixaEletronicoJS.png",
            "../../images/imgWeb/calculoMediaHTML.png",
            "../../images/imgWeb/calculoMediaJS.png",
            "../../images/imgWeb/calculoPesoHTML.png",
            "../../images/imgWeb/calculoPesoJS.png",
            "../../images/imgWeb/contaMesHTML.png",
            "../../images/imgWeb/contaMesJS.png"
        ]
    }
];