const express = require("express");
const cors = require("cors");

//Routers
const { todosRouter } = require("./Routes/todos.router");

//Controllers
const { globalErrorHandler } = require("./Controllers/error.controller");

//Init app
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use("*", cors());

//Endpoints
//http://localhost:4000/api/v1/todos
app.use("/api/v1/todos", todosRouter);

app.use(globalErrorHandler);

module.exports = { app };
