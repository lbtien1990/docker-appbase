const express = require("express");
const path = require("path");
const redis = require("redis");
const client = redis.createClient({ host: "redis" });

client.on("connect", function () {
  console.log("You are now connected");
});

// Constants
const PORT = 5000;
const HOST = "0.0.0.0";

// App
const app = express();

app.disable("x-powered-by");

// Static assets
app.use("/", express.static(path.join(__dirname, "../public/")));

app.get("/visited", (req, res) => {
  client.incr("visit", (err, times) => {
    res.send(`Hello! You visited ${times} times.`);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
