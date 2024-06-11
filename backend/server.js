const app = require("./app");

//create server to run node.js
const port = 3001;
const host = "http://localhost";

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port} `);
});
