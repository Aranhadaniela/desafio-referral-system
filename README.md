<div align="center">


<h1 align="center">
 Projeto Vortex
</h1>

<p>
Sistema de Cadastro, Login e Indicações
</p>


<p>
  
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite"/>
 
</p>


</div>

---

## 💡 Sobre o Projeto

Este projeto é uma aplicação web de cadastro, login e sistema de indicação de usuários, desenvolvida como parte do desafio  técnico Vortex. O objetivo é proporcionar uma experiência completa de autenticação, validação de dados e gamificação por meio de um sistema de pontuação por indicações.

---

## ⚙️ Funcionalidades

✅ **Cadastro de Usuário:**  
Validação de e-mail, senha forte e bloqueio de cadastros duplicados.  

✅ **Login com JWT:**  
Autenticação segura via token JWT.  

✅ **Sistema de Indicações:**  
Cada usuário recebe um **código único**, e o indicante ganha pontos a cada novo cadastro com seu código.  

✅ **Perfil do Usuário:**  
Exibição de nome, pontuação e código de indicação.  

✅ **Validação Completa:**  
Frontend e backend validam e tratam dados.  

✅ **Banco de Dados Persistente:**  
Com **SQLite**, simples e eficiente.  

✅ **Interface Intuitiva:**  
Construída com **HTML, CSS e JavaScript puro**.

---

## 🛠️ Tecnologias Utilizadas

### 🧩 Backend
- **Node.js** → Plataforma de execução no servidor  
- **Express** → Criação de rotas e APIs RESTful  
- **SQLite3** → Banco de dados leve e integrado  
- **Nodemon** → Reinício automático em alterações  
- **CORS** → Comunicação entre frontend e backend  
- **Insomnia** → Testes de rotas da API  

### 🎨 Frontend
- **HTML** → Estrutura das páginas  
- **CSS** → Estilização e responsividade  
- **JavaScript** → Lógica e integração com API  

> 💬 **Decisão técnica:** O uso de JavaScript puro reforça a base da linguagem e mantém o foco no aprendizado fundamental sem dependência de frameworks.

---

## ▶️ Execução do Projeto

### 1️⃣ Pré-requisitos

Instale:
- [Node.js (LTS)](https://nodejs.org/)
  
- npm (vem com o Node.js)
  
- Git

Verifique:

node -v
npm -v
git --version
2️⃣ Clonar o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
3️⃣ Instalar Dependências
bash
Copiar código
npm install
4️⃣ Configurar o Banco de Dados
O projeto usa SQLite:

Se database.db existir, será reutilizado

Caso contrário, será criado automaticamente na primeira execução

5️⃣ Iniciar o Servidor
bash
Copiar código
npm start
ou

bash
Copiar código
node server.js
Acesse:
👉 http://localhost:3000

6️⃣ Testar a Aplicação
Frontend:
Abra index.html no navegador.

API (via Insomnia):

http
Copiar código
POST http://localhost:3000/auth/register   → Cadastrar usuário
POST http://localhost:3000/auth/login      → Login e JWT
GET  http://localhost:3000/profile         → Perfil do usuário autenticado
🔗 Rotas Principais da API
Endpoint	Método	Descrição
/auth/register	POST	Cadastra um novo usuário
/auth/login	POST	Realiza login e retorna JWT
/profile	GET	Retorna dados do perfil (JWT necessário)

🤖 Colaboração com IA
A IA foi usada como ferramenta de apoio, auxiliando a:
Desenvolvimento do Back End

Refatorar e otimizar o código

Sugerir boas práticas de organização

Resolver erros e aprimorar o raciocínio técnico

Acelerar o desenvolvimento e aprendizado da parte de Back End


-Costumo utilizar a IA como se fosse um guia nos meus estudos,principalmente porque a maioria das coisas que aprendo é 
por meio de pesquisas independentes,que são autodidatas.

📚 Aprendizados:
Durante o desenvolvimento, consolidei conhecimentos em:


  Integração entre frontend e backend

  Manipulação de banco de dados SQLite

  Boas práticas


- O projeto fortaleceu minha base principalmente em Node.js e desenvolvimento web full stack,juntando o front-end,que é uma área que tenho mais familiaridade( até o momento) com o Back-End. A partir disso,consegui subir mais um degrau no meu caminho para me tornar uma des. full-stack😊


🌀 Feito com dedicação e sede de aprendizado por:

<h1 align="center"><strong>Daniela Aranha</strong>
</h1> ```
