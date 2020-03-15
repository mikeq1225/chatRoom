const router = require("express").Router()

router.get("/chatroom", (req, res, next) => {
  res.json({
    foo: "bar"
  })
})

module.exports = router
