// Dependencies
// ===================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up Express App
// =====================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//  Data Objects here (Data)
// =======================================




// Routes
// =======================================


// Basic Route 
app.get("/", function(req, res ) {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});




// Starts the server to begin listening
// =======================================

app.listen(PORT, function() {
	console.log("App listening on Port" + PORT);
});

