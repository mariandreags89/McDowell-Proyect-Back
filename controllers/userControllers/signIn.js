const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserManager = require("../../models/users");

const signInController = async (req, res) => {
  const { username, password } = req.body;
  const response = await UserManager.signIn(username);

  if (!response) {
    res.status(401).send({ error: "usuario no encontrado" });
    return;
  }

  const samePassword = await bcrypt.compare(password, response.password);

  if (!samePassword) {
    res.status(401).send({ error: "usuario y/o contraseña incorrecta" });
    return;
  }
  const token = jwt.sign({ username }, process.env.SECRET, {
    algorithm: "HS256",
    expiresIn: 3000,
  });
  res.status(201).json({ token });
};

module.exports = signInController;
