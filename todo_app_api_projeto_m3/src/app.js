const express = require('express');
const bodyParser = require('body-parser');
const indexController = require('./controllers/index-controllers');
const usuariosController = require('./controllers/usuarios-controllers');
const tarefasController = require('./controllers/tarefas-controllers');
const bd = require('./infra/sqlite-db');

const port = 8080;
const app = express();
app.use(bodyParser.json());

indexController(app);
usuariosController(app, bd);
tarefasController(app, bd);

app.listen(port, ()=>{
    console.log(`Em execução, http://localhost:${port}`);
});