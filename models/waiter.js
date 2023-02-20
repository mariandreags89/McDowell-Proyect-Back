const startConnection = require("./connection");

class Waiter {
  constructor(id_waiter = null, id_user = null) {
    this.id_waiter = id_waiter;
    this.id_user = id_user;
  }
}

const pgClient = startConnection();

class WaiterManager {
  static async register() {
    const lastId = await pgClient.query("select max(id_user) from users");
    const id_user = lastId.rows[0].max;

    const newWaiter = await pgClient.query(
      "INSERT INTO waiter (id_user) VALUES ($1)",
      [id_user]
    );
    return newWaiter;
  }

  /*static async getClient (id){
    if(!id){ // este caso se usa para los registros de nuevos clientes
      const lastId = await pgClient.query("select max(id_user) from users");
      const id_user = lastId.rows[0].max;
      const response = await pgClient.query('SELECT * FROM clients WHERE id_user=$1', [id_user])
      const client = convertClientsDataToObjects(response.rows)
      return client[0]
    }
      // este caso es cuando el cliente ya existe eb la bbdd
    const response = await pgClient.query('SELECT * FROM clients WHERE id_user=$1', [id])
    const client = convertClientsDataToObjects(response.rows)
    return client[0] 
    
  }*/
  
}



function convertWaiterDataToObjects(data) {
  let waiter = [];
  for (const objectData of data) {
    waiter.push(
      new Waiter(
        (id_waiter = objectData.id_waiter),
        (id_user = objectData.id_user),
      )
    );
  }
  return waiter;
}


module.exports = WaiterManager;