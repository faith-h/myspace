import axios from 'axios'
import React from 'react'
import { Form, Icon, Container } from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: '', body: '', author: '' }
  
  handleChange = (e) => {
    const { target: {name, value } } = e
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger
    const post = {...this.state}
    const { id } = this.props
    if (id) {
      axios.put(`/api/posts/${id}`, post)
        .then( res => {
          this.props.update(res.data)
          this.props.toggleForm()
        })
    } else {
      const post = {...this.state}
      const { add, toggleForm } = this.props
      axios.post(`/api/posts`, post)
      .then( res => {
        add(res.data)
        toggleForm()
      })
    }
  }

  render() {
    const { title, body, author } = this.state

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          name="title"
          placeholder="Post Title"
          required
          autoFocus
          value={title}
          onChange={this.handleChange}
          />
                    <Form.Input
          name="author"
          placeholder="Author"
          required
          autoFocus
          value={author}
          onChange={this.handleChange}
          />
          <Form.TextArea
          name="body"
          placeholder="Body"
          required
          autoFocus
          value={body}
          onChange={this.handleChange}
          />
        <Form.Button color='green'>
          <Icon name='send' />
          Submit
        </Form.Button>
        </Form>
      </Container>
    )
  }
}

export default PostForm