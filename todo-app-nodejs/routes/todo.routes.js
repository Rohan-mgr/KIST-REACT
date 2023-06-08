const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  } else {
    req.conn.query("select * from todo", (error, result) => {
      if (error) {
        res.status(500).send({ message: "failed to fetch todo list" });
      }
      res.render("index", { items: result.rows });
    });
  }
});

router.get("/login", (req, res) => {
  res.render("login", { error: null });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  req.conn.query(
    "select * from users where username = $1 and pass = $2",
    [username, password],
    (error, result) => {
      if (error) {
        res.status(500).send({ message: "failed to fetch info" });
      }
      if (result.rows.length > 0) {
        req.session.isLoggedIn = true;
        res.redirect("/");
      } else {
        res.render("login", {
          error: "Invalid Username or Password",
        });
      }
    }
  );
});

router.post("/", (req, res) => {
  const todoName = req.body.todoName;
  req.conn.query(
    "insert into todo (title) values ($1)",
    [todoName],
    (error, result) => {
      if (error) {
        res.status(500).send({ message: "failed to insert todo" });
      }
    }
  );
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/login");
});

router.post("/remove-todo", (req, res) => {
  const id = parseInt(req.body.delete);
  req.conn.query("delete from todo where id = $1", [id], (error, result) => {
    if (error) {
      res.status(500).send({ message: "failed to remove todo" });
    }
  });
  res.redirect("/");
});

router.post("/completed-todo", (req, res) => {
  const id = parseInt(req.body.todoId);
  const todoStatus = req.body.todoStatus === "true";
  req.conn.query(
    "update todo set isComplete = $1 where id = $2",
    [!todoStatus, id],
    (error, result) => {
      if (error) {
        res.status(500).send({ message: "failed to modify todo status" });
      }
    }
  );
  res.redirect("/");
});

module.exports = router;
