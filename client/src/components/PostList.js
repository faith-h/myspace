import PostForm from './PostForm'
import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class PostList extends React.Component {
  state = { toggle: false }

  toggleForm = () => this.setState({ toggle: !this.state.toggle})
  
  render() {

    return (
      <>
      <br />
      <br />
      <Card.Group centered>
        { this.props.posts.map( post =>
        <Card key={post.id}>
          <Card.Content>
            <Card.Header>
              { post.title }
            </Card.Header>
            <Card.Meta>
              { post.author}
            </Card.Meta>
            <Card.Description>
              {post.body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button color="blue" size="small" onClick={() => this.toggleForm()}>
              Edit Post
            </Button>
            {this.state.toggle ?
            <>
            <br />
            <br />
            <PostForm id={post.id} update={this.props.update} toggle={this.state.toggle} toggleForm={this.toggleForm} />
            <br />
            </>
            : 
            null
            }
            <Button color='red' size="small" onClick={ () => this.props.deletePost(post.id)}>
              Delete Post
            </Button>
          </Card.Content>
        </Card>
        )}
        </Card.Group>
        </>
    )
  }
}

export default PostList