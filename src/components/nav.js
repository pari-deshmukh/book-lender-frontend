import { Menu } from 'antd';

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
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Genres</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
        <Menu.Item key="4">Account</Menu.Item>        
      </Menu>
    </>
  );
}

export default Nav; 