import React, { useState } from "react"
import { useChat } from "../../hooks"
import { Form, Input } from "semantic-ui-react"

export default props => {
  const { add } = useChat()
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    add({
      user: props.username,
      msg: message,
      timestamp: new Date().getTime()
    })
  }

  return (
    <div className="footer">
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={e => setMessage(e.target.value)}
          action="Submit"
          placeholder="Enter your message..."
        />
      </Form>
    </div>
  )
}
