const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//CRIAÇÃO DA TABELA DE USUARIOS
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
VALUES 
    ('Lucas Oliveira', 'lucas.oliveira@gmail.com', '*****'),
    ('Erica Ribeiro', 'erica.ribeiro@gmail.com', '*****'),
    ('Augusto Fazano', 'augusto.fazano@outlook.com', '*****'),
    ('Daniel Castro', 'daniel.castro@yahoo.com.br', '*****'),
    ('Lorenzo Cunha', 'lorenzo.cunha@yahoo.com.br', '*****'),
    ('Bruno Tadeu', 'bruno.tadeu@outlook.com', '*****'),
    ('Marcus Anjos', 'marcus.anjos@yahoo.com.br', '*****'),
    ('Joao Ambrosio', 'joao.ambrosio@yahoo.com.br', '*****'),
    ('Cicera Cleria', 'cicera.cleria@outlook.com', '*****'),
    ('Jose Leal', 'jose.leal@outlook.com', '*****')
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


//CRIAÇÃO DA TABELA DE TAREFAS
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO VARCHAR(32),
    ID_USUARIO INTEGER,
    FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOS(ID)
);`;

const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
VALUES 
       ('Academia', 'Ir as segundas, quartas e sextas', 'contínuo', '2021-01-10', 9),
       ('Médico', 'Consulta com a nutricionista', 'à fazer', '2021-02-20', 6),
       ('Pagar contas', 'Pagar boletos de água e luz', 'fazendo', '2021-02-16', 2),
       ('Mercado', 'Fazer as compras da lista', 'à fazer', '2021-02-20', 2),
       ('Dentista', 'Consulta com a Dra Bruna na quinta', 'TODO', '2021-02-18', 6),
       ('Pagar financiamento carro', 'Pagar parcela do mês vigente', 'contínuo', '2021-02-30', 3)
`

function criaTabelaTarefas() {
    db.run(TAREFAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}


function populaTabelaTarefas() {
    db.run(ADD_TAREFAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Tarefas");
    });
}


db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    criaTabelaTarefas();
    populaTabelaTarefas();
});