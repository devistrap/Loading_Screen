const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
var os = require("os-utils");
const { exec } = require("child_process");
var database = require("./database");
const { json } = require("react-router-dom");

app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

app.get("/api", (req, res) => {
  res.json({
    uptime: os.sysUptime() / 1000,
    avgload: os.loadavg(15),
    usedmem: os.totalmem() - os.freemem(),
    process: os.processUptime(),
    cpu_usage: cpu_usage,
  });
});

app.get("/fetchAll", (req, res) => {
  var query = "SELECT * FROM `users`";
  database.query(query, function (err, result) {
    res.json(result);
  });
});

// Add this block to handle POST requests at /login
app.post("/login", (req, res) => {
  console.log(req.body);
  let json_response = req.body // Log the request body
  
  console.log(
    `SELECT * FROM users WHERE username = ${json_response["username"]} AND password = ${json_response["password"]}`
  );  
  
  var query = `SELECT * FROM users WHERE username = "${json_response['username']}" AND password = "${json_response['password']}"`;
  database.query(query, function (err, result) {
    console.log(result);
    res.json(result);
    
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
