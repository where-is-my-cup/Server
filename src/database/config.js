var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "jjh",
  password: "wlsgur402",
  port: 3306,
  database: "cupholder"
});
connection.connect();
module.exports = connection;
