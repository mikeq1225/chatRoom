const express = require("express")
const router = express.Router()
const conn = require("../db")

router.post("/login", (req, res, next) => {
  const user = req.body.username
  const password = req.body.password

  const sql = "SELECT * FROM usersDB where username=? AND password = ?"
  conn.query(sql, [user, password], (err, results, fields) => {
    res.json({
      users: results.name
    })
  })
})

module.exports = router
