const router = require("express").Router();
const Todo = require("../models/Todo");
const todoController = require('./../controllers/todoController');

// index route
router
    .get("/", todoController.getAllTodos);

module.exports = router;