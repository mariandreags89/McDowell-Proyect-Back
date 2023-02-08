const startConnection = require("./connection");

class User {
  constructor(
    id_user = null,
    name = null,
    email = null,
    password = null,
  ) {
    this.id_user = id_user;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

pgClient = startConnection();

class UserManager {
    static async getAll() {
      const queryResponse = await pgClient.query("SELECT * FROM user");
      const user = convertUserDataToObjects(queryResponse.rows);
      return user;
    }
  
    // estatico para iniciar sesion 
    static async signIn(username) {
      const queryResponse = await pgClient.query(`SELECT * FROM users WHERE name='${username}'`)
      if (!queryResponse){
        return null 
      }
      const user = convertUserDataToObjects(queryResponse.rows);
      return user[0];
    }
    
    /*static async signIn(id) {
      const queryResponse = await pgClient.query("SELECT * FROM products WHERE id_product=$1",[id]);
      const user = convertUserDataToObjects(queryResponse.rows);
      return user;
    } */

    static async register(infoUser){
      const user = convertUserObjectToData(infoUser)
      //const queryResponse = await pgClient.query('INSER INTO user (name, email, password) VALUES $1', [user])
      return user
    }
  }

  function convertUserObjectToData(info) {
    return `'${info.name}', '${info.email}', '${info.password}'`;
  }
  
  function convertUserDataToObjects(data) {
    let user = [];
    for (const objectData of data) {
      user.push(
        new User(
          (id_user = objectData.id_user),
          (name = objectData.name),
          (email = objectData.email),
          (password = objectData.password)
        )
      );
    }
    return user;
  }
  
  module.exports = UserManager;