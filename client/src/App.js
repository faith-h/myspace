import FetchUser from './components/FetchUser'
import Home from './components/Home'
import Login from './components/Login'
import MyFriends from './components/MyFriends'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Posts from './components/Posts'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container, } from 'semantic-ui-react'

const App = () => (
  <>
  <Navbar />
  <Container>
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <ProtectedRoute exact path="/posts" component={Posts} />
        <ProtectedRoute exact path="/my_friends" component={MyFriends} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </Container>
  </>
);

export default App;