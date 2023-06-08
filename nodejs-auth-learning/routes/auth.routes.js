const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.status(200).render("home"));

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/login");
});

router.get("/dashboard", (req, res) => {
  if (!req.session.isUserLoggedIn) {
    return res.redirect("/login");
  }
  res.status(200).render("dashboard");
});

router.get("/login", (req, res) => {
  return res.status(200).render("login");
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "rohan@gmail.com" && password === "rohan") {
    console.log("you are logged in");
    req.session.isUserLoggedIn = true;
    res.redirect("/dashboard");
  } else {
    console.log("email or password do not match");
    res.redirect("/login");
  }
});

module.exports = router;
