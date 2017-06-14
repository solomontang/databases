var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});
dbConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected');
  // console.log('models messages.get');
  dbConnection.query('SELECT * FROM messages', function(err, result) {
    if (err) {
      throw err;
    } 
    console.log("Result: " + result.length);
  });
});

module.exports = dbConnection;

// dbConnection.end();
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat". 


