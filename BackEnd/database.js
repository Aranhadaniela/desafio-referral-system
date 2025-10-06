const sqlite3 = require("sqlite3").verbose();
const path = require("path");
//criar banco de dados
const dbPath = path.resolve(__dirname,"database.db");
const db = new sqlite3.Database(dbPath,(err)=>{
    if(err){
        console.error("Erro ao abrir o banco de dados",err.message);
    }else{
        console.log("banco de dados conectado em :", dbPath);
    }
});
//criar tabela de usuario se nao existir
db.serialize(() =>{
    db.run(`CREATE TABLE IF NOT EXISTS users id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,email TEXT UNIQUE NOT NULL, password TEXT NOT NULL, password TEXT NOT NULL, points INTEGER DEFAULT 0, referralCode TEXT, created_at DATETIME DEFALULT CURRENT_TIMESTAMP);`
    ,(err) =>{
        if(err) {console.error("Erro criando tabela users:",err.message);
        }else{console.log("Tabela 'users'pronta");

        }
    });
});

module.exports = db;
