const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const getConnection = require("./config/db");
const session = require("express-session");
const todoRouter = require("./routes/todo.routes");

// init process
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const APP_PORT = process.env.PORT || 8000;

// connecting database
const conn = getConnection();

//middleware
app.use((req, res, next) => {
  req.conn = conn;
  next();
});

app.use(
  session({
    name: "auth-session",
    secret: "This-is-a-secret-for-express-session",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

// routes
app.use(todoRouter);

// server initialization
app.listen(8080, () => console.log("Server is listening at port " + APP_PORT));
