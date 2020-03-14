import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AuthRoute from "../lib/AuthRoute"
import MessageForm from "./MessageForm"
// import Message from "./Message"
import Login from "./Login"
import ChatRoom from "./ChatRoom"

export default props => {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <AuthRoute exact path="/" component={ChatRoom} />
        <AuthRoute path="chat" component={MessageForm} />
        {/* <Message /> */}
      </div>
    </Router>
  )
}
