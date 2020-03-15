import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AuthRoute from "../lib/AuthRoute"
import ChatRoom from "./ChatRoom"
import Login from "./Login"
import Register from "./Register"

export default props => {
  return (
    <Router>
      <div>
        <AuthRoute exact path="/chatroom" component={ChatRoom} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )
}
