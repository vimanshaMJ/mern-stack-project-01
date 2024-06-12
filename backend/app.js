const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

// midlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//rest APIs for controller functions: to get data from controller to app.js

app.get("/users", (req, res) => {
  controller.getUsers((req, res, next) => {
    res.send();
  });
});

//create a user by post method
app.post("/createuser", (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send();
  });
});

//update user
app.post("/updateuser", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback); //here return the callback to know the data was updated or not and exactly which data was updated
  });
});

//delete user
app.post("/deleteuser", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback); //here return the callback to know the which data was deleted
  });
});

module.exports = app;
