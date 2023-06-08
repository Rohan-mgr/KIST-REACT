const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(helmet());
app.use(cors());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "auth-session",
    secret: "This-is-a-secret-for-express-session",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

app.use(authRoutes);

app.listen(process.env.PORT, (error) =>
  console.log(`Server is listening at port ${process.env.PORT}`)
);
