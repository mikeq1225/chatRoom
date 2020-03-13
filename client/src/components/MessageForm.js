import React, { useState } from "react"
import { useChat } from "../hooks"

export default props => {
  const { add } = useChat()
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (name !== "" && message !== "") {
      add({
        name,
        message
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
