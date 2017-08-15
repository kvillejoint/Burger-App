//MySql connection setup
let mysql = require("mysql");

let connection = mysql.createConnection({
    port: 3014,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
});

//establish connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

//export connection for use
module.exports = connection;