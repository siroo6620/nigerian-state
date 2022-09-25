const express = require("express");

const app = express();

const PORT = 3000;

function initialRequest(req, res) {
  res.send(`Hello to api `);
}

// This one runs for http://localhost:3000/
app.get("/", initialRequest);

// This one runs for http://localhost:3000/home
app.get("/home", (req, res) => {
  res.send(`Hello to Home`);
});

function callback() {
  console.log("Server Started at Port: " + PORT);
}

app.listen(PORT, callback);
