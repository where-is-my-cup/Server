var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "nudge411",
  password: "klmhat",
  port: 3306,
  database: "cupholder"
});
connection.connect();
module.exports = connection;
