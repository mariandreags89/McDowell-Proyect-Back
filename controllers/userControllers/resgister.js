const UserManager = require("../../models/users");
const ClientsManager = require('../../models/clients')
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  var BCRYP_SALT_RAUNDS = 10;

  const { username, password, name } = req.body; 
if(username && password && name){
  const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);

  await UserManager.register(username, passwordCryp);
  await ClientsManager.register(name)

  res.status(201).end();
} else{
  res.status(400).end()
}
};

module.exports = registerController;
