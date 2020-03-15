import React, { useEffect } from "react"
import { useChatRoom, useAuth } from "../hooks"
import Message from "./Message"
import MessageForm from "./MessageForm"

export default props => {
  const { get } = useChatRoom()
  const { logout } = useAuth()

  useEffect(() => {
    get()
  })

  return (
    <div>
      <Message />
      <MessageForm />
      <button onClick={e => logout()}>Log out</button>
    </div>
  )
}
