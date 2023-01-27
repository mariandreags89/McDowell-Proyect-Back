const { Client } = require("pg");

const connection = () => {
  const myClient = new Client({
    user: "postgres",
    host: "localhost",
    database: "mcdowell",
    password: "1234",
    port: 5432,
  });
  return myClient;
};

// logica para traer todos los menus
const getAllMenus = async (req, res) => {
  const myClient = connection();

  await myClient.connect();

  const response = await myClient.query("SELECT * FROM products");

  res.status(200).json(response.rows);
  await myClient.end();
};

// logica para traer un solo menu
const getSigleMenu = async (req, res) => {
  const myClient = connection();

  await myClient.connect();

  const id = req.params.id;
  const response = await myClient.query("SELECT * FROM products WHERE id_product=$1",[id]);
  res.status(200).json(response.rows);
  await myClient.end();
};

module.exports = {
  getAllMenus,
  getSigleMenu,
};
