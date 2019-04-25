let mysql=require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nan',
  password : 'nan',
  database : 'codehome',
  multipleStatements: true
});
 
connection.connect();
module.exports=connection;
