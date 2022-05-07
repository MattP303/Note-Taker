// Required NPM modules
const express = require("express");
const fs = require("fs");

// Specify route location
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var app = express();
var PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});