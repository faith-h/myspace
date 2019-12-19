import axios from 'axios'
import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'

class MyFriends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get(`/api/my_friends`)
      .then( res => this.setState({ friends: res.data }) )
  }

  render() {
    const { friends } = this.state

    return(
      <>
      <br />
      <Header as='h1' align='center'> Your Friends </Header>
      <br />
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
        <Card key={friend.id}>
          <Image src={friend.avatar} />
          <Card.Content>
            <Card.Header>
              { friend.name }
            </Card.Header>
          </Card.Content>
        </Card>
        )}
      </Card.Group>
      </>
    )
  }
}

export default MyFriends