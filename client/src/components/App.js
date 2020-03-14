import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import AuthRoute from "../lib/AuthRoute"
import { AuthProvider, AuthRoute } from "../lib/Auth"
import MessageForm from "./MessageForm"
import Message from "./Message"
import Login from "./Login"
// import ChatRoom from "./ChatRoom"

export default props => {
  return (
    <AuthProvider redirectUrl="/signup">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <AuthRoute exact path="/" component={MessageForm} />
          <AuthRoute exact path="/" component={Message} />
          {/* <Message /> */}
        </div>
      </Router>
    </AuthProvider>
  )
}
