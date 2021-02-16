const TarefasDAO = require('../DAO/tarefas-dao')

module.exports = (app, bd) =>
{
    const tarefasDAO = new TarefasDAO(bd);

    app.get('/tarefas', async (req, resp)=>{
        try{
            const verTarefas = await tarefasDAO.allTarefas();
            resp.send(verTarefas);
        } catch {
            resp.send(erro);
        }
    });

    app.get('/tarefas/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verTarefasUnico = await tarefasDAO.sendParamsTarefas(parametro);
            resp.send(verTarefasUnico);
        } catch {
            resp.send(erro);
        }        
    });

    app.post('/tarefas', async (req, resp)=>{
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario];
        try{
            const insereTarefas = await tarefasDAO.insertTarefas(parametro);
            resp.send(insereTarefas);
        } catch {
            resp.send(erro);
        }    
    });

    app.delete('/tarefas/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletaTarefas = await tarefasDAO.deleteTarefas(parametro);
            resp.send(deletaTarefas);
        } catch {
            resp.send(erro);
        }  
    });

    app.put('/tarefas/:id', async (req, resp)=>{
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario, req.params.id];
        try{
            const atualizaTarefa = await tarefasDAO.updateTarefas(parametro);
            resp.send(atualizaTarefa);
        } catch {
            resp.send(erro);
        }   
    });
};