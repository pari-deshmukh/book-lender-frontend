import { Layout } from "antd";
import './App.css';
import Nav from './components/nav';
import Home from './components/home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">

      <Header>
        <Nav />
      </Header>

      <Content>
        <Home />
      </Content>

      <Footer style={{ textAlign: 'center' }}>Created by Pranali Deshmukh</Footer>

    </Layout>
  );
}

export default App;
