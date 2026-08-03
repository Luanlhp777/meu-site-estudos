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
]