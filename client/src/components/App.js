import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AuthRoute from "../lib/AuthRoute"
import ChatRoom from "./ChatRoom"
import Login from "./Login"

export default props => {
  return (
    <Router>
      <div>
        <AuthRoute exact path="/" component={ChatRoom} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}
