import React from "react"
import Message from "./Message"
import MessageForm from "./MessageForm"
import Header from "./Header"

export default props => {
  return (
    <main>
      <Header />
      <Message />
      <MessageForm />
    </main>
  )
}
