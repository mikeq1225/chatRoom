const express = require("express")
const router = express.Router()
const conn = require("../db")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")
const randomString = require("../utils/randomstring")

router.post("/register", (req, res, next) => {
	const user = req.body.username
	const salt = randomString(20)
	const password = sha512(req.body.password + salt)

	const checkUser = `SELECT count(1) as count FROM users WHERE username = ?`
	conn.query(checkUser, [user], (err, results, fields) => {
		if (results[0].count > 0) {
			res.status(409).json({
				message: "Username already exists",
			})
		} else {
			const sql = `INSERT INTO users (username,password,salt) VALUES(?,?,?)`
			conn.query(sql, [user, password, salt], (err1, results1, fields1) => {
				res.json({
					message: "user added successfully",
				})
			})
		}
	})
})

router.post("/login", (req, res, next) => {
	const username = req.body.username
	const password = req.body.password

	const getSQL = `SELECT salt, username, password FROM users WHERE username = ?`
	conn.query(getSQL, [username], (saltErr, saltResults, saltFields) => {
		if (saltResults.length > 0) {
			const salt = saltResults[0].salt
			const userPassword = saltResults[0].password
			if (sha512(password + salt) === userPassword) {
				//LOG IN
				const token = jwt.sign(
					{ username: username, project: "chatRoom" },
					config.get("secret")
				)
				res.json({
					token: token,
				})
			} else {
				res.status(401).json({
					message: "Invalid username or password",
				})
			}
		} else {
			res.status(401).json({
				message: "Invalid username or password",
			})
		}
	})
})

module.exports = router
