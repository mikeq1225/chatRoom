const mysql = require("mysql")

const pool = mysql.createPool({
  connectionLimit: 25,
  host: "localhost",
  user: "",
  password: "",
  database: ""
})

module.exports = pool
