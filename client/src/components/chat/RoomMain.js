import React from "react"
import Message from "./Message"
import MessageForm from "./MessageForm"
import Header from "./Header"

export default props => {
  return (
    <main>
      <Header room={props.room} />
      <Message />
      <MessageForm room={props.room} />
    </main>
  )
}
