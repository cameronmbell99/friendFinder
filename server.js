// Dependencies
var express = require("express");
var path = require("path");
var routes = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");

// Setting up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Handles Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Switching html pages
require("./app/routing/apiRoutes.js")(app);

// Getting/Setting friends obj items
require("./app/routing/htmlRoutes.js")(app, path);


// starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});