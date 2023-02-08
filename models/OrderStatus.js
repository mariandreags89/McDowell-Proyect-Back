startConnection = require("./connection");

class OrderStatus {
    constructor(
      id_order=null, 
      id_status=null
    ) {
      this.id_order = id_order;
      this.id_status = id_status;
    }
}

pgClient = startConnection()

class orderStatusManager {
  
  static async getAll() {
      const queryResponse = await pgClient.query("select * from order_status");
      const OrderStatus = convertOrderStatusDataToObjects(queryResponse.rows);
      return OrderStatus;
    }
  static async getId(status) {
      const queryResponse = await pgClient.query(" select * from order_status WHERE id_status=$1",[status])
      const OrderStatus = convertOrderStatusDataToObjects(queryResponse.rows);
      return OrderStatus;
  }
 
  
  
  
    static async createOrderStatus() {
    const ultimo= await pgClient.query("select max(id_num_order) from orders");
    const id_order=ultimo.rows[0].max;
    const newOrderStatus = await pgClient.query(`INSERT INTO order_status (id_order,id_status) 
    values
    ($1, $2)`, [ id_order,1]);
    
    return newOrderStatus;
    }
  }  
  
  function convertOrderStatusDataToObjects(OrderStatus) {
    return `'${id_order}', '${id_status}'`;
  }
  function convertOrderStatusDataToObjects(data) {
    let OrderStatus = [];
    for (const objectData of data) {
      OrderStatus.push(
        new newOrderStatusr(
          (id_order = objectData.id_order),
          (id_status = objectData.id_status)
        )
      );
    }
    return OrderStatus;
  }
  
  module.exports = orderStatusManager;