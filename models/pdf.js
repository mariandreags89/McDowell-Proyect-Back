startConnection = require("./connection");


// definimos tabla
class pdf {
    constructor(
      id_num_order=null,
      order_date=null, 
      order_to_go=null, 
      email=null, 
      num_line=null, 
      id_product=null, 
      units=null, 
      price=null, 
      total_line=null, 
      coment=null,
      description=null,
      name=null
    ) {
      this.id_num_order = id_num_order;
      this.order_date = order_date;
      this.order_to_go = order_to_go;
      this.email = email;
      this.num_line = num_line;
      this.id_product = id_product;
      this.units = units;
      this.price = price;
      this.total_line = total_line;
      this.coment = coment;
      this.description = description;
      this.name = name;
    }
}
// conectamos a la base
pgClient = startConnection()

class PdfManager {
  
  static async getpdf(id) {
    const queryResponse = await pgClient.query("select orders.*, products.description, products.name   from orders  left join products  on orders.id_product = products.id_product where orders.id_status_order=5 and orders.id_num_order=$1",[id])
    const pdfs = convertpdfDataToObjects(queryResponse.rows);
    return pdfs;
}
}  
 
function convertOrderObjectToData(pdfs) {
  return `'${id_num_order.id}', '${order_date}', '${order_to_go}','${email}','${num_line}','${id_product}',${id}'${units}','${price}','${total_line}','${coment}','${description}','${name}'`;
  
}
  
  function convertpdfDataToObjects(data) {
    let pdfs = [];
    for (const objectData of data) {
      pdfs.push(
        new pdf(
          (id_num_order = objectData.id_num_order),
          (order_date = objectData.order_date),
          (order_to_go = objectData.order_to_go),
          (email = objectData.email),
          (num_line = objectData.num_line),
          (id_product = objectData.id_product),
          (units = objectData.units),
          (price = objectData.price),
          (total_line = objectData.total_line),
          (coment = objectData.pricomentce),
          (description = objectData.description),
          (name = objectData.name)
        )
      );
    }
    return pdfs;
  }
  
  
  module.exports = PdfManager;