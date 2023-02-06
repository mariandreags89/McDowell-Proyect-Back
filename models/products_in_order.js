startConnection = require("./connection");

class products_in_order {
    constructor(
      id_order=null, 
      id_product=null, 
      name=null, 
      units=null, 
      price=null, 
      total_line=null,
      coment=null,
      id_status=null,
      description=null
    ) {
      this.id_order = id_order;
      this.fecha = fecha;
      this.id_user = id_user;
      this.order_mail = order_mail;
      this.id_product = id_product;
      this.name = name;
      this.units = units;
      this.price = price;
      this.total_line = total_line;
      this.coment = coment;
      this.id_status = id_status;
      this.description = description;
    }
}

pgClient = startConnection()

class Products_in_orderManager {
  
  static async getAll() {
      const queryResponse = await pgClient.query("select * from (select pedidos.*,estado.id_status,estado.description from (select products_in_order.id_order,orders.order_date fecha, orders.order_mail,orders.id_user,products_in_order.id_product, products.name, products_in_order.units, products_in_order.price, (products_in_order.units * products_in_order.price)total_line, products_in_order.coment from products_in_order right join orders on orders.id_num_order= products_in_order.id_order inner join products on products.id_product=products_in_order.id_product	)  as pedidos inner join  (select order_status.id_order,status.id_status, status.description  from order_status left join status on order_status.id_status=status.id_status) as estado on pedidos.id_order=estado.id_order )  as tickets");
      const orders = convertOrderDataToObjects(queryResponse.rows);
      return orders;
    }
  static async getId(id) {
      const queryResponse = await pgClient.query("select * from (select pedidos.*,estado.id_status,estado.description from (select products_in_order.id_order,orders.order_date fecha, orders.order_mail,orders.id_user,products_in_order.id_product, products.name, products_in_order.units, products_in_order.price, (products_in_order.units * products_in_order.price)total_line, products_in_order.coment from products_in_order right join orders on orders.id_num_order= products_in_order.id_order inner join products on products.id_product=products_in_order.id_product	)  as pedidos inner join  (select order_status.id_order,status.id_status, status.description  from order_status left join status on order_status.id_status=status.id_status) as estado on pedidos.id_order=estado.id_order )  as tickets WHERE id_order=$1",[id])
      const orders = convertOrderDataToObjects(queryResponse.rows);
      return orders;
  }
  
  
    static async createOrder() {
      const queryresponse = await pgClient.query
    }
  
  }
  
  function convertOrderObjectToData(order) {
    return `'${id_order}', '${fecha}', '${id_user}','${order_mail}','${id_product}','${name}','${units}','${price}','${total_line}','${coment}','${id_status}','${description}`;
  }
  function convertOrderDataToObjects(data) {
    let orders = [];
    for (const objectData of data) {
      orders.push(
        new Order(
          (id_order = objectData.id_order),
          (fecha = objectData.fecha),
          (id_user= objectData.id_user),
          (order_mail = objectData.order_mail),
          (id_product = objectData.id_product),
          (name=objectData.name),
          (units = objectData.units),
          (price = objectData.price),
          (total_line = objectData.total_line),
          (coment = objectData.pricomentce),
          (id_status = objectData.id_status),
          (description = objectData.description)
        )
      );
    }
    return orders;
  }
  
  module.exports = Products_in_orderManager;