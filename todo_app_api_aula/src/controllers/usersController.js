module.exports = app.get('/usuarios', (req, res)=>{res.send("servidor rodando na rota get de usuario")})

app.get('/usuarios/:email', (req, resp)=>{resp.send("usuário não encontrado")})