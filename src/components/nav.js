import React from 'react';
import {useContext} from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import UserContext from '../contexts/user';

/**
 * Component for displaying the library's navigation menu.
 *
 * @component
 * @example
 * return (
 *   <Nav />
 * )
 */
function Nav(props) {
  const context = useContext(UserContext);
  const loggedIn = context.user.loggedIn;
  let LoginNav;
  if (!loggedIn) {
    LoginNav = (
      <>
      <Menu.Item key="2">
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/login">Login</Link>
      </Menu.Item>
      </>
    )
  } else {
    LoginNav = (
      <>
      <Menu.Item key="2"><Link to="/account">Account</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/books/add">Add Book</Link></Menu.Item>
      <Menu.Item key="4" onClick={context.logout}>
        <Link to="/">Logout</Link>
      </Menu.Item>
      </>
    )
  }
  return (
    <>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      {LoginNav}
    </Menu>
    </>
  );
}

export default Nav;