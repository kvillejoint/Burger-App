//require connection.js for connecting to mysql server
let connection = require("./connection.js");

//function for question marks
function addQuestionMark(num) {
    var arr = [];
    for (var i=0; i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function setEqualValue(obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    }
    return arr.toString();
}
//object for sql statement functions
let orm = {
    //functon to select All from info
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    //function to insert one value into table
    //needs upating for items passed into callback function
    create: function(table, cols, values, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += addQuestionMark(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },     
    //function to update one user input value
    //needs upating for items passed into callback function
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
        //needs updating for items passed into braces
        connection.query(queryString,        function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;