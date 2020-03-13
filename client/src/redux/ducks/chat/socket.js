import io from "socket.io-client"
import store from "../../store"
import { addMessage } from "./actions"

const dispatch = store.dispatch
const socket = io.connect("http://10.255.255.11:3001")

socket.on("message", msg => dispatch(addMessage(msg)))

export default socket
