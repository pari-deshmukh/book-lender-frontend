import React from 'react';
import { Layout } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Nav from './components/nav';
import Account from './components/account';
import Register from './components/register';
import Login from './components/login'; 
import Home from './components/home';
import Book from './components/book';
import AddBook from './components/addbook';

import UserContext from './contexts/user';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {loggedIn: false}
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    console.log("User is now being set on the context");
    user.loggedIn = true;
    this.setState({user:user});
  }

  logout() {
    this.setState({user: {loggedIn:false}});
  }

  render () {
    const context = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    };

    return (
      <UserContext.Provider value={context}>
        <Router>
          <Header>
            <Nav />
          </Header>

          <Content>
            <Switch>
              <Route path="/account" children={<Account />} />
              <Route path="/books/add" children={<AddBook />} />
              <Route path="/register" children={<Register />} />
              <Route path="/login" children={<Login />} />
              <Route path="/book/:id" children={<Book />} />
              <Route path="/" children={<Home />} exact />
            </Switch>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Created by Pranali Deshmukh</Footer>

        </Router>
      </UserContext.Provider>  
    );
  }
}

export default App;
