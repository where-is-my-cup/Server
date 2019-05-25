var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "where-is-my-cup2.cr1lyo5ykzvi.us-east-2.rds.amazonaws.com",
  user: "nudge411",
  password: "klmhat32hx",
  port: 30226,
  database: "database_cupholder"
});
connection.connect();
module.exports = connection;
