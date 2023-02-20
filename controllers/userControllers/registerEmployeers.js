const UserManager = require("../../models/users");
const WaiterManager = require("../../models/waiter");
const ChefManager = require("../../models/chef");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminManager = require("../../models/admin");

const registerControllerEmployeers = async (req, res) => {
  var BCRYP_SALT_RAUNDS = 5;

  const { username, password, role } = req.body;

  const ifExist = await UserManager.signIn(username);

  if (!ifExist) {
    const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);
    console.log(passwordCryp);
    await UserManager.register(username.toLowerCase(), passwordCryp);

    if (role === "waiter") {
      await WaiterManager.register();
    } else if (role === "chef") {
      await ChefManager.register();
    } else if (role === "admin") {
      await AdminManager.register();
    }
    const token = jwt.sign({ username }, process.env.SECRET, {
      algorithm: "HS256",
      expiresIn: 3000,
    });

    res.status(201).json({ token });
  } else {
    const error = [{ Msg: "usuario ya existente" }];
    res.status(400).json(error);
  }
};

module.exports = registerControllerEmployeers;
