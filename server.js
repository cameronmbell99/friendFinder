//Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js")

// Setting up Express App
var app = express();
var PORT = process.env.PORT;

// Handles Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

//display arrays
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

//starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});