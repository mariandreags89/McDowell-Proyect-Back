function registerController(req, res) {
  const { username, password } = req.body;

  res.status(201).json();
}

module.exports = registerController;
