import React, { useState } from "react"
import { useAuth } from "react-auth"
import { Link } from "react-router-dom"
import "../../styles/Login.scss"
import { Button, Form, Input } from "semantic-ui-react"

export default (props) => {
	const [username, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const { signin } = useAuth()

	function handleLogin(e) {
		e.preventDefault()
		signin(username, password).then((profile) => {
			props.history.push("/chatroom/general")
		})
	}

	return (
		<div className="container">
			<h1>ChatRoom</h1>
			<div className="loginDiv">
				<Form onSubmit={handleLogin}>
					<Input
						type="text"
						value={username}
						onChange={(e) => setUserName(e.target.value)}
						placeholder="Enter your username"
					/>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<Button type="submit">Log in</Button>
				</Form>
				<div className="linkDiv">
					<p>New user?</p>
					<Link to="/register">Register Here</Link>
				</div>
			</div>
		</div>
	)
}
