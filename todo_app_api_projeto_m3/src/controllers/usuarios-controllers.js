const UsuariosDAO = require('../DAO/usuarios-dao')

module.exports = (app, bd) =>
{
    
    const usuariosDAO = new UsuariosDAO(bd);

    app.get('/usuarios', async (req, resp)=>{

        try{
            const verUsuarios = await usuariosDAO.allUsuarios();
            resp.send(verUsuarios);
        } catch {
            resp.send(erro);
        }   
    });

    app.get('/usuarios/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verUsuariosUnico = await usuariosDAO.sendParamsUsuarios(parametro);
            resp.send(verUsuariosUnico);
        } catch {
            resp.send(erro);
        }   
    });

    app.post('/usuarios', async (req, resp)=>{
        let parametro = [req.body.nome, req.body.email, req.body.senha];
        try{
            const insereUsuarios = await usuariosDAO.insertUsuarios(parametro);
            resp.send(insereUsuarios);
        } catch {
            resp.send(erro);
        }  
    });

    app.delete('/usuarios/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletaUsuarios = await usuariosDAO.deleteUsuarios(parametro);
            resp.send(deletaUsuarios);
        } catch {
            resp.send(erro);
        }  
    });

    app.put('/usuarios/:id', async (req, resp)=>{
        let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id];
        try{
            const atualizaUsuario = await usuariosDAO.updateUsuarios(parametro);
            resp.send(atualizaUsuario);
        } catch {
            resp.send(erro);
        }   
    });
};