import io from "socket.io-client"

// const ip = "http://192.168.1.143:3001"
const ip = "http://localhost:3001"

const socket = io.connect(ip)

export default socket
