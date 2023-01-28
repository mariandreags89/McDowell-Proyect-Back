const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
require('dotenv').config()
const port = 3001;

app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log(`Todo funcionando en el puerto http://localhost:${port}`);
  });