const mysql = require("mysql2")

const db = mysql.createPool({
host:"localhost",
user:"root",
password:"Shahd@74",
database:"resto"
});

db.getConnection(()=>{
   console.log("connect to db successfuly");
})
module.exports=db;