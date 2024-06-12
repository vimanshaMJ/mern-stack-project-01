//const app = require("./app");
const express = require("express");
const app = express();
const cors = require("cors");

//create server to run node.js
const port = 3001;
const host = "localhost";

//install mongoose
const mongoose = require("mongoose");

//import router
const router = require("./router");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://vimansha:66vskT2FBdSXq5WV@cluster0.x5es1xa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB error : ", err);
  }
};
connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port} `);
});

// midleware of router
app.use("/api", router); // /api: every paths will be domain/api/...
