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

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Header>
        <Nav />
      </Header>
      <Content>
        <Switch>
          <Route path="/account" children={<Account />} />
          <Route path="/register" children={<Register />} />
          <Route path="/login" children={<Login />} />
          <Route path="/book/:id" children={<Book />} />
          <Route path="/" children={<Home />} />
        </Switch>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Created by Pranali Deshmukh</Footer>

    </Router>
  );
}

export default App;
