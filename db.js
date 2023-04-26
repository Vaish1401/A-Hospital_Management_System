const mysql = require('mysql2');
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Himazno@12092001",
    database:"hospital management system"
})

module.exports = db;