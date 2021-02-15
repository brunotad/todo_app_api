module.exports = class UsuariosDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    allUsuarios()
    {
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    sendParamsUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.get('SELECT * FROM USUARIOS WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insertUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir o usuário');
                else resolve('Usuário inserido');     
            });    
        });
    }

    deleteUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('DELETE FROM USUARIOS WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar o usuário');
                else resolve('Usuário deletado');  
            });
        })
    }

    updateUsuarios(parametro)
    {
        return new Promise((resolve, reject)=>{
            this.bd.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar o usuário');
                else resolve('Usuário atualizado');           
            });
        });
    }
}