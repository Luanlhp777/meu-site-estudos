const aulasMobile = [
    {
        data: "2026-07-28",
        titulo: "Flutter",
        conteudo: ` Na aula de hoje iniciamos o desenvolvimento mobile com Flutter e Dart, criando o primeiro aplicativo da disciplina. O objetivo foi compreender a estrutura básica de um projeto Flutter e como os widgets são organizados para montar a interface da aplicação.<br><br>

        Inicialmente, importamos o pacote material.dart, que disponibiliza os componentes visuais do Material Design. Em seguida, criamos a função main(), responsável por iniciar o programa, e utilizamos runApp() para executar o widget principal da aplicação.<br><br>

        Também criamos a classe MainApp estendendo StatelessWidget. Esse tipo de widget representa uma interface sem estado mutável, ou seja, sua aparência não muda durante a execução sem que o widget seja reconstruído.<br><br>

        Dentro do método build(), utilizamos o MaterialApp como estrutura principal do aplicativo. A propriedade debugShowCheckedModeBanner foi configurada como false para remover a faixa de depuração exibida no canto da tela.<br><br>

        Na sequência, utilizamos o widget Scaffold, responsável por fornecer a estrutura visual básica da página. Dentro dele, adicionamos uma AppBar com fundo roxo, título personalizado e texto na cor branca.<br><br>

        No corpo da aplicação, utilizamos o widget Center para centralizar o conteúdo na tela. Dentro dele, inserimos um widget Text exibindo a mensagem “Hello World!”. O texto recebeu personalizações por meio de TextStyle, como:<br>
        - tamanho da fonte;<br>
        - cor personalizada com Color.fromARGB();<br>
        - família da fonte;<br>
        - texto em negrito.<br><br>

        A aula reforçou que, no Flutter, praticamente todos os elementos da interface são widgets e podem ser combinados em uma árvore hierárquica. Também observamos a importância da indentação e da organização dos parênteses para representar corretamente a estrutura dos componentes.<br><br>

        Além da criação do aplicativo, o projeto completo foi organizado e enviado ao GitHub, incluindo os arquivos e pastas gerados pelo Flutter, permitindo que o projeto possa ser clonado e executado corretamente em outros ambientes.<br><br>

        Conceitos trabalhados:<br>
        - Flutter e Dart;<br>
        - função main();<br>
        - runApp();<br>
        - StatelessWidget;<br>
        - método build();<br>
        - MaterialApp;<br>
        - Scaffold;<br>
        - AppBar;<br>
        - Center;<br>
        - Text e TextStyle;<br>
        - propriedades de cor, fonte e alinhamento;<br>
        - organização em árvore de widgets;<br>
        - estrutura completa de um projeto Flutter;<br>
        - versionamento do projeto no GitHub.<br><br>
        <a href="https://github.com/Luanlhp777/mobile01" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-08-03",
        titulo: "Organização de Widgets com Flutter",
        conteudo: `Na aula de hoje demos continuidade ao desenvolvimento mobile com Flutter e Dart, trabalhando com novos widgets para organizar melhor os elementos na tela.<br><br>

        O projeto continua utilizando a estrutura básica do Flutter com a função main(), responsável por iniciar a aplicação através de runApp(), e a classe MainApp estendendo StatelessWidget. <br><br>

        Dentro do MaterialApp, mantivemos debugShowCheckedModeBanner como false para remover a faixa de depuração e utilizamos Scaffold como estrutura principal da tela.<br><br>

        Na AppBar, alteramos a aparência utilizando backgroundColor: Colors.black e adicionamos o título “Adicionando novos widgets”, configurando tamanho da fonte e cor através do TextStyle.<br><br>

        O principal conteúdo da aula foi o uso dos widgets Column, Row e SizedBox.<br><br>

        O widget Column foi utilizado para organizar vários elementos verticalmente, ou seja, um abaixo do outro. Dentro da propriedade children foram adicionados diferentes widgets Text.<br><br>

        Também utilizamos:<br><br>

        mainAxisAlignment: MainAxisAlignment.center<br><br>

        Essa propriedade permitiu centralizar os elementos da Column no eixo principal, que nesse caso é o eixo vertical.<br><br>

        Foram adicionados textos como:<br><br>
        - “Boa noite”;<br>
        - “Aula Mobile”;<br>
        - “Etec Albert Einstein”.<br><br>

        Cada texto recebeu sua própria estilização utilizando TextStyle, permitindo alterar propriedades como fontSize e color.<br><br>

        Também trabalhamos com o widget SizedBox, utilizado para criar espaçamento entre elementos. No primeiro caso utilizamos:<br><br>

        SizedBox(height: 30)<br><br>

        para criar um espaço vertical entre os textos.<br><br>

        Na sequência, utilizamos o widget Row, responsável por organizar elementos horizontalmente, ou seja, lado a lado.<br><br>

        Dentro da Row foram inseridos dois widgets Text:<br><br>
        - “Aula Mobile”;<br>
        - “Etec Albert Einstein”.<br><br>

        Também utilizamos:<br><br>

        mainAxisAlignment: MainAxisAlignment.center<br><br>

        para centralizar os elementos horizontalmente.<br><br>

        Entre os dois textos da Row foi utilizado:<br><br>

        SizedBox(width: 20)<br><br>

        criando um espaço horizontal entre os elementos.<br><br>

        Com essa prática, foi possível compreender melhor a diferença entre Column e Row:<br><br>

        - Column organiza widgets verticalmente;<br>
        - Row organiza widgets horizontalmente;<br>
        - SizedBox cria espaçamento entre widgets;<br>
        - Center centraliza seu widget filho;<br>
        - mainAxisAlignment controla o alinhamento no eixo principal.<br><br>

        A aula reforçou que a interface Flutter é construída através da composição e do aninhamento de widgets. Um widget pode conter outros widgets, formando uma árvore responsável pela organização visual da aplicação.<br><br>

        Conceitos trabalhados:<br><br>
        - Flutter;<br>
        - Dart;<br>
        - StatelessWidget;<br>
        - MaterialApp;<br>
        - Scaffold;<br>
        - AppBar;<br>
        - Center;<br>
        - Column;<br>
        - Row;<br>
        - children;<br>
        - mainAxisAlignment;<br>
        - MainAxisAlignment.center;<br>
        - SizedBox;<br>
        - height e width;<br>
        - Text;<br>
        - TextStyle;<br>
        - fontSize;<br>
        - color;<br>
        - organização vertical e horizontal de widgets;<br>
        - composição e árvore de widgets.<br><br>
        <a href="https://github.com/Luanlhp777/mobile02" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },
    {
        data: "2026-08-04",
        titulo: "Estilização e Organização de Widgets",
        conteudo: `Na aula de hoje demos continuidade aos estudos de desenvolvimento mobile utilizando Flutter e Dart, reforçando principalmente a organização de widgets na tela e a personalização visual da interface.<br><br>

        O projeto mantém a estrutura básica de uma aplicação Flutter, utilizando a função main() para iniciar o aplicativo com runApp() e uma classe MainApp que estende StatelessWidget. Dentro do método build(), utilizamos MaterialApp como estrutura principal da aplicação. <br><br>

        Também utilizamos Scaffold para organizar a tela e configuramos uma cor de fundo personalizada através de backgroundColor com Color.fromARGB(). Na parte superior, criamos uma AppBar com fundo preto e o título “Adicionando novos widgets”.<br><br>

        No corpo da aplicação, utilizamos Center para centralizar todo o conteúdo e uma Column para organizar os widgets verticalmente.<br><br>

        Dentro da Column foram adicionados vários textos:<br><br>
        - “Olá, Pessoal!”;<br>
        - “Estudando Flutter”;<br>
        - “Bora Codar”;<br>
        - “2026 - Vamos nessa!”.<br><br>

        Cada Text recebeu uma estilização própria através de TextStyle, utilizando diferentes tamanhos de fonte e cores personalizadas.<br><br>

        Também reforçamos o uso do widget SizedBox para controlar o espaçamento vertical entre os elementos. Foram utilizados diferentes valores de height, permitindo ajustar visualmente a distância entre os textos.<br><br>

        Na sequência, utilizamos uma Row para organizar informações horizontalmente. Dentro dela foram adicionados os textos:<br><br>
        - “Jogos”;<br>
        - “Música”;<br>
        - “Série”.<br><br>

        A Row utilizou MainAxisAlignment.center para centralizar seus elementos e widgets SizedBox com width para criar espaçamento horizontal entre os textos.<br><br>

        Além do tamanho e da cor das fontes, também utilizamos fontWeight em um dos textos, permitindo controlar a espessura da fonte.<br><br>

        Com essa atividade, reforçamos a diferença entre os principais widgets de organização:<br><br>

        - Column: organiza os elementos verticalmente;<br>
        - Row: organiza os elementos horizontalmente;<br>
        - Center: centraliza um widget;<br>
        - SizedBox: cria espaços entre os elementos;<br>
        - Text: exibe informações na tela;<br>
        - TextStyle: permite personalizar texto;<br>
        - Scaffold: fornece a estrutura principal da tela;<br>
        - AppBar: cria a barra superior da aplicação.<br><br>

        A aula mostrou novamente que o Flutter trabalha com composição de widgets, onde componentes podem ser aninhados dentro de outros componentes para construir interfaces mais completas.<br><br>

        Conceitos trabalhados:<br><br>
        - Flutter;<br>
        - Dart;<br>
        - StatelessWidget;<br>
        - MaterialApp;<br>
        - Scaffold;<br>
        - AppBar;<br>
        - backgroundColor;<br>
        - Color.fromARGB();<br>
        - Center;<br>
        - Column;<br>
        - Row;<br>
        - children;<br>
        - MainAxisAlignment.center;<br>
        - SizedBox;<br>
        - height e width;<br>
        - Text;<br>
        - TextStyle;<br>
        - fontSize;<br>
        - fontWeight;<br>
        - cores personalizadas;<br>
        - organização vertical e horizontal;<br>
        - composição e árvore de widgets.<br><br>

        <a href="https://github.com/Luanlhp777/mobile03" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },
    {
        data: "2026-08-10",
        titulo: "Atividade Avaliativa com Flutter",
        conteudo: `Na aula de hoje realizamos uma atividade avaliativa em Flutter e Dart, aplicando na prática os conceitos de organização de layout, estilização de textos e composição de widgets estudados nas aulas anteriores.<br><br>

        O projeto foi estruturado como uma aplicação Flutter completa dentro da pasta atividade01. No arquivo main.dart, utilizamos a função main() para iniciar o aplicativo com runApp() e criamos a classe MainApp estendendo StatelessWidget. <br><br>

        Dentro do MaterialApp, mantivemos debugShowCheckedModeBanner como false e utilizamos Scaffold para organizar a estrutura principal da tela.<br><br>

        Também personalizamos o fundo da aplicação utilizando backgroundColor com Color.fromARGB(), reforçando o uso de cores personalizadas no Flutter.<br><br>

        Na parte superior da tela, criamos uma AppBar com fundo preto e o título “Adicionando novos widgets”, utilizando TextStyle para definir o tamanho e a cor da fonte.<br><br>

        No corpo da aplicação, utilizamos Center e Column para centralizar e organizar verticalmente os elementos da interface.<br><br>

        Foram adicionados os textos:<br><br>
        - “ETEC ALBERT EINSTEIN”;<br>
        - “Desenvolvimento de Sistemas”;<br>
        - “Desenvolvimento Mobile I”;<br>
        - uma frase sobre imaginação e conhecimento.<br><br>

        Cada texto recebeu uma estilização própria, utilizando diferentes valores de fontSize e Color.fromARGB().<br><br>

        Também utilizamos diversos widgets SizedBox para controlar o espaçamento vertical entre os elementos, reforçando o uso de height para ajustar a distância entre os widgets.<br><br>

        Na parte inferior, utilizamos uma Row para exibir as informações “Agosto” e “2026” horizontalmente.<br><br>

        Diferente dos exercícios anteriores, nessa Row utilizamos:<br><br>

        MainAxisAlignment.spaceBetween<br><br>

        Essa propriedade distribui os elementos ocupando os extremos do espaço disponível, deixando um item de um lado e outro no lado oposto.<br><br>

        Também trabalhamos novamente com fontWeight através de FontWeight.w100, controlando a espessura de um dos textos.<br><br>

        A atividade serviu para reunir vários conceitos estudados nas aulas anteriores em uma única interface, exigindo a correta organização da árvore de widgets e o uso de propriedades para controlar alinhamento, espaçamento, cores e tipografia.<br><br>

        Conceitos trabalhados:<br><br>
        - Flutter;<br>
        - Dart;<br>
        - StatelessWidget;<br>
        - MaterialApp;<br>
        - Scaffold;<br>
        - AppBar;<br>
        - backgroundColor;<br>
        - Color.fromARGB();<br>
        - Center;<br>
        - Column;<br>
        - Row;<br>
        - children;<br>
        - MainAxisAlignment.center;<br>
        - MainAxisAlignment.spaceBetween;<br>
        - SizedBox;<br>
        - height;<br>
        - Text;<br>
        - TextStyle;<br>
        - fontSize;<br>
        - fontWeight;<br>
        - organização vertical e horizontal;<br>
        - estilização da interface;<br>
        - composição e árvore de widgets;<br>
        - atividade avaliativa prática.<br><br>

        <a href="https://github.com/Luanlhp777/mobile04" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },
    {
        data: "2026-08-11",
        titulo: "StatefulWidget, Inputs e Operações Matemáticas",
        conteudo: ` Na aula de hoje avançamos no desenvolvimento com Flutter e Dart criando uma aplicação de calculadora simples, capaz de receber dois números e realizar operações de soma, subtração, multiplicação e divisão.<br><br>

        A principal novidade foi o uso de StatefulWidget. Diferente das aulas anteriores, em que trabalhamos principalmente com StatelessWidget, agora a tela precisa armazenar e atualizar informações durante a execução do aplicativo. Por isso, foi criada a classe TelaSoma estendendo StatefulWidget e uma classe de estado chamada _TelaSomaState.<br><br>

        Dentro do estado da aplicação, criamos dois TextEditingController:<br><br>

        - numero1Controller;<br>
        - numero2Controller.<br><br>

        Esses controllers são responsáveis por acessar os valores digitados pelo usuário nos campos de entrada.<br><br>

        Também criamos uma variável double chamada resultado, utilizada para armazenar o resultado das operações matemáticas.<br><br>

        Para receber os valores, utilizamos dois widgets TextField. Cada campo recebeu um controller específico, um InputDecoration com labelText e OutlineInputBorder, além de keyboardType: TextInputType.number para indicar que o campo deve receber valores numéricos.<br><br>

        Os valores dos campos são inicialmente recebidos como texto. Para convertê-los em números, utilizamos:<br><br>

        double.tryParse()<br><br>

        Também foi utilizado o operador:<br><br>

        ?? 0<br><br>

        Dessa forma, caso o valor não possa ser convertido corretamente, o programa utiliza 0 como valor padrão.<br><br>

        Foram criadas quatro funções responsáveis pelas operações:<br><br>

        - somar();<br>
        - subtrair();<br>
        - multiplicar();<br>
        - dividir().<br><br>

        Dentro de cada função, os dois valores são capturados dos controllers e convertidos para double. Em seguida, utilizamos setState() para atualizar a variável resultado.<br><br>

        O uso de setState() foi um dos principais conceitos da aula. Sempre que o valor de resultado é alterado dentro de setState(), o Flutter reconstrói a interface e exibe automaticamente o novo resultado na tela.<br><br>

        Na operação de divisão também foi criada uma verificação para impedir uma divisão normal por zero. Quando o segundo número é igual a zero, o resultado recebe double.nan. Caso contrário, a divisão é realizada normalmente.<br><br>

        Na interface, utilizamos ElevatedButton.icon para criar botões que possuem texto e ícones. Cada botão recebeu uma função através da propriedade onPressed.<br><br>

        Os botões foram organizados em duas linhas utilizando Row:<br><br>

        Primeira linha:<br>
        - Somar;<br>
        - Subtrair.<br><br>

        Segunda linha:<br><br>
        - Multiplicar;<br>
        - Dividir.<br><br>

        Também utilizamos SizedBox para criar espaçamento entre os botões e entre os demais elementos da tela.<br><br>

        Outro widget utilizado foi Padding, com EdgeInsets.all(20), criando um espaçamento interno ao redor do conteúdo da aplicação.<br><br>

        Ao final da tela, utilizamos um widget Text para mostrar dinamicamente:<br><br>

        Resultado: $resultado<br><br>

        Esse exemplo também reforçou a interpolação de variáveis dentro de Strings em Dart utilizando o símbolo $.<br><br>

        Com essa atividade, começamos a trabalhar com aplicações Flutter realmente interativas, nas quais o usuário fornece dados, executa ações através de botões e recebe uma resposta atualizada na própria interface.<br><br>

        Conceitos trabalhados:<br><br>
        - Flutter;<br>
        - Dart;<br>
        - StatefulWidget;<br>
        - State;<br>
        - createState();<br>
        - gerenciamento de estado;<br>
        - setState();<br>
        - TextEditingController;<br>
        - TextField;<br>
        - controller;<br>
        - InputDecoration;<br>
        - labelText;<br>
        - OutlineInputBorder;<br>
        - TextInputType.number;<br>
        - double;<br>
        - double.tryParse();<br>
        - operador ??;<br>
        - funções;<br>
        - soma;<br>
        - subtração;<br>
        - multiplicação;<br>
        - divisão;<br>
        - validação de divisão por zero;<br>
        - ElevatedButton.icon;<br>
        - onPressed;<br>
        - Icon;<br>
        - Row;<br>
        - Column;<br>
        - Padding;<br>
        - EdgeInsets;<br>
        - SizedBox;<br>
        - interpolação de Strings;<br>
        - atualização dinâmica da interface.<br><br>

        <a href="https://github.com/Luanlhp777/mobile05" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },
    {
        data: "2026-08-17",
        titulo: "Exercícios de Flutter Básico",
        conteudo: ` Na aula de hoje demos continuidade aos estudos de desenvolvimento mobile com Flutter e Dart, realizando exercícios práticos para reforçar os principais conceitos trabalhados nas aulas anteriores. O repositório possui um projeto chamado exercicios e também um material em PDF com exercícios de Flutter Básico. <br><br>

        No exercício implementado no arquivo main.dart, desenvolvemos uma aplicação chamada “Campeonato de E-sports”. A proposta foi criar uma interface capaz de receber dados sobre vitórias, derrotas e quantidade de pontos por vitória e, a partir dessas informações, calcular resultados automaticamente. <br><br>

        A aplicação começa utilizando a estrutura padrão do Flutter com main(), runApp(), MaterialApp e a classe MainApp estendendo StatelessWidget.<br><br>

        Como a tela precisa armazenar valores e atualizar os resultados durante a execução, utilizamos StatefulWidget através da classe TelaCampeonato.<br><br>

        Dentro da classe de estado _TelaCampeonatoState foram criados três TextEditingController:<br><br>

        - vitoriasController;<br>
        - derrotasController;<br>
        - pontosController.<br><br>

        Esses controllers são responsáveis por acessar os valores digitados pelo usuário nos campos de entrada.<br><br>

        Também foram criadas três variáveis para armazenar os resultados:<br><br>

        - totalPartidas;<br>
        - pontuacaoFinal;<br>
        - percentualVitorias.<br><br>

        A principal função da aplicação é calcularResultados(). Nela, os valores digitados são convertidos de texto para números inteiros utilizando:<br><br>

        int.tryParse()<br><br>

        Também utilizamos:<br><br>

        ?? 0<br><br>

        para definir zero como valor padrão quando a conversão não puder ser realizada.<br><br>

        O total de partidas é calculado somando vitórias e derrotas:<br><br>

        total = vitorias + derrotas<br><br>

        A pontuação final é calculada multiplicando a quantidade de vitórias pela quantidade de pontos que cada vitória vale:<br><br>

        pontos = vitorias * pontosPorVitoria<br><br>

        Também calculamos o percentual de vitórias utilizando:<br><br>

        (vitorias / total) * 100<br><br>

        Antes desse cálculo, existe uma condição verificando se o total de partidas é maior que zero. Isso evita tentar realizar o cálculo quando ainda não existem partidas cadastradas.<br><br>

        Depois dos cálculos, utilizamos setState() para atualizar os valores de totalPartidas, pontuacaoFinal e percentualVitorias. Com isso, o Flutter reconstrói a interface e mostra automaticamente os novos resultados na tela. <br><br>

        Também criamos a função limparCampos(). Nela utilizamos o método clear() dos controllers para apagar os valores digitados e setState() para retornar todos os resultados para zero.<br><br>

        Outro conceito importante trabalhado foi o método dispose(). Ele foi utilizado para liberar os TextEditingController quando a tela deixa de ser utilizada:<br><br>

        vitoriasController.dispose();<br>
        derrotasController.dispose();<br>
        pontosController.dispose();<br><br>

        Isso mostra uma prática importante no gerenciamento de recursos em componentes com estado.<br><br>

        Na interface, utilizamos três TextField para receber:<br><br>
        - quantidade de vitórias;<br>
        - quantidade de derrotas;<br>
        - pontos por vitória.<br><br>

        Cada campo utiliza keyboardType: TextInputType.number, indicando entrada numérica, além de InputDecoration, labelText, OutlineInputBorder e prefixIcon.<br><br>

        Também foram utilizados ícones diferentes para facilitar a identificação visual de cada campo.<br><br>

        Os botões foram organizados em uma Row.<br><br>

        O botão “Calcular” foi desenvolvido com ElevatedButton.icon e chama a função calcularResultados.<br><br>

        Já o botão “Limpar” utiliza OutlinedButton.icon e chama a função limparCampos.<br><br>

        Isso permitiu praticar diferentes tipos de botões disponíveis no Flutter.<br><br>

        Os resultados são apresentados através de widgets Text mostrando:<br><br>
        - total de partidas;<br>
        - pontuação final;<br>
        - percentual de vitórias.<br><br>

        Para limitar o percentual a uma casa decimal, utilizamos:<br><br>

        toStringAsFixed(1)<br><br>

        Assim, o resultado fica apresentado de forma mais organizada, por exemplo:<br><br>

        Percentual de vitórias: 75.0%<br><br>

        A interface também utiliza widgets como Padding, Column, Row e SizedBox para controlar organização, alinhamento e espaçamento dos elementos.<br><br>

        Com esse exercício, reforçamos a criação de aplicações interativas em Flutter, combinando entrada de dados, operações matemáticas, condições, funções, gerenciamento de estado e atualização dinâmica da interface.<br><br>

        Conceitos trabalhados:<br><br>
        - Flutter;<br>
        - Dart;<br>
        - StatelessWidget;<br>
        - StatefulWidget;<br>
        - State;<br>
        - MaterialApp;<br>
        - Scaffold;<br>
        - AppBar;<br>
        - TextEditingController;<br>
        - TextField;<br>
        - InputDecoration;<br>
        - OutlineInputBorder;<br>
        - prefixIcon;<br>
        - TextInputType.number;<br>
        - int.tryParse();<br>
        - operador ??;<br>
        - variáveis int e double;<br>
        - operações matemáticas;<br>
        - estrutura if;<br>
        - funções;<br>
        - setState();<br>
        - gerenciamento de estado;<br>
        - clear();<br>
        - dispose();<br>
        - ElevatedButton.icon;<br>
        - OutlinedButton.icon;<br>
        - onPressed;<br>
        - Row;<br>
        - Column;<br>
        - Padding;<br>
        - SizedBox;<br>
        - Text;<br>
        - TextStyle;<br>
        - interpolação de Strings;<br>
        - toStringAsFixed();<br>
        - atualização dinâmica da interface.<br><br>
        

        <a href="https://github.com/Luanlhp777/mobile06" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },
    {
        data: "2026-08-18",
        titulo: "",
        conteudo: ` <br><br>

        <a href="" target="_blank" class="btn-github">Ver código no GitHub</a>
        `
    },

]