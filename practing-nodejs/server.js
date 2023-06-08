const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({
    _id: "6466451f8388bcea100a0b00",
    index: 0,
    guid: "e4a6538a-1042-48c9-8546-1193a37776cd",
    isActive: false,
    balance: "$1,846.20",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Stevens Flores",
    gender: "male",
    company: "ACRODANCE",
    email: "stevensflores@acrodance.com",
    phone: "+1 (871) 589-2706",
  });
});

app.listen(9000, () => {
  console.log("Server is listening at port 9000");
});
