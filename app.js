let express = require("express");
let app = express(); //Creates the Express Application

// Handling GET requests with Express

// Root URL
app.get("/", (req, res) => {
  res.send("Hello, this is express!");
});

// /about URL
app.get("/about", (req, res) => {
  res.sendFile("/public/pages/about.html", { root: __dirname });
});

// Assign environment port or 8080
app.set("port", process.env.PORT || "8080");

// Create Server
let server = app.listen(app.settings.port, () => {
  console.log("Server listening on", app.settings.port);
});
