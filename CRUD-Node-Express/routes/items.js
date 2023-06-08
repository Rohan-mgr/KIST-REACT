const express = require("express");
const router = express.Router();

// creating a dummy data
let data = [
  {
    id: 1,
    title: "Create a project",
    order: 1,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 2,
    title: "Take a cofféé",
    order: 2,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 3,
    title: "Write new article",
    order: 3,
    completed: true,
    createdOn: new Date(),
  },
  {
    id: 4,
    title: "Walk toward home",
    order: 4,
    completed: false,
    createdOn: new Date(),
  },
  {
    id: 5,
    title: "Have some dinner",
    order: 5,
    completed: false,
    createdOn: new Date(),
  },
];

router.get("/", (req, res) =>
  res.status(200).json({ message: "Items fechted successfully", data: data })
);

router.get("/:id", (req, res) => {
  const singleItem = data.find((item) => item.id === parseInt(req.params.id));
  res
    .status(200)
    .json({ message: "Item feched successfully", data: singleItem });
});

router.post("/", (req, res) => {
  const newItem = req.body;
  data = [...data, newItem];
  res.json({ message: "Item posted successfully", updatedItems: data });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  data = data.filter((item) => item.id !== parseInt(id));
  res.json({ message: `Item ${id} deleted successfully` });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedTitle = req.body.title;
  const updatedOrder = req.body.order;
  const updatedCompleted = req.body.completed;
  const index = data.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    data[index].title = updatedTitle;
    data[index].order = updatedOrder;
    data[index].completed = updatedCompleted;
  } else {
    throw new Error(`Item not found with id = ${id}`);
  }

  res.json({ message: `Item ${id} updated successfully` });
});

module.exports = router;
