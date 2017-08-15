//Require dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const path = require("path");
const orm = require("./config/orm.js");
const mysql = require("mysql");

//server setup
const app = express();
const PORT = 3014;

//routes setup
const routes = require("./controllers/burgers_controller.js")
app.use("/", routes);

app.use(express.static(path.join(__dirname, "/public")));

//handlebars setup
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs ({ 
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});
