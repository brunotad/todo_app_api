const express = require("express")

const bParser = require("body-parser") 

const app = express()

const port = 3000

app.use(bParser.json())

const usersController = require("./controllers/usersController")

usersController(app)

app.listen(port, ()=>console.log(`rota ativada em execução http://localhost:${port}`))