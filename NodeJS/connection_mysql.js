var mysql2 = require('mysql2');

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "2424"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


// see my login and ragistration form .