<div align="center">

<!-- Banner com título estilizado -->
<h1 align="center">
🌪️ Projeto <span style="color:#5AB9EA;">Vortex</span>
</h1>

<p>
Sistema de Cadastro, Login e Indicações
</p>

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/status-finalizado-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/SQLite-3.x-003B57?style=for-the-badge&logo=sqlite"/>
  <img src="https://img.shields.io/badge/made%20with-love-ff69b4?style=for-the-badge"/>
</p>

<!-- Banner visual (substitua pelo seu GIF/imagem se quiser) -->
<img src="https://i.imgur.com/0kK6wOa.png" width="600" alt="Banner Vortex"/>

</div>

---

## 💡 Sobre o Projeto

**Vortex** é uma aplicação web completa para **cadastro de usuários, login e sistema de indicações**, desenvolvida como parte do **Desafio Vortex**.

O objetivo é oferecer uma **experiência intuitiva e gamificada**, com **pontuação baseada em indicações** — cada usuário pode indicar novos membros e acumular pontos, incentivando o engajamento e o compartilhamento.

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
- **Insomnia / Postman** → Testes de rotas da API  

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
```bash
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

API (via Insomnia/Postman):

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
A IA foi usada como par de programação, auxiliando a:

Refatorar e otimizar o código

Sugerir boas práticas de organização

Resolver erros e aprimorar o raciocínio técnico

Acelerar o desenvolvimento e aprendizado

💬 A IA foi uma ferramenta de apoio — o raciocínio, decisões e código final são autorais.

📚 Aprendizados:
Durante o desenvolvimento, consolidei conhecimentos em:


Integração entre frontend e backend

Manipulação de banco de dados SQLite

Arquitetura RESTful e boas práticas

- O projeto fortaleceu minha base principalmente em Node.js e desenvolvimento web full stack.

<div align="center">
🌀 Feito com dedicação e sede de aprendizado por
Daniela Aranha💻
</div> ```