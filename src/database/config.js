var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jayajung!",
  port: 3306,
  database: "cupholder"
});
connection.connect();
module.exports = connection;
