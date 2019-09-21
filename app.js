let express = require("express");
let app = express(); //Creates the Express Application
// Path Library to handle any OS directory
let path = require("path");

// Using Middleware to handle static file paths
// It serves it out to public access, unlike other file(s)/folder(s) which are inaccessible.
app.use(express.static("public"));

// Handling GET requests with Express

// Root URL
app.get("/", (req, res) => {
  res.send("Hello, this is express!");
});

// /about URL - w/ Path
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/about.html"));
});

// /contact /contact-us URL - w/ Path
app.get(["/contact", "/contact-us"], (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/contact.html"));
});

// /home.html redirecting to file - index.html - w/ CODE 301
app.get("/home.html", (req, res) => {
  res.redirect(301, "/index.html");
});

// If the routes above don't resolve anything.. 404 it is!
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/public/pages/404.html"));
});

// Assign environment port or 8080
app.set("port", process.env.PORT || "8080");

// Create Server
let server = app.listen(app.settings.port, () => {
  console.log("Server listening on", app.settings.port);
});
