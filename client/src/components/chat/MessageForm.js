import React, { useState, useRef } from "react"
import { useChat } from "../../hooks"
import { useAuth } from "react-auth"

export default (props) => {
	const { add } = useChat()
	const [message, setMessage] = useState("")
	const { profile } = useAuth()
	const [fontColor, setFontColor] = useState("#eeeeee")
	const [fontSize, setFontSize] = useState("14")
	const inputRef = useRef(null)

	function handleSubmit(e) {
		e.preventDefault()
		add({
			user: profile.username,
			msg: message,
			timestamp: new Date().getTime(),
			fontColor: fontColor,
			fontSize: fontSize,
		})

		setMessage("")
		inputRef.current.focus()
	}

	function keyUp(e) {
		if (e.key === "Enter") {
			handleSubmit(e)
		}
	}

	return (
		<div className="footer">
			<form onSubmit={handleSubmit}>
				<div className="inputDiv">
					<input
						style={{ color: fontColor, fontSize: fontSize + "px" }}
						className="messageText"
						value={message}
						type="text"
						onChange={(e) => setMessage(e.target.value)}
						placeholder={"Send a message to " + props.room + "..."}
						onKeyUp={keyUp}
						ref={inputRef}
					/>
					<div>
						<input
							className="messageColor"
							type="color"
							value={fontColor}
							onChange={(e) => setFontColor(e.target.value)}
						/>
						<input
							className="messageSize"
							type="text"
							value={fontSize}
							onChange={(e) => setFontSize(e.target.value)}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}
