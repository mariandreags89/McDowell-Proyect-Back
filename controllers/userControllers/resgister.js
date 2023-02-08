const UserManager = require('../../models/users')

const  registerController= async (req, res)=> {
  const infoUser = req.body;

  const response = await UserManager.register(infoUser)

  res.status(201).send(response);
}

module.exports = registerController;
