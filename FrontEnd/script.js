const API_URL = "http://localhost:3000";
const app = document.getElementById("app");

// Páginas
const pages = {
  home: `
    <div class="container">
      <div class="typing-container">
        <h1>Olá!</h1><br>
        <h1>Seja bem-vindo!</h1><br>
      </div>
      <div class="botoes">
        <button onclick="navigate('cadastro')">Quero me cadastrar</button>
        <button onclick="navigate('login')">Já possuo uma conta</button>
      </div>
      <details>
        <summary><u>Quem somos nós?</u></summary>
        O VORTEX é um laboratório de pesquisa, desenvolvimento e inovação em tecnologia da informação da Universidade de Fortaleza (UNIFOR).
        <details>
          <summary><u>Por que eu devo fazer uma conta Vortex?</u></summary>
          Com a criação de uma conta Vortex você participa do sistema de pontuação: cada vez que indicar nosso site com seu link exclusivo, você ganha pontos!
        </details>
      </details>
    </div>
  `,

  cadastro: `
    <form id="register">
      <h2>Cadastre-se</h2>
      <input type="text" id="name" placeholder="Nome" required/>
      <input type="email" id="email" placeholder="Email" required/>
      <input type="password" id="password" placeholder="Senha (mínimo de 8 caracteres)" required/>
      <input type="text" id="ref" placeholder="Código de indicação (opcional)"/>
      <button type="submit">Cadastrar</button>
    </form>
    <br>
    <button onclick="navigate('home')">🏠Home</button>
  `,

  login: `
    <form id="login">
      <h2>Login</h2>
      <input type="email" id="loginEmail" placeholder="Email" required/>
      <input type="password" id="loginPassword" placeholder="Senha" required/>
      <button type="submit">Entrar</button>
    </form>
    <br>
    <button onclick="navigate('home')">🏠Home</button>
  `,

  profile: `
    <div class="profile-header">
      <h1>Meu Perfil</h1>
      <button onclick="logout()" class="logout-btn">🚪 Sair</button>
    </div>
    <div id="profile">
      <p><strong><span id="userName"></span></strong></p>
      <p><strong>Pontuação:</strong> <span id="userPoints"></span></p>
      <p>
        <strong>Link de Indicação:</strong>
        <input type="text" id="refLink" readonly>
        <button onclick="copyLink()">Copiar Link</button>
      </p>
      <details>
        <summary><u>O que é minha pontuação?🤔</u></summary>
        São pontos que você ganha cada vez que alguém usa o seu código de indicação Vortex 😁!
      </details>
      <button onclick="navigate('home')">🏠Home</button>
    </div>
  `,
};

// Navegação
function navigate(page) {
  app.innerHTML = pages[page];
  window.history.pushState({ page }, "", `#${page}`);
  initPage(page);
}

// Inicializa páginas
function initPage(page) {
  if (page === "cadastro") {
    document.getElementById("register").addEventListener("submit", registerUser);
  }
  if (page === "login") {
    document.getElementById("login").addEventListener("submit", loginUser);
  }
  if (page === "profile") {
    loadProfile();
  }
}

// Logout
function logout() {
  localStorage.removeItem("userId");
  navigate("home");
}

// Cadastro
async function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const ref = document.getElementById("ref").value;

  const senhaValida =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  if (!senhaValida) {
    alert("Senha deve ter 8+ caracteres, incluindo maiúscula, minúscula, número e símbolo");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, ref }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userId", data.user.id);
      navigate("profile");
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert("Erro ao conectar ao servidor");
    console.error(err);
  }
}

// Login
async function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userId", data.user.id);
      navigate("profile");
    } else {
      alert(data.error);
    }
  } catch (err) {
    alert("Erro ao conectar ao servidor");
    console.error(err);
  }
}

// Carregar perfil
async function loadProfile() {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("Você precisa estar logado!");
    navigate("home");
    return;
  }

  const response = await fetch(`${API_URL}/profile/${userId}`);
  const user = await response.json();

  document.getElementById("userName").textContent = user.name;
  document.getElementById("userPoints").textContent = user.points;

  // Gera link completo de indicação
  const refLink = `${window.location.origin}/#cadastro?ref=${user.referralCode}`;
  document.getElementById("refLink").value = refLink;
}

// Copiar link
function copyLink() {
  const input = document.getElementById("refLink");
  input.select();
  document.execCommand("copy");
  alert("Link copiado!");
}

// Inicialização
const userId = localStorage.getItem("userId");
if (userId) {
  navigate("profile");
} else {
  navigate("home");
}
