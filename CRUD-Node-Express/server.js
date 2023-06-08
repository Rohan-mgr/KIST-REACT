const express = require("express");
const itemsRouter = require("./routes/items");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/items", itemsRouter);

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
