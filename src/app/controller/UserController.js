const { store: storeUser, index: indexUser } = require("../functions/UserFunctions");

class UserController {
  async store(req, res) {
    /* 
    #swagger.tags=["Users"]
    #swagger.description='Cadastra um novo usuário no sistema'
    #swagger.parameters['body']={"in": "body", "description": "todos os campos devem ser preenchidos",schema:{
      $nome:"Katarina",
      $email: "noxus@gmail.com",
      $username: "katarinaDeNoxus",
      $password: "12345678901"
    }}
    */
    await storeUser(req, res);
  }
  async index(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint para buscar todos os usuários do banco de dados.
    await indexUser(req, res);
  }
}

module.exports = new UserController();
