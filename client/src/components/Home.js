import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react'

// TODO: change downvote/upvote to add/remove friends

class Home extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get(`/api/user/:user_id/friends`)
      .then(res => this.setState({ cars: res.data }) )
  }
  // TODO: pass in user id here to render friends ^ 

  sample = () => {
    const { friends } = this.state

    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length)
      return friends[index]
    } else {
      return null
    }
  }

  upVote = (id) => {
    const { friends } = this.state
    axios.put(`/api/friends/${id}`)
    // ^ friends.update, may not be correct id
      .then( () => this.setState({ friends: friends.filter( f => f.id != id ) }) )
  }

  downVote = (id) => {
    const { friends } = this.state
    this.setState({ friends: friends.filter( f => f.id != id ) })
  }

    render() {
      const friend = this.sample();

      if (friend) {
      return (
        <div>
          <br />
          <Header as='h1'> MySpace </Header>
          <br />
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Card.Description>
                { friend.bio }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={ () => this.downVote(friend.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={ () => this.upVote(friend.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to='/my_friends'>
            <Button color="blue">
            </Button>
          </Link>
        </div>
      )
      } else {
        return <Header textAlign='center'> No More Friends </Header>
    }
  }
}

export default Home;