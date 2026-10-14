# 📘 Meu Site de Estudos

### Portfólio Acadêmico | Desenvolvimento Web | Back-end | Banco de Dados

Portfólio acadêmico e pessoal desenvolvido para documentar minha evolução na área de **Desenvolvimento de Sistemas**, reunindo estudos, projetos acadêmicos, aplicações práticas e experiências com desenvolvimento de software.

O projeto começou como um diário de estudos, criado para registrar aulas e exercícios do curso técnico. Com o tempo, evoluiu para um portfólio web e, atualmente, está passando por uma nova etapa: **a construção de uma aplicação Full Stack, utilizando Node.js, Express e MySQL**.

O objetivo é aplicar, em um projeto real e contínuo, os conhecimentos adquiridos durante minha formação.

**🌐 Acesse o portfólio:**  
https://luanlhp777.github.io/meu-site-estudos/

> **Nota:** O site publicado no GitHub Pages utiliza a versão atual do Front-end. O Back-end e o banco de dados estão em desenvolvimento e testes locais, ainda sem integração com a versão pública.

---

## 🎯 Objetivo

- Documentar minha evolução acadêmica e profissional em Desenvolvimento de Sistemas.
- Registrar disciplinas, aulas, exercícios e projetos realizados durante a formação.
- Aplicar conceitos de Front-end, Back-end e Banco de Dados.
- Desenvolver uma API REST utilizando Node.js e Express.
- Implementar persistência de dados com MySQL.
- Praticar arquitetura em camadas e organização de código.
- Trabalhar com relacionamentos, consultas SQL e validação de dados.
- Utilizar Git e GitHub para versionamento e documentação.
- Evoluir gradualmente o portfólio para uma aplicação Full Stack.

---

## 💻 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- Design responsivo
- Componentização e organização modular de CSS

### Back-end

- Node.js
- Express.js
- JavaScript com ES Modules
- API REST
- Arquitetura organizada em Models, Controllers e Routes
- Tratamento de erros e respostas HTTP
- Variáveis de ambiente com dotenv
- Nodemon para desenvolvimento

### Banco de Dados

- MySQL
- MySQL2 com suporte a Promises
- Modelagem relacional
- Chaves primárias e estrangeiras
- Relacionamentos 1:N e N:N
- Consultas SQL com JOIN
- Consultas parametrizadas
- Scripts de criação e inserção de dados

### Ferramentas

- Git e GitHub
- Visual Studio Code
- Thunder Client
- MySQL Workbench
- GitHub Pages

**Tecnologias presentes nos estudos e em outros projetos:** React, MongoDB e outras ferramentas relacionadas ao desenvolvimento de software.

---

## 📚 Estrutura do Portfólio

### 📖 Diário de Estudos

Área dedicada ao registro das disciplinas, aulas, conteúdos, códigos e exercícios realizados durante o curso técnico em Desenvolvimento de Sistemas.

As disciplinas são organizadas por módulos, permitindo acompanhar a evolução dos estudos ao longo da formação.

### 💻 Projetos

Seção dedicada aos projetos acadêmicos e às aplicações desenvolvidas durante minha trajetória.

Entre os projetos apresentados estão:

- **Portfólio Acadêmico:** plataforma para documentação dos estudos e apresentação de projetos.
- **Exercícios de JavaScript:** atividades práticas de lógica e programação.
- **LR Engenharia:** projeto de desenvolvimento web relacionado a uma empresa real.
- **Coguis Informática:** plataforma institucional de serviços de informática, soluções digitais e conteúdo técnico.

### 👨‍💻 Sobre Mim

Página dedicada à minha trajetória acadêmica e profissional, conhecimentos técnicos, objetivos e canais de contato.

### 📄 Documentos do Curso

Área para consulta de documentos relacionados à formação, incluindo calendário acadêmico e plano de curso.

---

## ⚙️ Funcionalidades do Front-end

A versão atual do portfólio oferece:

- Organização das disciplinas por módulos.
- Páginas individuais para disciplinas.
- Registro cronológico das aulas.
- Cards expansíveis para visualização de conteúdos.
- Links para códigos e repositórios.
- Apresentação de projetos acadêmicos e práticos.
- Páginas individuais de projetos.
- Menu de navegação responsivo.
- Layout adaptado para desktop e dispositivos móveis.
- Bloco de frases motivacionais na página inicial.
- Estrutura modular de CSS.
- Componentes reutilizáveis de interface.
- Publicação estática pelo GitHub Pages.

---

## 🗄️ Banco de Dados MySQL

O banco de dados foi desenvolvido para permitir que as informações do portfólio sejam armazenadas de forma estruturada, reduzindo gradualmente a dependência de dados cadastrados diretamente nos arquivos JavaScript.

### Estrutura do Banco — V1

O modelo relacional possui oito tabelas:

| Tabela | Responsabilidade |
|---|---|
| `modulos` | Armazenar os módulos acadêmicos |
| `disciplinas` | Armazenar as disciplinas vinculadas aos módulos |
| `aulas` | Registrar as aulas de cada disciplina |
| `materiais` | Armazenar materiais relacionados às aulas |
| `projetos` | Armazenar informações dos projetos |
| `tecnologias` | Cadastrar tecnologias utilizadas |
| `projeto_tecnologia` | Relacionar projetos e tecnologias |
| `usuarios` | Estrutura inicial para usuários e futura autenticação |

### Relacionamentos

- Um módulo pode possuir várias disciplinas.
- Uma disciplina pode possuir várias aulas.
- Uma aula pode possuir vários materiais.
- Um projeto pode utilizar várias tecnologias.
- Uma tecnologia pode estar associada a vários projetos.

O relacionamento entre projetos e tecnologias utiliza uma tabela intermediária, representando uma relação **muitos para muitos (N:N)**.

### Scripts SQL

Os arquivos estão organizados na pasta `database/`:

- `schema.sql` — criação das tabelas, chaves e relacionamentos.
- `seed.sql` — inserção de dados iniciais.
- `queries.sql` — consultas SQL utilizadas para estudos e testes.

A primeira versão do banco foi registrada no Git com a tag **`v1.0.0-db`**.

---

## 🔧 Back-end — API REST

O Back-end está sendo desenvolvido utilizando **Node.js, Express e MySQL2**, com uma estrutura que separa as responsabilidades de acesso aos dados, processamento das requisições e definição das rotas.

### Arquitetura

O projeto utiliza uma organização inspirada no padrão MVC, separando as responsabilidades em três camadas principais:

**Model:** executa consultas e operações no banco de dados.

**Controller:** recebe as requisições, realiza validações, chama o Model e prepara as respostas HTTP.

**Routes:** define os endpoints e associa cada rota ao Controller correspondente.

Fluxo de uma requisição:

`Cliente HTTP → Route → Controller → Model → MySQL`

### Endpoints Implementados

#### Projetos — CRUD completo

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/projetos` | Lista todos os projetos |
| GET | `/api/projetos/:id` | Busca um projeto pelo ID |
| POST | `/api/projetos` | Cadastra um projeto |
| PUT | `/api/projetos/:id` | Atualiza um projeto |
| DELETE | `/api/projetos/:id` | Exclui um projeto |

#### Módulos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/modulos` | Lista todos os módulos |
| GET | `/api/modulos/:id` | Busca um módulo pelo ID |
| GET | `/api/modulos/:id/disciplinas` | Lista as disciplinas de um módulo |

#### Disciplinas

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/api/disciplinas` | Lista todas as disciplinas |
| GET | `/api/disciplinas/:id` | Busca uma disciplina pelo ID |

### Validação e Tratamento de Erros

Os endpoints implementados utilizam códigos HTTP adequados às operações e aos cenários tratados:

- **200 OK:** consulta ou operação realizada com sucesso.
- **201 Created:** recurso cadastrado com sucesso.
- **400 Bad Request:** dados ou parâmetros inválidos.
- **404 Not Found:** recurso não encontrado.
- **409 Conflict:** conflito de dados, como slug duplicado.
- **500 Internal Server Error:** falha interna durante o processamento.

Também foram implementadas consultas SQL parametrizadas, reduzindo os riscos associados à concatenação direta de entradas em comandos SQL.

Os endpoints são testados localmente utilizando o **Thunder Client**.

> **Segurança:** A autenticação e a autorização ainda não foram implementadas. Os endpoints de escrita devem permanecer restritos ao ambiente de desenvolvimento até que os controles de acesso estejam prontos.

---

## 📂 Estrutura do Projeto

Visão simplificada da organização atual:

```text
meu-site-estudos/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── projeto.controller.js
│   │   │   ├── modulo.controller.js
│   │   │   └── disciplina.controller.js
│   │   │
│   │   ├── models/
│   │   │   ├── projeto.model.js
│   │   │   ├── modulo.model.js
│   │   │   └── disciplina.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── projeto.routes.js
│   │   │   ├── modulo.routes.js
│   │   │   └── disciplina.routes.js
│   │   │
│   │   └── app.js
│   │
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── queries.sql
│
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── pages.css
│   └── responsive.css
│
├── js/
│   ├── aulas/
│   ├── layout.js
│   ├── frase-home.js
│   └── render-aulas.js
│
└── README.md
```

*Estrutura resumida: outros arquivos e diretórios do Front-end foram omitidos.*

---

## ▶️ Executando o Back-end Localmente

### Pré-requisitos

- Node.js e npm instalados.
- MySQL instalado e em execução.
- Banco de dados criado a partir dos scripts SQL.
- Dependências do Back-end instaladas.

### 1. Clonar o repositório

```bash
git clone https://github.com/Luanlhp777/meu-site-estudos.git
cd meu-site-estudos
```

### 2. Preparar o banco de dados

Execute os scripts da pasta `database/`, utilizando o MySQL Workbench ou outro cliente compatível.

O arquivo `schema.sql` contém a estrutura do banco, enquanto `seed.sql` contém os registros iniciais.

### 3. Instalar as dependências

```bash
cd backend
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend/` e configure as credenciais do seu ambiente MySQL:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
PORT=3000
```

As configurações devem corresponder ao banco criado no ambiente local.

**Importante:** o arquivo `.env` contém informações sensíveis e não deve ser enviado ao GitHub.

### 5. Iniciar o servidor

```bash
npm run dev
```

Para executar sem o Nodemon:

```bash
npm start
```

Por padrão, o servidor estará disponível em:

`http://localhost:3000`

### 6. Testar a API

Exemplos de endpoints para testar no navegador ou Thunder Client:

```text
GET http://localhost:3000/api/projetos
GET http://localhost:3000/api/modulos
GET http://localhost:3000/api/modulos/1
GET http://localhost:3000/api/disciplinas
GET http://localhost:3000/api/disciplinas/3
GET http://localhost:3000/api/modulos/1/disciplinas
```

Os endpoints de consulta retornam respostas em formato JSON.

---

## 🎨 Organização do CSS

O Front-end utiliza arquivos CSS separados por responsabilidade:

- `base.css` — configurações globais.
- `layout.css` — estrutura das páginas.
- `components.css` — componentes reutilizáveis.
- `pages.css` — estilos específicos das páginas.
- `responsive.css` — adaptação para diferentes dispositivos.

Essa organização facilita a manutenção, a reutilização de estilos e a evolução visual do projeto.

---

## 📈 Evolução do Projeto

### Fase 1 — Portfólio Estático

Criação das páginas iniciais utilizando HTML, CSS e JavaScript.

Implementação da navegação, organização dos estudos, páginas de disciplinas e apresentação de projetos.

### Fase 2 — Organização e Melhorias de Interface

- Modularização dos arquivos CSS.
- Melhorias de responsividade.
- Organização dos scripts JavaScript.
- Criação e evolução das páginas individuais.
- Inclusão de novos projetos.
- Melhorias na apresentação do portfólio.

### Fase 3 — Modelagem e Implementação do Banco de Dados

- Levantamento das entidades necessárias.
- Modelagem das oito tabelas.
- Definição de chaves e relacionamentos.
- Criação dos scripts SQL.
- Inserção de dados iniciais.
- Testes de consultas e relacionamentos.
- Versionamento da primeira estrutura do banco.

### Fase 4 — Desenvolvimento do Back-end

- Configuração do Node.js e Express.
- Conexão com MySQL utilizando MySQL2.
- Organização em Models, Controllers e Routes.
- Implementação do CRUD de projetos.
- Implementação das consultas de módulos.
- Implementação das consultas de disciplinas.
- Consultas com `INNER JOIN`.
- Busca de disciplinas por módulo.
- Validação de parâmetros e tratamento de erros HTTP.
- Testes dos endpoints com Thunder Client.

**Status:** fase em andamento.

---

## 🚀 Próximos Passos

As próximas evoluções planejadas incluem:

- [x] Estruturar o banco de dados MySQL.
- [x] Criar o Back-end com Node.js e Express.
- [x] Implementar o CRUD de projetos.
- [x] Implementar consultas de módulos.
- [x] Implementar consultas de disciplinas.
- [x] Relacionar módulos e disciplinas por meio de JOIN.
- [x] Implementar validações iniciais e tratamento de erros.
- [ ] Desenvolver os endpoints de aulas.
- [ ] Implementar consultas de aulas por disciplina.
- [ ] Desenvolver os endpoints de materiais.
- [ ] Implementar consultas de projetos com suas tecnologias.
- [ ] Ampliar os recursos de gerenciamento de conteúdo.
- [ ] Implementar autenticação e autorização.
- [ ] Integrar o Front-end com a API REST.
- [ ] Substituir gradualmente os dados estáticos por consultas ao banco.
- [ ] Avaliar a evolução do Front-end para React.
- [ ] Melhorar acessibilidade, performance e SEO.
- [ ] Preparar a implantação segura do Back-end e do banco de dados.

O objetivo é transformar gradualmente o portfólio em uma plataforma dinâmica, mantendo sua finalidade principal: **documentar e demonstrar minha evolução em desenvolvimento de software**.

---

## 🆕 Atualizações Recentes — Outubro/2026

- Implementação da estrutura inicial do banco de dados relacional.
- Organização dos scripts SQL de criação, inserção e consultas.
- Configuração do Back-end utilizando Node.js e Express.
- Implementação da conexão com MySQL.
- Desenvolvimento do CRUD completo de projetos.
- Criação dos endpoints de módulos.
- Criação dos endpoints de disciplinas.
- Implementação de consultas com `INNER JOIN`.
- Desenvolvimento da consulta de disciplinas por módulo.
- Implementação de validações para identificadores.
- Tratamento de respostas HTTP 400, 404 e 500.
- Testes de integração local utilizando Thunder Client.
- Versionamento das funcionalidades com Git e GitHub.

---

## 🌱 Status do Projeto

**Em desenvolvimento contínuo**

O Front-end está publicado no GitHub Pages, enquanto o Back-end e o banco de dados estão sendo desenvolvidos e testados localmente.

A evolução do projeto acompanha meus estudos e a aplicação prática dos conceitos de desenvolvimento de sistemas.

---

## 👨‍💻 Autor

**Luan Araujo**

Graduado em **Análise e Desenvolvimento de Sistemas** e estudante do curso Técnico em **Desenvolvimento de Sistemas**.

Interesse em desenvolvimento Front-end, Back-end, bancos de dados e arquitetura de aplicações, com foco na evolução profissional para desenvolvimento **Full Stack**.

**GitHub:** https://github.com/Luanlhp777

**Portfólio:** https://luanlhp777.github.io/meu-site-estudos/

*Aprendizado contínuo por meio de estudos, projetos acadêmicos e experiências práticas em tecnologia.*