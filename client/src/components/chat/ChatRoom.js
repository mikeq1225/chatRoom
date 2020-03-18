import React from "react"
import { useAuth } from "react-auth"
import Message from "./Message"
import MessageForm from "./MessageForm"
import MessageAside from "./MessageAside"
import "../../styles/chatroom.scss"

export default props => {
  const { profile } = useAuth()

  return (
    <div className="grid">
      <MessageAside />
      <div>
        <Message />
        <MessageForm username={profile.username} />
      </div>
    </div>
  )
}
