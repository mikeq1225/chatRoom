import React, { useState } from "react"
import { api, useAuth } from "react-auth"
import { Link } from "react-router-dom"
import validator from "validator"
import { Button, Form, Input } from "semantic-ui-react"
import "../../styles/Login.scss"

export default (props) => {
	const { signin } = useAuth()
	const [username, setUsername] = useState("")
	const [usernameError, setUsernameError] = useState("")
	const [password, setPassword] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [confirm, setConfirm] = useState("")
	const [confirmError, setConfirmError] = useState("")

	function handleRegister(e) {
		e.preventDefault()
		let valid = true

		if (!validator.isAlpha(username, "en-US")) {
			valid = false
			setUsernameError(` -- Can't be blank & can only contain letters`)
		} else {
			setUsernameError("")
		}

		if (!validator.isAlphanumeric(password, "en-US")) {
			valid = false
			setPasswordError(` -- Can't be blank`)
		} else {
			setPasswordError("")
		}

		if (!validator.equals(confirm, password)) {
			valid = false
			setConfirmError(` -- Must match password`)
		} else {
			setConfirmError("")
		}

		if (valid) {
			api.post("/register", { username, password }).then((data) => {
				signin(username, password).then(() => {
					props.history.push("/chatroom/general")
				})
			})
		}
	}

	return (
		<div className="container">
			<h1>Register</h1>
			<div className="registerDiv">
				<Form onSubmit={handleRegister}>
					<Form.Field>
						<label className={usernameError ? "error" : ""} htmlFor="username">
							Username {usernameError && usernameError}
						</label>
						<input
							id="username"
							type="text"
							value={username}
							className={usernameError ? "errorBox" : ""}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Select a username"
						/>
					</Form.Field>
					<Form.Field>
						<label className={passwordError ? "error" : ""} htmlFor="password">
							Password {passwordError && passwordError}
						</label>
						<input
							id="password"
							type="password"
							value={password}
							className={passwordError ? "errorBox" : ""}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Create a password"
						/>
					</Form.Field>
					<Form.Field>
						<label className={confirmError ? "error" : ""} htmlFor="confirm">
							Confirm Password {confirmError && confirmError}
						</label>
						<input
							id="confirm"
							type="password"
							value={confirm}
							className={confirmError ? "errorBox" : ""}
							onChange={(e) => setConfirm(e.target.value)}
							placeholder="Re-enter password"
						/>
					</Form.Field>
					<Button type="submit">Register</Button>
				</Form>
				<div className="linkDiv">
					<p>Existing user?</p>
					<Link to="/login">Log in</Link>
				</div>
			</div>
		</div>
	)
}
