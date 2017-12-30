// Dependencies
// ===================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");
var serveStatic = require('serve-static')




// Sets up Express App
// =====================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname + '/public')));

//  Data Objects here (Data)
// =======================================




// Routes
// =======================================


// Basic Route 
app.get("/", function(req, res ) {
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "./public/survey.html"));
});


// Starts the server to begin listening
// =======================================

app.listen(PORT, function() {
	console.log("App listening on Port" + PORT);
});

