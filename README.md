TO-DO API
É uma API desenvolvida com base no método "to do list", onde se cria uma lista de tarefas e vamos riscando aquelas que finalizamos.


EXECUÇÃO DA APLICAÇÃO
- Baixar a pasta todo_app_api_projeto_m3

- Iniciar um interpretador de linha de comando (cmd, Power Shell, etc);

- Executar o comando "npm install";

- Executar o comando "npm start".

Obs.: para execução da aplicação é necessário possuir o nodejs instalado na máquina.


ROTAS
A aplicação possui duas tabelas (usuários e tarefas) e podemos interagir com as mesmas por meios de 4 ações: visualizar (GET), incluir (POST), atualizar (PUT) e deletar (DELETE).

Para a execução dos metódos acima mencionados, será necessário o uso de algum programa que faça interação com API's (Ex.: Insomnia).


MÉTODO GET
Digitar: http://localhost:8000/usuarios/id, http://localhost:8000/tarefas/id

Para  consultar somente um usuário/tarefa, substituir a sigla id pelo id do usuário/tarefa.

Para visualizar todos os clientes ou tarefas das tabelas, retire a sigla id da url.


MÉTODO POST
Para incluir um usuário, digitar http://localhost:8000/usuarios no método POST conforme representação abaixo:
{
	nome: "teste",
	email: "teste@teste.com",
	senha: "teste"
}

Para inserir uma tarefa, você terá que usar a rota http://localhost:8000/tarefas no método POST conforme representação abaixo:
{
	titulo: "teste",
	descricao: "teste",
	status: "teste",
	datacriacao: "2021-02-19",
	id_usuario: "1" 
}

MÉTODO PUT
Para atualizar um usuário, digitar http://localhost:8000/usuarios/id no método PUT conforme representação abaixo, e alterar a sigla id pelo id do usuário:
{
	nome: "teste",
	email: "teste@teste.com",
	senha: "teste"
}

Para atualizar uma tarefa, digitar http://localhost:8000/tarefas/id no método PUT conforme representação abaixo, e alterar a sigla id pelo id da tarefa:
{
	titulo: "teste",
	descricao: "teste",
	status: "teste",
	datacriacao: "2021-02-19",
	id_usuario: "1" 
}

MÉTODO DELETE
Para deletar um usuário, digitar http://localhost:8000/usuarios/id no método DELETE e alterar a sigla id pelo id do usuário.

Para deletar uma tarefa, digitar http://localhost:8000/tarefas/id no método DELETE e alterar a sigla id pelo id da tarefa.
