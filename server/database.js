const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'private',
    user : 'root',
    password : ''
})


connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to the MySQL server');
    }

})

module.exports = connection;