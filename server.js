//Dependencies
var express = require("express");
var path = require("");

// Setting up Express App
var app = express();
var PORT = 3000;

// Handles Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [{
    customerName: "Justin",
    customerPhone: 000 - 000 - 0000,
    customerEmail: "the@something.com",
    customerID: "something"
}]

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

//display arrays
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
});

//starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});