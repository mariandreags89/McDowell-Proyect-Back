const jwt = require("jsonwebtoken");
const UserManager = require("../../models/users");

const signInController = async (req, res) => {
  const { username, password } = req.body;
  const response = await UserManager.getUser(username);

   if (!response) {
    res.status(401).send({ error : "usuario no encontrado"});
    return  
  }else if (parseInt(response.password) != password) {
    res.status(401).send({ error: "usuario y/o contraseña incorrecta" });
    return
  }

  const token = jwt.sign({ username }, process.env.SECRET, {
    algorithm: "HS256",
    expiresIn: 3000,
  });
  res.status(201).json({ token }); 
}

module.exports = signInController;
