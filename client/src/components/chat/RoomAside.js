import React from "react"
import { useAuth } from "react-auth"
import { Icon, Button, Divider, Menu } from "semantic-ui-react"

export default props => {
  const { signout, profile } = useAuth()

  return (
    <aside>
      <div className="userProfile">
        <div className="profileDiv">
          <Icon name="user secret" color="grey" size="big" />
          <p className="user">{profile.username}</p>
          <p className="status"></p>
        </div>
        <Button basic inverted color="grey" onClick={e => signout()}>
          Log out
        </Button>
      </div>
      <Divider />
      <Menu className="menu" inverted secondary vertical color="grey">
        <Menu.Item name="general" active={true} />
      </Menu>
    </aside>
  )
}
