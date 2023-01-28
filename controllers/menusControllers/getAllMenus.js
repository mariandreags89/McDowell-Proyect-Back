MenusManager = require("../../models/menu");

const getAllMenus = async (req, res) => {
  const response = await MenusManager.getAll();
  res.status(200).json(response);
};


module.exports = getAllMenus;