// Dependencies
// ===================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");
var serveStatic = require('serve-static')
var clear = require('clear');

// clear console
clear();

// Sets up Express App
// =====================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname + '/public')));


// Routes
// =======================================
require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);



// Starts the server to begin listening
// =======================================

app.listen(PORT, function() {
	console.log("App listening on Port" + PORT);
});

