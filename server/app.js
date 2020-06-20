const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
// const ioServer = require("./io")
const userRoutes = require("./routes/user")
const protectRoutes = require("./routes/protect")
const expressjwt = require("express-jwt")
const config = require("config")
const chat = require("./chat")

const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	console.log("404")
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	//set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}
	// render the error page
	res.status(err.status || 500)
	res.json({
		status: err.status,
		error: err,
	})
})

chat(io)

server.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`)
})
