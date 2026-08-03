const aulasWeb2 = [
    {
        data: "2026-07-29",
        titulo: "Modulação",
        conteudo: ` Na aula de hoje estudamos modularização em JavaScript, aprendendo a dividir o código em arquivos menores e responsáveis por funções específicas. Essa organização facilita a leitura, a manutenção, os testes e a reutilização do código em projetos maiores.<br><br>

        Inicialmente, foi apresentada a diferença entre exportação padrão (default export) e exportação nomeada (named export). O export default permite apenas uma exportação principal por arquivo e pode ser importado com qualquer nome, sem o uso de chaves. Já o export nomeado permdite exportar várias funções no mesmo arquivo e exige o uso de chaves durante a importação.<br><br>

        No primeiro exemplo, criamos o arquivo mensagem.js com uma função exportada como padrão. Essa função recebe um nome e retorna uma saudação. No arquivo app.js, utilizamos import para carregar a função e executá-la.<br><br>

        No segundo exemplo, o arquivo matematica.js exportou de forma nomeada as funções somar() e multiplicar(). No app2.js, importamos as duas funções entre chaves e realizamos operações matemáticas com os valores informados.<br><br>

        No terceiro exercício, trabalhamos com o arquivo strings.js, que possui as funções tamanho() e maiusculo(). A função tamanho() retorna a quantidade de caracteres de um texto utilizando length, enquanto maiusculo() transforma o conteúdo para letras maiúsculas com toUpperCase(). Durante a importação no app3.js, também utilizamos aliases com a palavra as, renomeando temporariamente as funções para lengthStr e upper.<br><br>

        No quarto exemplo, combinamos os dois tipos de exportação no mesmo arquivo. Em usuario.js, a função criarUsuario() foi exportada como default e retorna um objeto contendo nome e idade. A função validarIdade() foi exportada de forma nomeada e verifica se a idade é maior ou igual a 18. No app4.js, ambas foram importadas na mesma instrução e utilizadas para criar e validar os dados de um usuário.<br><br>

        Também configuramos o arquivo index.html para carregar o JavaScript como módulo utilizando type="module". Essa configuração permite utilizar os comandos import e export diretamente no navegador.<br><br>

        Além disso, foi apresentada a criação de projetos utilizando Vite com o comando npm create vite@latest nomedoprojeto. Para iniciar o servidor de desenvolvimento utilizamos npm run dev, e para interromper sua execução utilizamos Ctrl + C.<br><br>

        A aula reforçou conceitos importantes como:<br>
        - modularização;<br>
        - separação de responsabilidades;<br>
        - import e export;<br>
        - export default;<br>
        - export nomeado;<br>
        - aliases com as;<br>
        - funções reutilizáveis;<br>
        - objetos;<br>
        - type="module";<br>
        - criação de projetos com Vite;<br>
        - organização e manutenção de código JavaScript.<br><br>
        <a href="https://github.com/Luanlhp777/modulacao" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-07-30",
        titulo: "React",
        conteudo: ` Na aula de hoje iniciamos o desenvolvimento com React, utilizando o Vite para criar e executar o projeto. O objetivo foi compreender a estrutura básica de uma aplicação React e como os componentes são renderizados no navegador.<br><br>

        O arquivo index.html possui uma div com o id root, que funciona como o ponto de entrada visual da aplicação. Já no arquivo main.jsx, utilizamos createRoot() para conectar o React a esse elemento HTML e renderizar o componente principal App dentro do StrictMode.<br><br>

        No componente App.jsx, criamos um componente funcional utilizando export default function App(). Dentro dele, definimos um vetor chamado alunos, contendo os nomes Ana, João e Maria.<br><br>

        Na parte retornada pelo componente, utilizamos JSX para montar a interface. Foi criada uma lista não ordenada com a tag ul e, dentro dela, usamos o método map() para percorrer o vetor alunos. A cada repetição, o React cria um elemento li contendo o nome do aluno.<br><br>

        Também utilizamos uma Arrow Function dentro do map() e recebemos os parâmetros aluno e index. O valor aluno representa o conteúdo atual do vetor, enquanto index representa sua posição. O índice foi utilizado na propriedade key, necessária para que o React identifique cada elemento gerado na lista.<br><br>

        Além disso, aplicamos estilização diretamente no componente através do atributo style, utilizando um objeto JavaScript com a propriedade padding.<br><br>

        A aula reforçou conceitos importantes como:<br>
        - criação de projetos React com Vite;<br>
        - estrutura básica de uma aplicação React;<br>
        - index.html e elemento root;<br>
        - createRoot();<br>
        - StrictMode;<br>
        - componentes funcionais;<br>
        - export default;<br>
        - JSX;<br>
        - vetores;<br>
        - método map();<br>
        - Arrow Functions;<br>
        - renderização dinâmica de listas;<br>
        - propriedade key;<br>
        - estilo inline em React.<br><br>
        <a href="https://github.com/Luanlhp777/react" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
]