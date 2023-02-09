const startConnection = require("./connection");


const pgClient = startConnection()
//* nuevo modelo para buscar el id del pedido */
class EmailManager {

    static async getIdOrder(){
        const ultimo= await pgClient.query("select max(id_num_order) from orders");
        const id_order=ultimo.rows[0].max;
        return id_order
    }
}

module.exports = EmailManager;