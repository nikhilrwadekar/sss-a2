let express = require("express");
let app = express(); //Creates the Express Application
// Path Library to handle any OS directory
let path = require("path");

// Handling GET requests with Express

// Root URL
app.get("/", (req, res) => {
  res.send("Hello, this is express!");
});

// /about URL - w/ Path
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/about.html"));
});

// Assign environment port or 8080
app.set("port", process.env.PORT || "8080");

// Create Server
let server = app.listen(app.settings.port, () => {
  console.log("Server listening on", app.settings.port);
});
