import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/account">Account</Link></Menu.Item>        
      </Menu>
    </>
  );
}

export default Nav; 