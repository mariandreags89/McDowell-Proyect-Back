const UserManager = require("../../models/users");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  var BCRYP_SALT_RAUNDS = 10;
  const { username, password } = req.body;

  const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);

  await UserManager.register(username, passwordCryp);

  res.status(201).end();
};

module.exports = registerController;
