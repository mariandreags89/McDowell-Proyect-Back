startConnection= require("./connection");


class Menu {
  constructor(
    id_product = null,
    name = null,
    description = null,
    image = null,
    price = null,
    stock_day = null,
    available_stock = null
  ) {
    this.id_product = id_product;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.stock_day = stock_day;
    this.available_stock = available_stock;
  }
}

pgClient = startConnection()

class ProductsManager {
  static async getAll() {
    const queryResponse = await pgClient.query("SELECT * FROM products");
    const products = convertProductDataToObjects(queryResponse.rows);
    return products;
  }

  static async getSingle(id) {
    const queryResponse = await pgClient.query("SELECT * FROM products WHERE id_product=$1",[id])
    const products = convertProductDataToObjects(queryResponse.rows);
    return products;
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
        (id_product = objectData.id_product),
        (name = objectData.name),
        (description = objectData.description),
        (image = objectData.image),
        (price = objectData.price),
        (stock_day = objectData.stock_day),
        (available_stock = objectData.available_stock)
      )
    );
  }
  return products;
}


module.exports = ProductsManager;
