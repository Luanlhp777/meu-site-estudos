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
]