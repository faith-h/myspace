import axios from 'axios'
import PostForm from './PostForm'
import PostList from './PostList'
import React from 'react'
import { Header, Button, Icon, Grid } from 'semantic-ui-react'

// TODO :
// edit functionality

class Posts extends React.Component {
  state = { posts: [], toggle: false }

  componentDidMount() {
    axios.get(`/api/posts`)
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  toggleForm = () => this.setState({ toggle: !this.state.toggle})

  addPost = (data) => {
    this.setState({ posts: [data, ...this.state.posts] })
  }

  update = (data) => {
    this.setState({ post: data })
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: posts.filter( p => p.id !== id) })
      })
  }

  render() {

    return(
      <>
      <br />
      <Header as='h1' align='center'> Posts </Header>
      <Grid>
        <Grid.Column textAlign='center'>
        <Button color="green" onClick={ () => this.toggleForm()}>
        <Icon name="add" />
        New Post
      </Button>
      {this.state.toggle ?
      <>
        <br />
        <br />
        <PostForm posts={this.state.posts} add={this.addPost} toggle={this.state.toggle} toggleForm={this.toggleForm} />
        </>
        : 
        null
      }
      </Grid.Column>
      </Grid>
      <PostList update={this.update} posts={this.state.posts} deletePost={this.deletePost} />
      </>
    )
  }
}

export default Posts
