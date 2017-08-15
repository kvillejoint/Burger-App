const orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //creating new burgers by name and devoured status, entering default devoured status of false to new burger
    create: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [name, false], cb);
    },
    //update burgers by id
    update: function(id, cb) {
        let condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }  
};

module.exports = burger;