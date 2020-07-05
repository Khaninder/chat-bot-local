var mysql = require('mysql');

let connection = mysql.createConnection({
    host: '35.237.254.157',
    user: 'root',
    password: '4atboT',
    database: 'user'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});