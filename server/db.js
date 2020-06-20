const mysql = require("mysql")
const config = require("config")

// for accessing AWS database and deploying
// const pool = mysql.createPool({
// 	connectionLimit: 25,
// 	host: process.env.host || config.get("awsDB.host"),
// 	user: process.env.user || config.get("awsDB.user"),
// 	password: process.env.password || config.get("awsDB.password"),
// 	database: process.env.database || config.get("awsDB.database"),
// })

// for accessing local database
const pool = mysql.createPool({
	connectionLimit: 25,
	host: config.get("db.host"),
	user: config.get("db.user"),
	password: config.get("db.password"),
	database: config.get("db.database"),
})

module.exports = pool
