import React from "react"
import { useChat } from "../../hooks"

export default props => {
  const { messages } = useChat()

  return (
    <div>
      {messages.map((msg, i) => (
        <p key={"message" + i}>
          {msg.user}: {msg.msg} <span>{msg.timestamp}</span>
        </p>
      ))}
    </div>
  )
}
