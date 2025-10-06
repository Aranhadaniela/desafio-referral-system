const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Caminho do banco
const dbPath = path.resolve(__dirname, "banco.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("❌ Erro ao abrir banco:", err.message);
  else console.log("✅ Conectado ao banco:", dbPath);
});

app.use(cors());
app.use(express.json());

// Cria tabela
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    points INTEGER DEFAULT 0,
    referralCode TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`
);

// Rota teste
app.get("/", (req, res) => res.send("Servidor ok 🚀"));

// Listar todos usuários (debug)
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Buscar perfil por ID
app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db.get(
    "SELECT id,name,email,points,referralCode,created_at FROM users WHERE id = ?",
    [id],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: "Usuário não encontrado" });
      res.json(row);
    }
  );
});

// Registrar usuário
app.post("/register", (req, res) => {
  const { name, email, password, ref } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Preencha nome, email e senha" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  const senhaValida =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  if (!senhaValida) {
    return res.status(400).json({
      error:
        "Senha fraca. Use 8+ caracteres com maiúscula, minúscula, número e símbolo",
    });
  }

  const referralCode = Math.random().toString(36).substring(2, 8);

  db.run(
    "INSERT INTO users (name,email,password,points,referralCode) VALUES (?,?,?,0,?)",
    [name, email, password, referralCode],
    function (err) {
      if (err) {
        if (err.message.includes("UNIQUE constraint failed")) {
          return res.status(400).json({ error: "Email já cadastrado" });
        }
        return res.status(500).json({ error: err.message });
      }

      // Se foi usado um código de referência válido, dar ponto para o dono
      if (ref) {
        db.run("UPDATE users SET points = points + 1 WHERE referralCode = ?", [
          ref,
        ]);
      }

      res.json({
        message: "Usuário cadastrado",
        user: { id: this.lastID, name, email, points: 0, referralCode },
      });
    }
  );
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
console.log("login", email, password);
  db.get(
    "SELECT id,name,email,points,referralCode,created_at FROM users WHERE email=? AND password=?",
    [email, password],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(401).json({ error: "Credenciais inválidas" });
      res.json({ message: "Login ok", user: row });

    }
  );
});

const API_URL = "http://localhost:3000";

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
