module.exports = (app) =>
{
    app.get('/', (req, resp)=>{
        resp.send('<h2>Para acessar o banco de dados:</h2><br><p>Digite os seguintes parâmetros: <strong>/usuarios</strong> ou <strong>/tarefas</strong> ao final do endereço acima.</p>');
    });
};