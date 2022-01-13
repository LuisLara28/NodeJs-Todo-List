const express = require("express");

//Controllers
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodoById).patch(updateTodo).delete(deleteTodo);

// Fetch all todos
// router.get("/", getAllTodos);

//Create new todos
// router.post("/", createTodo);

//Update todos (patch)
// router.patch("/:id", updateTodo);

//Delete todos (delete)
// router.delete("/:id", deleteTodo);
// export default router

module.exports = { todosRouter: router };
