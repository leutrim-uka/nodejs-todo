const router = require("express").Router();
const Todo = require("../models/Todo");
const todoController = require("./../controllers/todoController");

router
    .post("/add/todo", todoController.createTodo)
    .get("/delete/todo/:_id", todoController.deleteTodo)

module.exports = router;