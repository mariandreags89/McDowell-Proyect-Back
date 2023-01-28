MenusManager = require("../../models/menu");

const getSingleMenu = async (req, res) => {
    const id = req.params.id;
    const response = await MenusManager.getSingle(id)
    res.status(200).json(response);
  };


module.exports = getSingleMenu;