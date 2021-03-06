import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { AuthProvider, AuthRoute } from "react-auth"
import "semantic-ui-css/semantic.min.css"

const Login = React.lazy(() => import("./auth/Login"))
const ChatRoom = React.lazy(() => import("./chat/ChatRoom"))
const Register = React.lazy(() => import("./auth/Register"))

export default props => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/chatroom/general" />}
            />
            <AuthRoute path="/chatroom/:roomname" component={ChatRoom} />
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  )
}
