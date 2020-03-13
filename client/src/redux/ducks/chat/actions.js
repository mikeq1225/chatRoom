import { NEW_MESSAGE } from "./definitions"

export function addMessage(message) {
  return {
    type: NEW_MESSAGE,
    payload: message
  }
}
