module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send('<h3>Agora coloque como parametro:</h3><br> <p>Digite ==> <strong>usuarios</strong> ou <strong>tarefas</strong> no link do navegador acima, para acessar o banco de dados.</p>');
    });
};