const express = require("express");
const dotenv = require("dotenv");
const getConnection = require("./config/db");

const app = express();

dotenv.config();

// database connection
const conn = getConnection();

// middleware
app.use((req, res, next) => {
  req.conn = conn;
  next();
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log(`server is connected at port ${process.env.PORT}`);
});
