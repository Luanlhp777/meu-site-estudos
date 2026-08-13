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
    {
        data: "2026-08-05",
        titulo: "React | Renderização Condicional | Criação de Componentes",
        conteudo: ` Na aula de hoje demos continuidade aos estudos de React, trabalhando principalmente com renderização condicional, criação de componentes e organização da aplicação em arquivos separados.<br><br>

        Inicialmente, criamos o componente CondicionalSimples. Nesse exemplo, foi definida uma variável idade com valor 20 e uma variável mensagem inicialmente vazia. Utilizamos uma estrutura if para verificar se a idade era maior ou igual a 18. Quando a condição era verdadeira, a mensagem “Você é maior de idade” era atribuída à variável e exibida na interface através do JSX.<br><br>

        Esse exercício mostrou como podemos utilizar lógica JavaScript antes do return de um componente React e depois exibir o resultado dentro do JSX utilizando chaves.<br><br>

        Também desenvolvemos o componente CondicionalComposta, utilizando uma estrutura if/else. Nesse exemplo, uma variável nota recebeu o valor 6 e o programa verificou se ela era maior ou igual a 7. Caso fosse verdadeira, a situação seria “Aprovado”; caso contrário, seria “Reprovado”. O resultado foi então exibido dinamicamente na página. <br><br>

        Com isso, reforçamos a diferença entre:<br><br>

        - Condicional simples: utiliza apenas if para executar uma ação quando a condição é verdadeira;<br>
        - Condicional composta: utiliza if e else, permitindo executar comportamentos diferentes dependendo do resultado da condição.<br><br>

        Também criamos um componente chamado Separador, responsável por retornar uma tag hr estilizada. Esse componente foi utilizado para separar visualmente os exercícios na tela, mostrando que até pequenos elementos da interface podem ser transformados em componentes reutilizáveis. <br><br>

        No arquivo App.jsx, importamos os componentes CondicionalSimples, CondicionalComposta e Separador. Depois, utilizamos esses componentes dentro do return do App, organizando a interface principal da aplicação. <br><br>

        A estrutura utilizada ficou baseada na composição de componentes:<br><br>

        App<br>
        → CondicionalSimples<br>
        → Separador<br>
        → CondicionalComposta<br>
        → Separador<br><br>

        Essa organização reforça uma característica importante do React: construir interfaces a partir de componentes independentes e reutilizáveis.<br><br>

        Também utilizamos estilização inline através da propriedade style, passando objetos JavaScript para definir propriedades como padding, border e margin.<br><br>

        O repositório possui ainda arquivos preparados para estudos posteriores, como CondicionalComEstado.jsx, CondicionalComInput.jsx e CondicionalTernaria.jsx, porém atualmente esses arquivos estão vazios. Portanto, o conteúdo efetivamente implementado nesta aula está concentrado nas condicionais simples e composta e na organização dos componentes. <br><br>

        Conceitos trabalhados:<br><br>
        - React;<br>
        - componentes funcionais;<br>
        - JSX;<br>
        - import e export default;<br>
        - renderização condicional;<br>
        - estrutura if;<br>
        - estrutura if/else;<br>
        - variáveis dentro de componentes;<br>
        - interpolação com chaves no JSX;<br>
        - composição de componentes;<br>
        - reutilização de componentes;<br>
        - estilização inline;<br>
        - organização da aplicação em arquivos separados.<br><br>

        <a href="https://github.com/Luanlhp777/react02" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-08-06",
        titulo: "React | Operador Ternario | Hook uneState",
        conteudo: ` Na aula de hoje demos continuidade aos estudos de React, aprofundando o uso de renderização condicional e iniciando o trabalho com estado utilizando o hook useState.<br><br>

        Inicialmente, reforçamos a organização dos componentes React. Foi destacado que os nomes dos componentes devem começar com letra maiúscula e que cada componente pode ser criado em seu próprio arquivo utilizando export default function. Depois, o componente é importado e utilizado dentro do App.jsx. <br><br>

        No primeiro exercício, criamos o componente CondicionalTernaria. Nele foi definida a constante logado com valor false e utilizamos o operador ternário diretamente dentro do JSX.<br><br>

        A estrutura utilizada foi baseada na seguinte lógica:<br><br>

        condição ? valor_se_verdadeiro : valor_se_falso<br><br>

        No exemplo, caso logado fosse verdadeiro, seria exibida a mensagem “Bem-vindo de volta”. Caso fosse falso, seria exibida a mensagem “Você precisa fazer login.”. Esse exercício mostrou uma forma compacta de realizar renderização condicional diretamente dentro do JSX. <br><br>

        Na sequência, desenvolvemos o componente CondicionalComInput, no qual começamos a trabalhar com o hook useState. Primeiro, importamos useState do React e criamos dois estados:<br><br>

        - idade: responsável por armazenar o valor digitado pelo usuário;<br>
        - mensagem: responsável por armazenar o resultado da verificação.<br><br>

        A estrutura utilizada foi:<br><br>

        const [idade, setIdade] = useState("")<br>
        const [mensagem, setMensagem] = useState("")<br><br>

        Nesse padrão, idade e mensagem representam os valores atuais dos estados, enquanto setIdade e setMensagem são funções utilizadas para atualizar esses valores. <br><br>

        Também criamos um campo input do tipo number. O valor do campo foi ligado ao estado idade através da propriedade value. Já o evento onChange foi utilizado para capturar cada alteração realizada pelo usuário.<br><br>

        Dentro do onChange utilizamos:<br><br>

        e.target.value<br><br>

        Esse comando permite acessar o valor atual digitado no campo. Em seguida, setIdade() atualiza o estado da aplicação.<br><br>

        Também criamos um botão com o evento onClick. Quando o usuário clica em “Verificar”, a função verificar() é executada.<br><br>

        Dentro dessa função utilizamos uma estrutura condicional com if, else if e else.<br><br>

        A lógica implementada foi:<br><br>

        - se o campo estiver vazio, mostrar “Digite uma idade válida.”;<br>
        - se a idade for maior ou igual a 18, mostrar “Você é maior de idade.”;<br>
        - caso contrário, mostrar “Você é menor de idade.”.<br><br>

        A mensagem é atualizada utilizando setMensagem() e exibida automaticamente na interface através do JSX. <br><br>

        Esse exercício mostrou uma característica muito importante do React: quando um estado é alterado utilizando sua função set, o componente é renderizado novamente e a interface é atualizada automaticamente.<br><br>

        No arquivo App.jsx, importamos os componentes CondicionalTernaria e CondicionalComInput e os utilizamos dentro do componente principal, mantendo a aplicação organizada em componentes separados. <br><br>

        A aula reforçou a evolução da renderização condicional em React, passando de condições simples para interfaces capazes de responder às ações do usuário através de eventos e estados.<br><br>

        Conceitos trabalhados:<br><br>
        - React;<br>
        - componentes funcionais;<br>
        - organização de componentes;<br>
        - export default;<br>
        - import;<br>
        - JSX;<br>
        - renderização condicional;<br>
        - operador ternário;<br>
        - useState;<br>
        - estado da aplicação;<br>
        - atualização de estado;<br>
        - setIdade();<br>
        - setMensagem();<br>
        - input controlado;<br>
        - value;<br>
        - onChange;<br>
        - e.target.value;<br>
        - eventos;<br>
        - onClick;<br>
        - funções em componentes;<br>
        - if, else if e else;<br>
        - atualização dinâmica da interface.<br><br>

        <a href="https://github.com/Luanlhp777/react03" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-08-12",
        titulo: "Cadastro de Produtos com React",
        conteudo: ` Na aula de hoje demos continuidade aos estudos de Front-end com React, trabalhando na criação de um formulário para cadastro de produtos e reforçando conceitos de componentes, estados, eventos e inputs controlados.<br><br>

        O projeto foi organizado utilizando React com Vite. Dentro da pasta src, o arquivo App.jsx importa o componente FormProduto e o exibe dentro do elemento main da aplicação. <br><br>

        O principal componente desenvolvido foi o FormProduto.jsx. Ele representa um formulário responsável por receber os dados de um novo produto.<br><br>

        Dentro do componente, utilizamos o hook useState para criar três estados:<br><br>

        - nome;<br>
        - descricao;<br>
        - preco.<br><br>

        Cada estado possui também sua respectiva função de atualização:<br><br>

        - setNome();<br>
        - setDescricao();<br>
        - setPreco().<br><br>

        Esses estados permitem que o React acompanhe os valores digitados pelo usuário em tempo real. <br><br>

        Os campos do formulário são controlados utilizando as propriedades value e onChange.<br><br>

        Quando o usuário digita alguma informação, utilizamos:<br><br>

        evento.target.value<br><br>

        para acessar o valor atual do input e atualizar o estado correspondente.<br><br>

        Dessa forma, os inputs permanecem sincronizados com os estados do componente.<br><br>

        Também utilizamos diferentes tipos de input:<br><br>

        - type="text" para nome;<br>
        - type="text" para descrição;<br>
        - type="number" para preço.<br><br>

        No campo de preço foram utilizadas ainda as propriedades min="0" e step="0.01", permitindo valores positivos e números decimais.<br><br>

        Para tratar o envio do formulário, criamos a função enviarFormulario(). Essa função recebe o evento gerado pelo submit e utiliza:<br><br>

        evento.preventDefault();<br><br>

        Esse método impede o comportamento padrão do formulário HTML, evitando que a página seja recarregada após o envio.<br><br>

        Também foi implementada uma validação simples:<br><br>

        if (!nome.trim() || !preco) {<br>
            return;<br>
        }<br><br>

        Com isso, o cadastro só continua se o nome e o preço estiverem preenchidos. O método trim() é utilizado para remover espaços extras do início e do final do texto. <br><br>

        Depois da validação, o componente chama a função aoCadastrar(), recebida através das props.<br><br>

        É enviado um objeto contendo:<br><br>

        - nome;<br>
        - descricao;<br>
        - preco.<br><br>

        O nome e a descrição são tratados com trim(), enquanto o preço é convertido para número utilizando Number().<br><br>

        Esse ponto introduz um conceito importante do React: comunicação entre componentes através de props. O componente FormProduto não realiza sozinho toda a lógica de cadastro; ele prepara os dados e chama uma função recebida externamente.<br><br>

        Após o envio, os campos são limpos através de:<br><br>

        setNome("");<br>
        setDescricao("");<br>
        setPreco("");<br><br>

        Dessa forma, o formulário volta ao estado inicial e fica preparado para um novo cadastro.<br><br>

        No JSX, utilizamos a tag form com o evento onSubmit ligado à função enviarFormulario. Também foram utilizados elementos label, input e button para construir a estrutura do formulário.<br><br>

        O botão foi definido como:<br><br>

        type="submit"<br><br>

        fazendo com que o clique acione o evento onSubmit do formulário.<br><br>

        O projeto possui ainda arquivos preparados para outros componentes, como Header.jsx, ListaProduto.jsx e Produto.jsx, porém atualmente esses arquivos estão vazios. Portanto, nesta etapa o desenvolvimento está concentrado principalmente no formulário de cadastro. <br><br>

        Conceitos trabalhados:<br><br>
        - React;<br>
        - Vite;<br>
        - componentes funcionais;<br>
        - JSX;<br>
        - useState;<br>
        - estados;<br>
        - setState através das funções do useState;<br>
        - formulários;<br>
        - inputs controlados;<br>
        - value;<br>
        - onChange;<br>
        - evento.target.value;<br>
        - onSubmit;<br>
        - preventDefault();<br>
        - validação de formulário;<br>
        - trim();<br>
        - Number();<br>
        - props;<br>
        - comunicação entre componentes;<br>
        - objetos JavaScript;<br>
        - limpeza de formulário;<br>
        - type="submit";<br>
        - organização de componentes.<br><br>

        <a href="https://github.com/Luanlhp777/frontend" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-08-13",
        titulo: "",
        conteudo: ` <br><br>

        <a href="" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
]