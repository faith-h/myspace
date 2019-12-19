import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, Grid } from 'semantic-ui-react'

class Home extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get(`/api/friends`)
      .then(res => this.setState({ friends: res.data }) )
  }

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
      .then( () => this.setState({ friends: friends.filter( f => f.id !== id ) }) )
  }

  downVote = (id) => {
    const { friends } = this.state
    this.setState({ friends: friends.filter( f => f.id !== id ) })
  }

    render() {
      const friend = this.sample();

      if (friend) {
      return (
        <div>
          <br />
          <Header as='h1' align='center'> MySpace </Header>
          <Grid>
          <Grid.Column textAlign='center'>
          <Link to='/my_friends'>
            <Button color="blue">
              My Friends
            </Button>
            </Link>
            <Link to='/posts'>
            <Button color="blue" align='center'>
              My Posts
            </Button>
            </Link>
            </Grid.Column>
            </Grid>
          <br />
          <Header as='h3'> People you may know: </Header>
          <Card key={ friend.id }>
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
            <Button color="green" icon basic onClick={ () => this.upVote(friend.id)}>
                <Icon name="plus" /> Add to Friends
                </Button>
              <Button color="red" icon basic onClick={ () => this.downVote(friend.id)}>
                <Icon name="minus" /> Hide
              </Button>
            </Card.Content>
          </Card>
        </div>
      )
      } else {
        return <> <br /> <Header as='h1' textAlign='center'> MySpace </Header> </>
    }
  }
}


export default Home;