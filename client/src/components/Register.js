import React, { useState } from "react"
import { useRegister } from "../hooks"
import { Link } from "react-router-dom"
import validator from "validator"

export default props => {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const { reg } = useRegister()

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
      reg(username, password)
    }
  }

  return (
    <div className="registerDiv">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          id="username"
          type="text"
          value={username}
          className={usernameError ? "errorBox" : ""}
          onChange={e => setUsername(e.target.value)}
          placeholder="Select a username"
        />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          className={passwordError ? "errorBox" : ""}
          onChange={e => setPassword(e.target.value)}
          placeholder="Create a password"
        />
        <label className={confirmError ? "error" : ""} htmlFor="confirm">
          Confirm Password {confirmError && confirmError}
        </label>
        <input
          id="confirm"
          type="password"
          value={confirm}
          className={confirmError ? "errorBox" : ""}
          onChange={e => setConfirm(e.target.value)}
          placeholder="Re-enter password"
        />
        <button type="submit">Register</button>
      </form>
      <div className="logoutDiv">
        <Link to="/login">Log in</Link>
      </div>
    </div>
  )
}
