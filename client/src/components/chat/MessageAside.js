import React from "react"
import { useAuth } from "react-auth"

export default props => {
  const { signout } = useAuth()

  return (
    <aside>
      <button onClick={e => signout()}>Log out</button>
    </aside>
  )
}
