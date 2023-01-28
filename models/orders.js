startConnection = require("./connection");

class Order {
    constructor(id_num_order=null, order_date=null, order_to_go=null, email=null, 
        num_line=null, id_product=null, units=null, price=null, total_line=null, coment=null)
    {
        this.id_num_order = id_num_order;
        this.order_date = order_date;
        this.order_to_go = order_to_go;
        this.email = email;
        this.num_line = num_line;
        this.id_product = id_product;
        this.price = price;
        this.total_line = total_line;
        this.coment = coment;
    }
}

pgClient = startConnection()

class OrdersManager {
    static async createOrder() {
      const queryresponse = await pgClient.query
    }
  
    static async getSingle(id) {
      ;
    }
  
  }
  
  function convertProductObjectToData(product) {
    return `'${product.id}', '${product.name}', '${product.price}'`;
  }
  function convertProductDataToObjects(data) {
    let products = [];
    for (const objectData of data) {
      products.push(
        new Menu(
          (id_num_order = objectData.id_num_order),
          (emorder_dateail = objectData.order_date),
          (order_to_go = objectData.order_to_go),
          (email = objectData.email),
          (num_line = objectData.num_line),
          (id_product = objectData.id_product),
          (price = objectData.price)
          (total_line = objectData.total_line)
          (coment = objectData.pricomentce)
        )
      );
    }
    return products;
  }
  