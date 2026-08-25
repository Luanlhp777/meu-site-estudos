const aulasDesenvolvimento = [
    {
        data: "2026-07-31",
        titulo: "Cadastro de Veiculos",
        conteudo: ` Na aula de hoje desenvolvemos um projeto de Cadastro de Veículos utilizando HTML, CSS e JavaScript, com foco principal em objetos e manipulação do DOM.<br><br>

        Inicialmente, revisamos o conceito de objeto em JavaScript, entendendo que ele armazena informações no formato chave: valor. Também praticamos diferentes formas de acessar propriedades, utilizando notação de ponto, colchetes e chaves dinâmicas armazenadas em variáveis. Além disso, utilizamos o operador delete para remover propriedades de um objeto.<br><br>

        Na aplicação principal, criamos um formulário para cadastrar:<br>
        - marca;<br>
        - modelo;<br>
        - ano;<br>
        - cor.<br><br>

        Os elementos da página foram capturados com document.getElementById(), permitindo que o JavaScript lesse os valores digitados pelo usuário e manipulasse dinamicamente a interface.<br><br>

        Também utilizamos addEventListener() para executar a lógica quando o botão de cadastro fosse clicado. Antes de criar o veículo, o sistema realiza uma validação para verificar se todos os campos foram preenchidos. Caso algum campo esteja vazio, uma mensagem de erro é exibida e o return interrompe a execução da função.<br><br>

        Quando os dados são válidos, criamos um objeto veiculo contendo as informações informadas no formulário. O ano é convertido de texto para número utilizando Number().<br><br>

        Depois da criação do objeto, seus dados são exibidos dinamicamente em um card através de propriedades como innerText e innerHTML. Também utilizamos template literals para combinar marca e modelo no título do veículo.<br><br>

        O card permanece oculto inicialmente e é exibido somente após um cadastro válido utilizando classList.remove(), reforçando a integração entre JavaScript e CSS.<br><br>

        Durante o desenvolvimento também trabalhamos com estilização e organização da interface utilizando CSS Grid, responsividade, efeitos de foco nos inputs, hover no botão e um layout visual dividido entre formulário e card de resultado.<br><br>

        A aula reforçou conceitos importantes como:<br>
        - objetos JavaScript;<br>
        - propriedades e estrutura chave: valor;<br>
        - notação de ponto e colchetes;<br>
        - chaves dinâmicas;<br>
        - operador delete;<br>
        - manipulação do DOM;<br>
        - getElementById();<br>
        - addEventListener();<br>
        - validação de formulários;<br>
        - Number();<br>
        - innerText e innerHTML;<br>
        - template literals;<br>
        - classList;<br>
        - integração entre HTML, CSS e JavaScript.<br><br>
    
        <a href="https://github.com/Luanlhp777/cadastroVeiculos" target="_blank" class="btn-github">Ver código no GitHub</a>`
    },
    {
        data: "2026-08-05",
        titulo: "Introdução ao BackEnd",
        conteudo: ` Na aula de hoje iniciamos os estudos de desenvolvimento Back-end utilizando Node.js e Express, com foco na criação de um servidor HTTP, definição de rotas e compreensão da comunicação entre cliente e servidor.<br><br>

        Inicialmente, criamos a estrutura básica do servidor utilizando o Express. O projeto importa a biblioteca com require('express'), cria uma aplicação com express() e define uma porta para execução do servidor. Em seguida, utilizamos app.listen() para iniciar o servidor e deixá-lo disponível para receber requisições.<br><br>

        Também configuramos o middleware express.json(), responsável por permitir que o servidor interprete dados enviados no formato JSON. Com isso, informações enviadas pelo cliente podem ser acessadas através de req.body.<br><br>

        Durante a aula, estudamos os dois principais objetos presentes em uma rota do Express:<br><br>

        - req: representa a requisição enviada pelo cliente;<br>
        - res: representa a resposta que o servidor envia de volta.<br><br>

        Foram apresentados os principais métodos HTTP e sua relação com as operações CRUD:<br><br>

        - GET → consultar dados;<br>
        - POST → criar ou enviar novos dados;<br>
        - PUT → atualizar ou substituir um recurso;<br>
        - DELETE → remover um recurso.<br><br>

        No método GET, criamos uma rota /usuario para simular uma consulta de usuários. O servidor responde utilizando res.status().json(), retornando uma mensagem em formato JSON.<br><br>

        Também criamos uma rota POST para /usuario. Nesse caso, os dados enviados pelo cliente são recebidos através de req.body e retornados juntamente com uma mensagem de confirmação. Para a criação de um recurso, utilizamos o código HTTP 201.<br><br>

        A aula também introduziu códigos de status HTTP, destacando:<br>
        - 200: requisição realizada com sucesso;<br>
        - 201: recurso criado com sucesso.<br><br>

        Outro exercício realizado foi o início de uma rota de login utilizando POST. Nessa rota, utilizamos desestruturação de objetos para retirar email e senha diretamente de req.body, utilizando:<br><br>

        const { email, senha } = req.body;<br><br>

        Essa abordagem simplifica o acesso às propriedades recebidas pelo servidor.<br><br>

        Também estudamos o padrão utilizado para criação das rotas no Express:<br><br>

        app.metodo('/rota', (req, res) => {<br>
            // processamento<br>
        });<br><br>

        Dessa forma, o Express identifica o método HTTP utilizado, a rota acessada e executa a função correspondente.<br><br>

        O projeto também utiliza Nodemon, ferramenta responsável por reiniciar automaticamente o servidor quando alterações são realizadas no código. Para executar o projeto utilizamos:<br><br>

        npm run dev<br><br>

        e para encerrar o servidor:<br><br>

        Ctrl + C<br><br>

        Além disso, configuramos o arquivo .gitignore para impedir o envio da pasta node_modules para o GitHub. As dependências do projeto ficam registradas nos arquivos package.json e package-lock.json e podem ser instaladas novamente utilizando npm install.

        A aula permitiu compreender o fluxo básico de uma aplicação Back-end:<br><br>

        Cliente<br>
        → Requisição HTTP<br>
        → Node.js<br>
        → Express<br>
        → Rota<br>
        → Processamento<br>
        → Resposta HTTP<br>
        → Cliente<br><br>

        Conceitos trabalhados:<br>
        - desenvolvimento Back-end;<br>
        - Node.js;<br>
        - Express;<br>
        - servidor HTTP;<br>
        - rotas;<br>
        - GET;<br>
        - POST;<br>
        - PUT;<br>
        - DELETE;<br>
        - CRUD;<br>
        - req e res;<br>
        - req.body;<br>
        - JSON;<br>
        - express.json();<br>
        - middleware;<br>
        - códigos de status HTTP;<br>
        - desestruturação de objetos;<br>
        - Nodemon;<br>
        - npm;<br>
        - .gitignore;<br>
        - estrutura inicial de uma API REST.<br><br>
        <br><br>
    
        <a href="https://github.com/Luanlhp777/backEndNodeExpress" target="_blank" class="btn-github">Ver código no GitHub</a>`
    },
    {
        data: "2026-08-07",
        titulo: "Códigos de Status HTTP com Node.js e Express",
        conteudo: ` Na aula de hoje demos continuidade aos estudos de Back-end com Node.js e Express, trabalhando principalmente com códigos de status HTTP e a forma como o servidor deve responder a diferentes situações durante uma requisição.<br><br>

        O projeto utiliza Express para criar o servidor, define a porta 3000 e configura o middleware express.json(), permitindo que dados enviados no corpo das requisições sejam interpretados em formato JSON. <br><br>

        Inicialmente, trabalhamos com o código HTTP 200, que representa uma requisição realizada com sucesso. Na rota GET /usuarios, o servidor retorna status 200 juntamente com uma mensagem informando que a lista de usuários foi retornada com sucesso.<br><br>

        Também utilizamos o código 201 na rota POST /usuarios. Esse status indica que um novo recurso foi criado com sucesso. O usuário enviado através de req.body é armazenado em uma variável e devolvido na resposta juntamente com a mensagem de confirmação. <br><br>

        Na rota POST /login, estudamos o código 400, utilizado quando existe um problema na requisição enviada pelo cliente. Os campos email e senha são obtidos através da desestruturação de req.body.<br><br>

        Foi criada uma validação utilizando:<br><br>

        if (!email || !senha)<br><br>

        Caso algum desses dados não seja informado, o servidor interrompe a execução com return e responde com status 400 e a mensagem “E-mail e senha são obrigatórios.”. Caso os campos estejam presentes, a rota retorna status 200 indicando que o login foi realizado.<br><br>

        Também iniciamos o estudo do status 401, relacionado à autenticação. Na rota GET /perfil, o servidor tenta obter um token através do header authorization:<br><br>

        req.headers.authorization<br><br>

        Se o token não existir, o servidor retorna status 401 com uma mensagem informando que o token não foi fornecido. Caso exista, a requisição recebe status 200 e o perfil é considerado acessado. <br><br>

        Além dos códigos já implementados, o arquivo possui rotas preparadas para continuar o estudo de outros códigos HTTP:<br><br>

        - 403: relacionado à falta de permissão para acessar determinado recurso;
        - 404: utilizado quando um recurso não é encontrado;
        - 500: representa erro interno do servidor;
        - 422: utilizado quando a requisição possui dados que não podem ser processados conforme as regras da aplicação.<br><br>

        Essas rotas ainda aparecem sem implementação completa no código, servindo como estrutura para a continuidade dos exercícios. <br><br>

        A aula mostrou que uma API não deve retornar apenas dados, mas também informar corretamente o resultado de cada requisição através dos códigos de status HTTP. Isso permite que aplicações Front-end, aplicativos mobile ou outros sistemas saibam se uma operação foi concluída, rejeitada ou apresentou algum erro.<br><br>

        Também reforçamos o uso de:<br><br>

        res.status().json()<br><br>

        Essa estrutura permite definir o código HTTP da resposta e enviar informações em formato JSON ao cliente.<br><br>

        Conceitos trabalhados:<br><br>
        - Node.js;<br>
        - Express;<br>
        - servidor HTTP;<br>
        - API;<br>
        - rotas;<br>
        - req e res;<br>
        - req.body;<br>
        - req.headers;<br>
        - authorization;<br>
        - express.json();<br>
        - JSON;<br>
        - res.status();<br>
        - res.json();<br>
        - validação de dados;<br>
        - return em rotas;<br>
        - códigos de status HTTP;<br>
        - 200 OK;<br>
        - 201 Created;<br>
        - 400 Bad Request;<br>
        - 401 Unauthorized;<br>
        - 403 Forbidden;<br>
        - 404 Not Found;<br>
        - 422 Unprocessable Entity;<br>
        - 500 Internal Server Error.<br><br>
        
    
        <a href="https://github.com/Luanlhp777/codigoStatusHTTP" target="_blank" class="btn-github">Ver código no GitHub</a>`
    },
    {
        data: "2026-08-12",
        titulo: "Catálogo de Produtos com Node.js e Express",
        conteudo: ` Na aula de hoje avançamos no desenvolvimento Back-end com Node.js e Express, começando a organizar a aplicação em uma estrutura mais próxima de um projeto real, separando responsabilidades em arquivos e pastas diferentes.<br><br>

        O projeto foi organizado dentro da pasta src, contendo:<br><br>
        - app.js;<br>
        - controllers;<br>
        - data;<br>
        - routes.<br><br>

        Essa separação permite deixar o código mais organizado, facilitando manutenção, leitura e crescimento da aplicação. <br><br>

        No arquivo app.js, configuramos o Express e definimos a porta 3000. Também utilizamos express.json() para permitir que o servidor receba dados em formato JSON enviados pelo front-end.<br><br>

        Depois, importamos as rotas de produtos e utilizamos:<br><br>

        app.use("/api/produtos", produtoRoutes);<br><br>

        Com isso, todas as rotas definidas em produtoRoutes passam a utilizar como endereço inicial /api/produtos. O servidor é iniciado através de app.listen(). <br><br>

        Na pasta routes, criamos o arquivo produtoRoutes.js. Nesse arquivo utilizamos express.Router() para criar um roteador separado para os produtos.<br><br>

        Foram definidas duas rotas principais:<br><br>

        GET /api/produtos<br>
        → lista os produtos cadastrados.<br><br>

        POST /api/produtos<br>
        → cadastra um novo produto.<br><br>

        As rotas não possuem toda a lógica diretamente dentro delas. Em vez disso, chamam funções que ficam no controller. Isso ajuda a manter cada arquivo com uma responsabilidade específica. <br><br>

        Na pasta controllers, criamos o arquivo produtoController.js, responsável pela lógica das operações relacionadas aos produtos.<br><br>

        A função listarProdutos() simplesmente retorna o array de produtos utilizando:<br><br>

        res.json(produtos);<br><br>

        Já a função cadastrarProduto() recebe os dados enviados pelo cliente através de req.body e utiliza desestruturação para obter:<br><br>

        - nome;<br>
        - descricao;<br>
        - preco.<br><br>

        Também foi implementada uma validação. Caso o nome não seja informado ou o preço esteja ausente, a API retorna status 400 com a mensagem “Nome e preço são obrigatórios.”. <br><br>

        Quando os dados são válidos, um novo objeto de produto é criado.<br><br>

        O id é gerado automaticamente utilizando o último produto existente no array e adicionando 1. Caso o array esteja vazio, o primeiro id será 1.<br><br>

        A descrição é opcional. Caso não seja informada, é armazenada como uma String vazia.<br><br>

        O preço é convertido utilizando Number(), garantindo que seja armazenado como valor numérico.<br><br>

        Depois disso, utilizamos:<br><br>

        produtos.push(novoProduto);<br><br>

        para inserir o novo produto no array.<br><br>

        Por fim, o servidor retorna o status HTTP 201 juntamente com o produto criado. <br><br>

        Na pasta data, criamos o arquivo produtos.js, que funciona como uma fonte temporária de dados.<br><br>

        Inicialmente, o array possui três produtos:<br><br>
        - Notebook;<br>
        - Mouse;<br>
        - Teclado.<br><br>

        Cada produto possui id, nome, descrição e preço.<br><br>

        Esses dados ficam somente na memória da aplicação. Portanto, quando o servidor é reiniciado, novos produtos adicionados durante a execução são perdidos. Ainda não existe persistência em banco de dados nesse projeto. <br><br>

        O fluxo da aplicação ficou organizado da seguinte maneira:<br><br>

        Cliente<br>
        → Requisição HTTP<br>
        → app.js<br>
        → produtoRoutes.js<br>
        → produtoController.js<br>
        → produtos.js<br>
        → Controller prepara a resposta<br>
        → Resposta HTTP<br>
        → Cliente<br><br>

        Essa estrutura mostrou na prática a importância da separação de responsabilidades no Back-end.<br><br>

        O app.js fica responsável pela configuração geral do servidor.<br><br>

        As routes definem quais URLs e métodos HTTP estarão disponíveis.<br><br>

        Os controllers possuem a lógica de processamento das requisições.<br><br>

        A pasta data mantém, neste momento, os dados utilizados pela aplicação.<br><br>

        Também reforçamos conceitos de API REST, utilizando métodos HTTP diferentes sobre o mesmo recurso:<br><br>

        GET /api/produtos<br>
        → consultar produtos.<br><br>

        POST /api/produtos<br>
        → cadastrar produto.<br><br>

        A aula representa uma evolução importante em relação aos primeiros servidores Express, pois começamos a deixar de concentrar toda a lógica em um único arquivo e passamos a trabalhar com uma arquitetura modular.<br><br>

        Conceitos trabalhados:<br><br>
        - Node.js;<br>
        - Express;<br>
        - API REST;<br>
        - modularização;<br>
        - separação de responsabilidades;<br>
        - estrutura de pastas;<br>
        - app.js;<br>
        - routes;<br>
        - controllers;<br>
        - camada de dados;<br>
        - express.Router();<br>
        - app.use();<br>
        - express.json();<br>
        - GET;<br>
        - POST;<br>
        - req.body;<br>
        - desestruturação de objetos;<br>
        - validação de dados;<br>
        - status HTTP 400;<br>
        - status HTTP 201;<br>
        - res.json();<br>
        - arrays de objetos;<br>
        - push();<br>
        - geração automática de id;<br>
        - Number();<br>
        - module.exports;<br>
        - require();<br>
        - dados temporários em memória;<br>
        - preparação para futura integração com banco de dados.<br><br>
        
        <a href="https://github.com/Luanlhp777/backend" target="_blank" class="btn-github">Ver código no GitHub</a>`
    },
    {
        data: "2026-08-14",
        titulo: "Projeto Integrado - Catálogo de Produtos",
        conteudo: ` Na aula de hoje demos continuidade ao Projeto Integrador — Catálogo de Produtos, trabalhando na evolução da aplicação Full Stack que reúne o Front-end em React e o Back-end em Node.js com Express.<br><br>

        A atividade proposta envolve as disciplinas de Programação Web II e Desenvolvimento de Sistemas I, justamente para reforçar a integração entre as duas partes do sistema. No Front-end, o foco está no React; no Back-end, em Node.js e Express; e a comunicação entre os dois ocorre através de uma API REST. <br><br>

        No Front-end, a atividade pede quatro evoluções principais.<br><br>

        A primeira é a criação de um contador de produtos. A aplicação deve mostrar quantos produtos estão cadastrados e esse valor precisa ser atualizado automaticamente sempre que a lista de produtos sofrer alguma alteração.<br><br>

        A segunda evolução é a validação do formulário. O sistema não deve permitir o cadastro de um produto sem nome e também não deve aceitar preço igual ou menor que zero. Além de impedir o cadastro inválido, a aplicação deve exibir uma mensagem adequada para informar o usuário sobre o problema.<br><br>

        A terceira funcionalidade é a busca de produtos. Deve ser criado um campo de pesquisa que permita filtrar os produtos pelo nome. Dessa forma, conforme a busca for realizada, apenas os produtos correspondentes ao texto pesquisado deverão aparecer na interface.<br><br>

        A quarta parte envolve melhorias visuais e de organização. A atividade pede a criação de um componente Footer, melhorias no CSS e a manutenção de uma interface organizada e responsiva.<br><br>

        No Back-end, também devemos continuar evoluindo a API desenvolvida com Node.js e Express. As novas funcionalidades devem seguir a estrutura organizada estudada anteriormente, mantendo a separação entre rotas, Controller e API REST. <br><br>

        Essa organização reforça o fluxo da aplicação:<br><br>

        Usuário<br>
        ↓<br>
        Front-end React<br>
        ↓<br>
        Requisição HTTP<br>
        ↓<br>
        API REST<br>
        ↓<br>
        Rotas<br>
        ↓<br>
        Controller<br>
        ↓<br>
        Processamento no Back-end<br>
        ↓<br>
        Resposta HTTP/JSON<br>
        ↓<br>
        Front-end<br>
        ↓<br>
        Interface atualizada<br><br>

        A atividade também reforça que o projeto precisa continuar funcionando de forma integrada. Ou seja, não basta desenvolver separadamente o React e o Node.js: o Front-end precisa se comunicar corretamente com o Back-end para que as funcionalidades do catálogo funcionem como um único sistema.<br><br>

        O objetivo da atividade é compreender melhor o funcionamento das duas partes de uma aplicação Full Stack e aprender a evoluir o projeto sem quebrar a integração já existente.<br><br>

        Ao final, o projeto deverá ser demonstrado funcionando em sala. Não será necessário entregar PDF ou relatório, pois a avaliação está concentrada no funcionamento e na evolução prática do sistema.<br><br>

        Funcionalidades propostas na atividade:<br><br>
        - contador de produtos;<br>
        - atualização automática do contador;<br>
        - validação do formulário;<br>
        - bloqueio de produto sem nome;<br>
        - bloqueio de preço igual ou menor que zero;<br>
        - mensagens de validação para o usuário;<br>
        - campo de busca;<br>
        - filtro de produtos pelo nome;<br>
        - componente Footer;<br>
        - melhorias no CSS;<br>
        - interface responsiva;<br>
        - evolução da API;<br>
        - manutenção de rotas e Controller;<br>
        - integração entre React e Node.js/Express.<br><br>

        Conceitos trabalhados:<br><br>
        - desenvolvimento Full Stack;<br>
        - React;<br>
        - Node.js;<br>
        - Express;<br>
        - API REST;<br>
        - integração Front-end e Back-end;<br>
        - requisições HTTP;<br>
        - respostas JSON;<br>
        - componentes;<br>
        - formulários;<br>
        - validação de dados;<br>
        - filtragem de informações;<br>
        - estado da aplicação;<br>
        - atualização dinâmica da interface;<br>
        - responsividade;<br>
        - CSS;<br>
        - rotas;<br>
        - Controller;<br>
        - separação de responsabilidades;<br>
        - evolução incremental de software.<br><br>
        
        
        <a href="https://github.com/Luanlhp777/projetoCatalogo" target="_blank" class="btn-github">Ver código no GitHub</a>`
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
        data: "2026-08-21",
        titulo: "Projeto Integrado - Catálogo de Produtos v3",
        conteudo: ` Na aula de hoje demos continuidade ao Projeto Catálogo de Produtos, trabalhando na Parte 3 da aplicação Full Stack e completando as operações de alteração e exclusão de produtos tanto no Back-end quanto no Front-end.<br><br>

        Com essa evolução, o projeto passou a trabalhar com as quatro operações principais de um CRUD:<br><br>

        CREATE → POST<br>
        READ → GET<br>
        UPDATE → PUT<br>
        DELETE → DELETE<br><br>

        No Back-end, mantivemos as funções já existentes para listar e cadastrar produtos e criamos a função alterarProduto(). Nessa operação, o ID do produto é recebido pela URL através de req.params.id.<br><br>

        Depois, utilizamos find() para localizar o produto correspondente dentro do vetor.<br><br>

        Caso o produto não seja encontrado, o servidor retorna status HTTP 404.<br><br>

        Se o produto existir, os dados de nome, descrição e preço são atualizados, mantendo também as validações já existentes para nome e preço.<br><br>

        Também criamos a função excluirProduto().<br><br>

        Para excluir um produto, utilizamos findIndex() para encontrar sua posição dentro do vetor e depois splice() para removê-lo.<br><br>

        As novas funções alterarProduto() e excluirProduto() também foram adicionadas ao module.exports para que possam ser utilizadas pelas rotas da aplicação. <br><br>

        No arquivo produtoRoutes.js, mantivemos as rotas:<br><br>

        GET /<br>
        POST /<br><br>

        e adicionamos:<br><br>

        PUT /:id<br>
        DELETE /:id<br><br>

        A rota PUT é utilizada para atualizar um produto existente, enquanto DELETE é utilizada para excluir um produto.<br><br>

        No Front-end, criamos o estado produtoEmEdicao, responsável por armazenar o produto selecionado pelo usuário para alteração.<br><br>

        Também foi criada uma função alterarProduto(), que envia os novos dados para o Back-end utilizando fetch() com o método PUT.<br><br>

        O ID do produto é incluído na URL da API.<br><br>

        Depois que o Back-end retorna o produto atualizado, utilizamos map() para percorrer o estado atual e substituir somente o produto que foi alterado.<br><br>

        Também foi criada a função excluirProduto(), que utiliza fetch() com o método DELETE.<br><br>

        Após a exclusão ser confirmada pelo Back-end, utilizamos filter() para gerar uma nova lista sem o produto removido.<br><br>

        Caso o produto excluído esteja sendo editado naquele momento, o estado produtoEmEdicao também é limpo.<br><br>

        O componente FormProduto passou a receber novas props relacionadas à edição.<br><br>

        Foi adicionada a prop produtoEmEdicao e a função aoAlterar.<br><br>

        Também utilizamos useEffect() para detectar quando um produto é selecionado para edição e preencher automaticamente os campos do formulário com seus dados.<br><br>

        Com isso, o mesmo formulário passou a funcionar de duas formas:<br><br>

        - cadastro de novo produto;<br>
        - alteração de produto existente.<br><br>

        Também foi criada uma opção para cancelar a edição e limpar novamente o formulário.<br><br>

        O texto do botão também muda dependendo do modo atual da aplicação.<br><br>

        As validações de nome e preço continuaram sendo utilizadas normalmente.<br><br>

        O componente ListaProdutos também foi atualizado para receber as funções aoEditar e aoExcluir.<br><br>

        Essas funções são repassadas para cada componente Produto.<br><br>

        No componente Produto foram adicionados dois novos botões:<br><br>

        - Editar;<br>
        - Excluir.<br><br>

        O botão Editar envia o produto selecionado para o formulário.<br><br>

        O botão Excluir envia o ID do produto para a função responsável pela remoção.<br><br>

        Também foram adicionados novos estilos no CSS para os botões de ação e para o modo de edição do formulário, mantendo o tema visual e a responsividade da aplicação.<br><br>

        Ao final da aula, o sistema passou a permitir:<br><br>

        - listar produtos;<br>
        - cadastrar produtos;<br>
        - buscar produtos;<br>
        - validar o formulário;<br>
        - alterar produtos;<br>
        - excluir produtos.<br><br>

        O fluxo de edição ficou:<br><br>

        Usuário<br>
        → escolhe um produto<br>
        → clica em Editar<br>
        → produto é armazenado em produtoEmEdicao<br>
        → formulário é preenchido<br>
        → usuário altera os dados<br>
        → fetch() com PUT<br>
        → Back-end atualiza o produto<br>
        → resposta retorna ao React<br>
        → map() atualiza o estado<br>
        → interface é atualizada<br><br>

        Já a exclusão funciona assim:<br><br>

        Usuário<br>
        → clica em Excluir<br>
        → fetch() com DELETE<br>
        → Back-end remove o produto<br>
        → Front-end recebe a confirmação<br>
        → filter() remove o item do estado<br>
        → lista é atualizada<br><br>

        Com essa etapa, o Projeto Catálogo de Produtos passou a possuir um CRUD completo integrado entre React, Node.js e Express.<br><br>

        Os dados ainda continuam armazenados apenas em memória, portanto são perdidos quando o servidor é reiniciado. A persistência definitiva ainda será trabalhada em uma etapa posterior. <br><br>

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
        - useState;<br>
        - useEffect;<br>
        - props;<br>
        - estado de edição;<br>
        - alteração de dados;<br>
        - exclusão de dados;<br>
        - status HTTP 404;<br>
        - atualização dinâmica da interface;<br>
        - integração Front-end e Back-end;<br>
        - dados temporários em memória.<br><br>
        
        <a href="https://github.com/Luanlhp777/projetoCatalogoV3" target="_blank" class="btn-github">Ver código no Github</a>`
    },
]