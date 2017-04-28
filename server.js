// Require npm packages
var express = require ("express");
var bodyParser = require("body-parser");

// Creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3009;

// Using body parser to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router
// Require api routes
require("./app/routing/apiRoutes")(app);

// Require html routes
require("./app/routing/htmlRoutes")(app);

// Listener
// Starting express server
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});