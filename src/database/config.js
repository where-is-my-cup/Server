var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "cupholder.cnetgtmn8zrm.ap-northeast-2.rds.amazonaws.com",
  user: "nudge411",
  password: "klmhat32hx",
  port: 30226,
  database: "nudge411"
});
connection.connect();
module.exports = connection;
