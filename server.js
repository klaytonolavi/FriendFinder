var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// variable for deploying on heroku, will use heroku port rather than localport once its hosted. otherwise just using local 3001 PORT.
var PORT = process.env.PORT || 3002;

// body parser to take in json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require to get the routes from other files 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});