const express = require('express')

const bParser = require('body-parser') 

const app = express()

const port = 3000

const bd = require('./infra/bd')

app.use(bParser.json())

const usersController = require('./controllers/usersController')

const jobController = require('./controllers/jobController')

usersController(app)

jobController(app)

app.listen(port, ()=>console.log(`rota ativada em execução http://localhost:${port}`))