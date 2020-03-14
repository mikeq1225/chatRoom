import React, { useState } from "react"
import { useAuth } from "../hooks"

export default props => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { login, logout } = useAuth

  function handleLogin(e) {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div>
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
      <button onClick={e => logout()}>Log out</button>
    </div>
  )
}
