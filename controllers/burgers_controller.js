const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//route for index page, redirects user to /burgers url
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/burgers", function(req, res) {
    //function for selecting all values
    burger.all(function(burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

//route to post onto index page
router.post("/burgers/create", function(req, res) {
    //create new burger based on burger name
    burger.create(req.body.burger_name, function(result) {
        //redirect back to index using handlebars - this displays updated data
        res.redirect("/");
    });
});

//route to post onto index page
router.put("/burgers/update", function(req, res) {
    //update based on burger id
    burger.update(req.body.burger_id, function(result) {
        //redirect back to index using handlebars - this displays updated data
        res.redirect("/");
    });
});

module.exports = router;