Endpoint principal para registro de usuários
Método: POST

Rota: /users

Descrição: Cadastrar usuário

Exemplo de requisição para registrar usuário
POST http://localhost:3000/users
Content-Type: application/json

json
Copiar
Editar
{
  "userName": "Mage",
  "userMail": "mage@mail.com",
  "userPassword": "SenhaForte123!"
}
O que o frontend deve esperar
A resposta será um JSON com os dados do usuário, sem a senha (ela é excluída do retorno).

Caso a validação falhe (ex: email inválido ou senha fraca), a API retorna um erro com mensagens descritivas.

Notas para o frontend
Use fetch, axios ou qualquer biblioteca HTTP para consumir a API.

Configure o backend para rodar na porta 3000 (padrão NestJS).

Teste as rotas no Postman ou Insomnia para entender o fluxo.

Quando o backend tiver mais rotas, atualize o README para refletir elas.
