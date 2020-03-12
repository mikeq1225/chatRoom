import React, { useState } from "react"
import io from "socket.io-client"

export default props => {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState([])

  const socket = io.connect("http://10.255.255.11:3001")
  socket.on("message", msg => {
    setMessages([...messages, msg])
  })

  function handleClick(e) {
    e.preventDefault()
    socket.emit("message", text)
    setText("")
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      <div>
        {messages.map((each, i) => (
          <p key={"each" + i}>{each}</p>
        ))}
      </div>
    </div>
  )
}
