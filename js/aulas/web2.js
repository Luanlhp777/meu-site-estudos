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
        titulo: "Integração frontEnd com backEnd",
        conteudo: ` Na aula de hoje começamos a integrar os dois projetos que haviam sido desenvolvidos separadamente: o Back-end com Node.js e Express e o Front-end com React. A partir dessa junção, passamos a trabalhar em uma aplicação Full Stack chamada Projeto Catálogo. <br><br>

        O objetivo do projeto é desenvolver um catálogo de produtos com separação clara entre Front-end, Back-end, API REST, regras de negócio e gerenciamento de produtos.<br><br>

        A estrutura do projeto ficou organizada em um único repositório contendo duas pastas principais:<br><br>

        projetoCatalogo/<br>
        ├── backend/<br>
        └── frontend/<br><br>

        Dessa forma, o Front-end e o Back-end continuam sendo projetos independentes, cada um com seu próprio package.json e suas próprias dependências, mas agora fazem parte da mesma aplicação. <br><br>

        No Back-end continuamos utilizando Node.js, Express e JavaScript. A estrutura permanece organizada em:<br><br>

        backend/src/<br>
        ├── controllers/<br>
        ├── data/<br>
        ├── routes/<br>
        └── app.js<br><br>

        Essa parte é responsável pelas regras de negócio, rotas da API, processamento das requisições e envio das respostas em formato JSON.<br><br>

        Entre as funcionalidades já existentes no Back-end estão:<br><br>
        - listagem de produtos;<br>
        - cadastro de produtos;<br>
        - validação de dados;<br>
        - rotas HTTP;<br>
        - controllers;<br>
        - respostas JSON;<br>
        - códigos de status HTTP.<br><br>

        O endpoint principal utilizado para trabalhar com produtos é:<br><br>

        /api/produtos<br><br>

        No Front-end continuamos utilizando React, Vite, JavaScript, JSX e CSS.<br><br>

        Nessa camada trabalhamos com:<br><br>
        - componentes;<br>
        - useState;<br>
        - formulários controlados;<br>
        - eventos;<br>
        - props;<br>
        - validação de campos;<br>
        - organização da interface.<br><br>

        O principal conceito da aula foi entender como essas duas partes devem se comunicar.<br><br>

        O fluxo esperado da aplicação é:<br><br>

        Usuário<br>
        ↓<br>
        Frontend React<br>
        ↓<br>
        Requisição HTTP<br>
        ↓<br>
        API Node.js + Express<br>
        ↓<br>
        Processamento no Back-end<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        Frontend React<br>
        ↓<br>
        Interface atualizada<br><br>

        Ou seja, o React fica responsável pela interface e interação com o usuário, enquanto o Node.js com Express fica responsável por receber as requisições, executar as regras necessárias e devolver os dados para o Front-end. <br><br>

        Também entendemos que Front-end e Back-end são executados separadamente durante o desenvolvimento.<br><br>

        Para executar o Back-end:<br><br>

        cd backend<br>
        npm install<br>
        npm run dev<br><br>

        Depois, para executar o Front-end:<br><br>

        cd frontend<br>
        npm install<br>
        npm run dev<br><br>

        Assim, teremos dois processos rodando ao mesmo tempo: um servidor responsável pela API e outro servidor de desenvolvimento do Vite responsável pela aplicação React.<br><br>

        A aula também reforçou o conceito de API REST como intermediária da comunicação. O Front-end não deve acessar diretamente os dados internos do Back-end. Em vez disso, envia requisições HTTP para endpoints definidos pela API e recebe respostas normalmente em JSON.<br><br>

        A integração permite que um cadastro realizado pelo usuário no formulário React seja enviado para a API. O Back-end recebe os dados, executa as validações e regras de negócio e retorna uma resposta para o Front-end.<br><br>

        Da mesma forma, para listar produtos, o Front-end poderá realizar uma requisição GET para a API, receber o conjunto de produtos e utilizar esses dados para montar dinamicamente a interface.<br><br>

        Nesta etapa, o projeto foi estruturado como uma aplicação Full Stack e preparado para aprofundar a comunicação efetiva entre as duas camadas. O próprio repositório indica como próximas evoluções o uso de fetch, listagem dinâmica, cadastro através da API, atualização, exclusão, CRUD completo e posteriormente integração com banco de dados. <br><br>

        A organização em um único repositório também facilita o versionamento do projeto completo utilizando Git e GitHub.<br><br>

        O fluxo utilizado continua sendo:<br><br>

        git status<br>
        git add .<br>
        git commit -m "Descrição da alteração"<br>
        git push origin main<br><br>

        Com essa aula, começamos a sair de aplicações Front-end e Back-end isoladas e passamos a compreender como funciona a arquitetura de uma aplicação Full Stack, na qual diferentes camadas trabalham juntas para formar um sistema completo.<br><br>

        Conceitos trabalhados:<br><br>
        - desenvolvimento Full Stack;<br>
        - integração Front-end e Back-end;<br>
        - React;<br>
        - Vite;<br>
        - Node.js;<br>
        - Express;<br>
        - JavaScript;<br>
        - JSX;<br>
        - API REST;<br>
        - requisições HTTP;<br>
        - respostas JSON;<br>
        - endpoints;<br>
        - /api/produtos;<br>
        - componentes;<br>
        - useState;<br>
        - formulários controlados;<br>
        - props;<br>
        - rotas;<br>
        - controllers;<br>
        - regras de negócio;<br>
        - códigos de status HTTP;<br>
        - separação de responsabilidades;<br>
        - arquitetura em camadas;<br>
        - comunicação cliente-servidor;<br>
        - organização em monorepositório;<br>
        - Git;<br>
        - GitHub;<br>
        - preparação para uso de fetch e CRUD completo.<br><br>

        <a href="https://github.com/Luanlhp777/projetoCatalogo" target="_blank" class="btn-github">Ver código no GitHub</a> `
    },
    {
        data: "2026-08-19",
        titulo: "Projeto Integrado - Catálogo de Produtos v2",
        conteudo: ` Na aula de hoje demos continuidade ao Projeto Integrador de Catálogo de Produtos, agora em uma nova versão do projeto, trabalhando novamente a integração entre o Front-end em React e o Back-end em Node.js com Express.<br><br>

        O objetivo principal continua sendo construir uma aplicação Full Stack simples, separando claramente as responsabilidades entre as duas partes do sistema. O React fica responsável pela interface e pela interação com o usuário, enquanto o Express mantém temporariamente os dados em memória e disponibiliza as operações utilizadas pelo Front-end. Nesta etapa ainda não existe banco de dados; os produtos são armazenados apenas em um vetor, portanto os dados são perdidos quando o servidor é reiniciado. <br><br>

        O projeto está dividido em duas pastas principais:<br><br>

        projetoCatalogoV2/<br>
        ├── frontend/<br>
        └── backend/<br><br>

        Essa organização permite executar as duas aplicações separadamente, mantendo cada camada com suas próprias dependências e responsabilidades. <br><br>

        No Back-end, continuamos utilizando Node.js e Express. O servidor é executado na porta 3000 e utiliza express.json() para permitir o recebimento de dados em formato JSON enviados pelo Front-end.<br><br>

        Também mantivemos a rota principal:<br><br>

        /api/produtos<br><br>

        Essa rota é encaminhada para o módulo produtoRoutes, mantendo a organização do projeto em rotas, controllers e camada de dados. <br><br>

        No Front-end, utilizamos React e começamos a trabalhar de maneira mais completa com a comunicação com a API.<br><br>

        No App.jsx foram utilizados os hooks:<br><br>

        - useState;<br>
        - useEffect.<br><br>

        O useState é utilizado para controlar diferentes informações da aplicação, como:<br><br>
        - produtos;<br>
        - mensagem;<br>
        - busca.<br><br>

        Já o useEffect é utilizado para executar a função carregarProdutos() quando a aplicação é carregada. <br><br>

        A função carregarProdutos() utiliza fetch() para realizar uma requisição GET para:<br><br>

        /api/produtos<br><br>

        Depois da resposta do Back-end, os dados são convertidos para JSON através de:<br><br>

        resposta.json()<br><br>

        e armazenados no estado produtos utilizando setProdutos().<br><br>

        Com isso, os produtos que estão no Back-end passam a ser exibidos pelo Front-end.<br><br>

        Também trabalhamos com o cadastro de produtos através de uma requisição POST.<br><br>

        A função cadastrarProduto() utiliza:<br><br>

        fetch("/api/produtos", {<br>
            method: "POST",<br>
            headers: {<br>
                "Content-Type": "application/json"<br>
            },<br>
            body: JSON.stringify(produto)<br>
        })<br><br>

        Nesse processo, o objeto JavaScript contendo os dados do produto é convertido para JSON utilizando JSON.stringify() e enviado para a API.<br><br>

        Caso a resposta não seja bem-sucedida, verificamos:<br><br>

        resposta.ok<br><br>

        e exibimos a mensagem de erro retornada pelo Back-end.<br><br>

        Quando o cadastro é realizado corretamente, o novo produto retornado pela API é adicionado ao estado da aplicação através de:<br><br>

        setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto])<br><br>

        Dessa forma, a tela é atualizada imediatamente sem precisar recarregar a página. <br><br>

        Também foi implementado um contador de produtos utilizando:<br><br>

        produtos.length<br><br>

        Esse contador é exibido na interface e acompanha automaticamente a quantidade atual de itens presentes no estado.<br><br>

        Outra funcionalidade implementada foi a busca de produtos.<br><br>

        Criamos o estado busca e utilizamos:<br><br>

        produtos.filter()<br><br>

        para gerar uma nova lista contendo apenas os produtos cujo nome corresponde ao texto pesquisado.<br><br>

        A comparação utiliza:<br><br>

        produto.nome.toLowerCase().includes(busca.toLowerCase())<br><br>

        Com isso, a pesquisa não diferencia letras maiúsculas e minúsculas.<br><br>

        A lista filtrada é enviada para o componente ListaProdutos através de props.<br><br>

        Também evoluímos a estrutura de componentes do Front-end. Atualmente existem componentes separados para:<br><br>

        - Header;<br>
        - FormProduto;<br>
        - ListaProdutos;<br>
        - Produto;<br>
        - Footer.<br><br>

        Essa separação melhora a organização do código e reforça o conceito de componentização do React.<br><br>

        No formulário de produtos, continuamos utilizando useState para controlar os campos nome, descrição e preço.<br><br>

        Também adicionamos um estado chamado erro, responsável por armazenar mensagens de validação.<br><br>

        Antes de cadastrar um produto, verificamos se o nome foi preenchido:<br><br>

        if (!nome.trim())<br><br>

        Caso contrário, é exibida a mensagem:<br><br>

        "Digite o nome do produto."<br><br>

        Também verificamos se o preço foi preenchido e se é maior que zero:<br><br>

        if (!preco || Number(preco) <= 0)<br><br>

        Caso a condição seja verdadeira, o usuário recebe a mensagem:<br><br>

        "O preço deve ser maior que zero."<br><br>

        Assim, o formulário passou a possuir validação antes de enviar os dados para a API. <br><br>

        Depois que o produto é cadastrado, os campos são limpos utilizando:<br><br>

        setNome("");<br>
        setDescricao("");<br>
        setPreco("");<br><br>

        Além disso, as mensagens de erro são exibidas de maneira condicional dentro do JSX.<br><br>

        Outro ponto importante foi a integração através do proxy do Vite.<br><br>

        Quando o Front-end realiza uma requisição para:<br><br>

        /api/produtos<br><br>

        o Vite encaminha essa requisição para:<br><br>

        http://localhost:3000/api/produtos<br><br>

        Isso permite que o Front-end se comunique com o servidor Express durante o desenvolvimento sem precisar alterar cada chamada para utilizar diretamente o endereço completo do Back-end. <br><br>

        O fluxo da aplicação ficou semelhante a:<br><br>

        Usuário<br>
        ↓<br>
        React<br>
        ↓<br>
        Evento ou carregamento da página<br>
        ↓<br>
        fetch()<br>
        ↓<br>
        API /api/produtos<br>
        ↓<br>
        Node.js + Express<br>
        ↓<br>
        Processamento<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        React atualiza o estado<br>
        ↓<br>
        Interface é renderizada novamente<br><br>

        Com essa aula, reforçamos principalmente a comunicação real entre Front-end e Back-end, indo além de projetos separados e trabalhando com uma aplicação integrada.<br><br>

        Conceitos trabalhados:<br><br>
        - desenvolvimento Full Stack;<br>
        - React;<br>
        - Node.js;<br>
        - Express;<br>
        - API REST;<br>
        - integração Front-end e Back-end;<br>
        - useState;<br>
        - useEffect;<br>
        - fetch();<br>
        - async/await;<br>
        - GET;<br>
        - POST;<br>
        - JSON;<br>
        - JSON.stringify();<br>
        - resposta.json();<br>
        - resposta.ok;<br>
        - estado;<br>
        - atualização dinâmica da interface;<br>
        - arrays;<br>
        - spread operator;<br>
        - filter();<br>
        - includes();<br>
        - toLowerCase();<br>
        - busca de produtos;<br>
        - contador de produtos;<br>
        - validação de formulário;<br>
        - mensagens de erro;<br>
        - props;<br>
        - componentes;<br>
        - Header;<br>
        - Footer;<br>
        - FormProduto;<br>
        - ListaProdutos;<br>
        - proxy do Vite;<br>
        - separação de responsabilidades;<br>
        - dados temporários em memória.<br><br>
        
        
        <a href="https://github.com/Luanlhp777/projetoCatalogoV2" target="_blank" class="btn-github">Ver código no Github</a>`
    },
    {
        data: "2026-08-20",
        titulo: "Projeto Integrado - Catálogo de Produtos v3",
        conteudo: ` Na aula de hoje demos continuidade ao Projeto Integrador Catálogo de Produtos, avançando para a Parte 3 do desenvolvimento e completando as operações de alteração e exclusão de produtos no Front-end e no Back-end.<br><br>

        O principal objetivo da aula foi transformar o projeto em um CRUD completo.<br><br>

        CRUD representa as quatro operações fundamentais de manipulação de dados:<br><br>

        CREATE → criar<br>
        READ → consultar<br>
        UPDATE → atualizar<br>
        DELETE → excluir<br><br>

        No Back-end, mantivemos as funções já existentes para listar e cadastrar produtos e adicionamos duas novas funções: alterarProduto() e excluirProduto(). <br><br>

        Na função alterarProduto(), o ID do produto é recebido através da URL utilizando:<br><br>

        req.params.id<br><br>

        Depois, o produto correspondente é localizado no vetor utilizando find().<br><br>

        Caso o produto não seja encontrado, a API retorna o status HTTP 404, indicando que o recurso solicitado não existe.<br><br>

        Também foram mantidas as validações de nome e preço antes da alteração.<br><br>

        Quando o produto é encontrado e os dados são válidos, suas informações de nome, descrição e preço são atualizadas.<br><br>

        Para a exclusão, foi criada a função excluirProduto().<br><br>

        Nesse caso, utilizamos findIndex() para descobrir a posição do produto dentro do vetor.<br><br>

        Depois de localizar o índice, utilizamos:<br><br>

        splice()<br><br>

        para remover o produto da lista.<br><br>

        Também foi adicionado tratamento para quando o produto informado não existe.<br><br>

        No arquivo de rotas do Back-end, mantivemos:<br><br>

        GET /<br>
        POST /<br><br>

        e adicionamos:<br><br>

        PUT /:id<br>
        DELETE /:id<br><br>

        Com isso, a API passou a oferecer as quatro operações principais:<br><br>

        POST → cadastrar produto<br>
        GET → listar produtos<br>
        PUT → alterar produto<br>
        DELETE → excluir produto<br><br>

        No Front-end, o App.jsx também foi ampliado para controlar as novas funcionalidades.<br><br>

        Foi criado o estado:<br><br>

        produtoEmEdicao<br><br>

        Esse estado é utilizado para identificar qual produto foi selecionado para ser alterado.<br><br>

        Quando o usuário escolhe editar um produto, seus dados passam a ser enviados para o formulário.<br><br>

        Também foi criada a função alterarProduto(), que realiza uma requisição HTTP através de fetch() utilizando o método PUT.<br><br>

        O ID do produto é enviado diretamente na URL da API, permitindo que o Back-end saiba exatamente qual registro deve ser atualizado.<br><br>

        Depois que o Back-end devolve o produto atualizado, utilizamos:<br><br>

        map()<br><br>

        para percorrer a lista existente e substituir somente o produto alterado no estado do React.<br><br>

        Também foi criada a função excluirProduto(), utilizando fetch() com o método DELETE.<br><br>

        Após a confirmação da exclusão pelo Back-end, o Front-end utiliza:<br><br>

        filter()<br><br>

        para criar uma nova lista sem o produto excluído.<br><br>

        Se o produto removido estiver sendo editado naquele momento, o estado produtoEmEdicao também é limpo.<br><br>

        O componente FormProduto passou a funcionar em dois modos:<br><br>

        - cadastro;<br>
        - edição.<br><br>

        Para isso, foram adicionadas as props produtoEmEdicao e aoAlterar.<br><br>

        Também utilizamos useEffect() para observar quando um produto é selecionado para edição.<br><br>

        Quando isso acontece, os campos do formulário são preenchidos automaticamente com os dados do produto escolhido.<br><br>

        Assim, o mesmo formulário pode ser reutilizado tanto para criar um novo produto quanto para atualizar um produto existente.<br><br>

        Também foi adicionada uma opção para cancelar a edição e limpar novamente os campos.<br><br>

        O texto do botão do formulário muda de acordo com o modo atual, permitindo que o usuário entenda se está cadastrando ou alterando um produto.<br><br>

        As validações de nome e preço desenvolvidas anteriormente foram mantidas.<br><br>

        O componente ListaProdutos também foi atualizado.<br><br>

        Ele passou a receber as ações:<br><br>

        - aoEditar;<br>
        - aoExcluir.<br><br>

        Essas funções são repassadas para cada componente Produto.<br><br>

        No componente Produto foram adicionados dois novos botões:<br><br>

        Editar<br>
        Excluir<br><br>

        O botão Editar envia o produto selecionado para o processo de edição.<br><br>

        O botão Excluir envia o ID do produto para a função responsável pela exclusão.<br><br>

        O CSS também foi atualizado para estilizar esses novos botões e o modo de edição do formulário, mantendo o tema visual e a responsividade desenvolvidos anteriormente.<br><br>

        Ao final da aula, o sistema passou a permitir:<br><br>

        - listar produtos;<br>
        - cadastrar produtos;<br>
        - buscar produtos;<br>
        - validar o formulário;<br>
        - editar produtos;<br>
        - excluir produtos.<br><br>

        O fluxo de edição ficou semelhante a:<br><br>

        Usuário<br>
        ↓<br>
        Clica em Editar<br>
        ↓<br>
        Produto é armazenado em produtoEmEdicao<br>
        ↓<br>
        Formulário é preenchido<br>
        ↓<br>
        Usuário altera os dados<br>
        ↓<br>
        fetch() com PUT<br>
        ↓<br>
        API Node.js + Express<br>
        ↓<br>
        Produto é alterado<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        map() atualiza o estado<br>
        ↓<br>
        Interface atualizada<br><br>

        Já o fluxo de exclusão ficou:<br><br>

        Usuário<br>
        ↓<br>
        Clica em Excluir<br>
        ↓<br>
        fetch() com DELETE<br>
        ↓<br>
        API Node.js + Express<br>
        ↓<br>
        Produto é removido<br>
        ↓<br>
        Front-end utiliza filter()<br>
        ↓<br>
        Lista é atualizada<br><br>

        Com essa etapa, o projeto passou a possuir um CRUD completo integrado entre React e Node.js com Express.<br><br>

        Os dados, porém, continuam armazenados temporariamente em memória. Isso significa que os registros adicionados ou modificados ainda são perdidos quando o servidor é reiniciado. A persistência definitiva será trabalhada em etapas futuras do projeto.<br><br>

        Conceitos trabalhados:<br><br>
        - CRUD;<br>
        - CREATE;<br>
        - READ;<br>
        - UPDATE;<br>
        - DELETE;<br>
        - React;<br>
        - Node.js;<br>
        - Express;<br>
        - API REST;<br>
        - GET;<br>
        - POST;<br>
        - PUT;<br>
        - DELETE;<br>
        - req.params.id;<br>
        - find();<br>
        - findIndex();<br>
        - splice();<br>
        - map();<br>
        - filter();<br>
        - fetch();<br>
        - async/await;<br>
        - useState;<br>
        - useEffect;<br>
        - estado de edição;<br>
        - props;<br>
        - edição de produtos;<br>
        - exclusão de produtos;<br>
        - reutilização de formulário;<br>
        - respostas HTTP;<br>
        - status 404;<br>
        - atualização dinâmica da interface;<br>
        - integração Front-end e Back-end;<br>
        - separação de responsabilidades;<br>
        - dados temporários em memória.<br><br>
        
        <a href="https://github.com/Luanlhp777/projetoCatalogoV3" target="_blank" class="btn-github">Ver código no Github</a>`
    },
    {
        data: "2026-08-26",
        titulo: "React com JSON + Server",
        conteudo: ` Na aula de hoje trabalhamos com React integrado ao JSON Server, com o objetivo de praticar o consumo de APIs REST sem depender de um Back-end real já pronto.<br><br>

        O projeto utiliza um arquivo chamado db.json como fonte de dados, e o JSON Server transforma esse arquivo em uma API REST simulada. Dessa forma, foi possível desenvolver e testar o Front-end de maneira independente, mantendo uma estrutura parecida com a utilizada em aplicações reais. <br><br>

        As principais tecnologias utilizadas foram:<br><br>

        React | JavaScript | Vite | JSON Server | Fetch API | Node.js | npm | Git | GitHub<br><br>

        O JSON Server foi utilizado como Back-end simulado.<br><br>

        Para iniciar o servidor, utilizamos:<br><br>

        npm run server<br><br>

        A API fica disponível em:<br><br>

        http://localhost:3001<br><br>

        e o endpoint utilizado para trabalhar com as tarefas é:<br><br>

        http://localhost:3001/tarefas<br><br>

        Na primeira etapa da aula, o foco foi o consumo de dados utilizando o método HTTP GET.<br><br>

        A aplicação realiza uma requisição para:<br><br>

        GET /tarefas<br><br>

        e o JSON Server retorna os dados existentes no arquivo db.json em formato JSON.<br><br>

        O fluxo funciona da seguinte forma:<br><br>

        React<br>
        ↓<br>
        tarefaService.js<br>
        ↓<br>
        fetch()<br>
        ↓<br>
        GET /tarefas<br>
        ↓<br>
        JSON Server<br>
        ↓<br>
        db.json<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        React<br>
        ↓<br>
        Interface atualizada<br><br>

        Para realizar as requisições utilizamos a Fetch API através de:<br><br>

        fetch()<br><br>

        Como a comunicação com a API não acontece de forma instantânea, também trabalhamos com programação assíncrona utilizando:<br><br>

        async<br>
        await<br><br>

        Outro conceito importante foi o useState().<br><br>

        O useState() é utilizado para armazenar os dados dentro do componente React.<br><br>

        Um exemplo conceitual é:<br><br>

        const [tarefas, setTarefas] = useState([]);<br><br>

        Inicialmente, tarefas possui um array vazio.<br><br>

        Depois que os dados chegam da API, setTarefas() atualiza o estado e o React renderiza novamente a interface com as informações recebidas.<br><br>

        Também utilizamos useEffect().<br><br>

        O useEffect() permite executar determinada ação quando o componente é carregado.<br><br>

        Nesse projeto, ele é utilizado para buscar as tarefas automaticamente quando a aplicação inicia.<br><br>

        O fluxo é:<br><br>

        Componente carregado<br>
                ↓<br>
        useEffect()<br>
                ↓<br>
        Service<br>
                ↓<br>
        GET /tarefas<br>
                ↓<br>
        JSON Server<br>
                ↓<br>
        Dados recebidos<br>
                ↓<br>
        Estado atualizado<br>
                ↓<br>
        Lista renderizada<br><br>

        Um dos principais conceitos trabalhados foi a criação de uma camada de Service.<br><br>

        Foi utilizado um arquivo como:<br><br>

        tarefaService.js<br><br>

        para concentrar a comunicação com a API.<br><br>

        Assim, em vez de colocar todas as chamadas fetch() diretamente dentro dos componentes, utilizamos a organização:<br><br>

        Componentes React<br>
            ↓<br>
        Service<br>
            ↓<br>
        API<br><br>

        Essa separação melhora a organização do projeto e reduz o acoplamento entre a interface e a fonte dos dados.<br><br>

        Na segunda etapa, o projeto evoluiu para trabalhar com operações de CRUD.<br><br>

        Foram utilizados os métodos:<br><br>

        GET | POST | PATCH | DELETE<br><br>

        As rotas trabalhadas foram:<br><br>

        GET /tarefas<br>
        → listar tarefas<br><br>

        POST /tarefas<br>
        → criar uma nova tarefa<br><br>

        PATCH /tarefas/:id<br>
        → atualizar parcialmente uma tarefa<br><br>

        DELETE /tarefas/:id<br>
        → excluir uma tarefa<br><br>

        Na operação CREATE, utilizamos:<br><br>

        POST /tarefas<br><br>

        O React envia os dados da nova tarefa para o JSON Server e o novo objeto é registrado no arquivo db.json.<br><br>

        Na operação READ, utilizamos:<br><br>

        GET /tarefas<br><br>

        para buscar todas as tarefas cadastradas.<br><br>

        Na operação UPDATE, utilizamos PATCH:<br><br>

        PATCH /tarefas/:id<br><br>

        O PATCH permite alterar apenas alguns campos de um objeto, sem precisar substituir todo o registro.<br><br>

        Na operação DELETE, utilizamos:<br><br>

        DELETE /tarefas/:id<br><br>

        para remover a tarefa correspondente da base simulada.<br><br>

        As operações ficaram organizadas da seguinte maneira:<br><br>

        CREATE → POST<br>
        READ   → GET<br>
        UPDATE → PATCH<br>
        DELETE → DELETE<br><br>

        Outro ponto importante da aula foi compreender a independência entre Front-end e Back-end.<br><br>

        Durante o desenvolvimento, utilizamos:<br><br>

        React<br>
        ↓<br>
        Service<br>
        ↓<br>
        JSON Server<br><br>

        Porém, em uma aplicação real, essa estrutura poderia posteriormente ser substituída por:<br><br>

        React<br>
        ↓<br>
        Service<br>
        ↓<br>
        Back-end real<br>
        ↓<br>
        Banco de Dados<br><br>

        A principal vantagem é que os componentes React não precisam saber exatamente como o Back-end está implementado.<br><br>

        Se futuramente o JSON Server for substituído por uma API desenvolvida em Node.js, por exemplo, grande parte das alterações pode ficar concentrada dentro do Service.<br><br>

        Com isso, a arquitetura fica semelhante a:<br><br>

        Usuário<br>
        ↓<br>
        React<br>
        ↓<br>
        Evento<br>
        ↓<br>
        Service<br>
        ↓<br>
        Fetch API<br>
        ↓<br>
        JSON Server<br>
        ↓<br>
        db.json<br>
        ↓<br>
        Resposta JSON<br>
        ↓<br>
        Atualização do estado<br>
        ↓<br>
        Interface atualizada<br><br>

        Também foi necessário executar duas aplicações separadamente durante o desenvolvimento.<br><br>

        Em um terminal:<br><br>

        npm run server<br><br>

        para iniciar o JSON Server.<br><br>

        Em outro terminal:<br><br>

        npm run dev<br><br>

        para iniciar a aplicação React através do Vite.<br><br>

        Com essa aula, praticamos como consumir e manipular dados de uma API no React, utilizando uma estrutura que se aproxima de aplicações Front-end reais.<br><br>

        Conceitos trabalhados:<br><br>
        - React;<br>
        - JavaScript;<br>
        - Vite;<br>
        - JSON Server;<br>
        - API REST;<br>
        - JSON;<br>
        - db.json;<br>
        - dados mockados;<br>
        - Fetch API;<br>
        - fetch();<br>
        - async/await;<br>
        - useState();<br>
        - useEffect();<br>
        - gerenciamento de estado;<br>
        - renderização de listas;<br>
        - camada Service;<br>
        - separação de responsabilidades;<br>
        - integração Front-end e API;<br>
        - métodos HTTP;<br>
        - GET;<br>
        - POST;<br>
        - PATCH;<br>
        - DELETE;<br>
        - CRUD;<br>
        - endpoints;<br>
        - programação assíncrona;<br>
        - independência entre Front-end e Back-end.<br><br>
        
        <a href="https://github.com/Luanlhp777/reactComJSONServer" target="_blank" class="btn-github">Ver código no Github</a>`
    },
    {
        data: "2026-08-27",
        titulo: "** Em construção **",
        conteudo: ` <br><br>
        
        <a href="" target="_blank" class="btn-github">Ver código no Github</a>`
    },
]