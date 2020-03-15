import React, { useState } from "react"
import { useAuth } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/Login.css"

export default props => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  function handleLogin(e) {
    e.preventDefault()
    login(username, password)
    // .then(() => {
    //   props.history.push("/chatroom")
    // })
  }

  return (
    <div className="loginDiv">
      <h1>ChatRoom</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={e => setUserName(e.target.value)}
          placeholder="Enter your username"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log in</button>
      </form>
      <div className="linkDiv">
        <p>Not a user?</p>
        <Link to="/register">Register Here</Link>
        <Link to="/chatroom">ChatRoom</Link>
      </div>
    </div>
  )
}
