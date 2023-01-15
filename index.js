const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const port = 3001;


app.listen(port, () => {
    console.log(`Todo funcionando en el puerto http://localhost:${port}`);
  });