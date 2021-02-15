module.exports = (app) =>
{
    app.get('/tarefas', (req, resp)=>{
        resp.send('Deve exibir um banco de dados');
    });

    app.get('/tarefas/:id', (req, resp)=>{
        resp.send('Tarefa encontrada');
    });

    app.post('/tarefas', (req, resp)=>{
        resp.send('Tarefa inserida');
    });

    app.delete('/tarefas/:id', (req, resp)=>{
        resp.send('Tarefa deletada');
    });

    app.put('/tarefas/:id', (req, resp)=>{
        resp.send('Tarefa atualizada');
    });
    
};