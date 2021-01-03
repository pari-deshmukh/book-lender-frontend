
import { PageHeader, Input } from 'antd';
import BookGrid from './bookgrid';

const { Search } = Input;

function Home(props) {
  return (
    <>
      <div className="site-layout-content">
        <div style={{ padding: '2% 20%' }}>
          <Search placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={null}/>
          <PageHeader className="site-page-header"
            title="Public Library"
            subTitle="Welcome to the Public Library."/>
        </div>  
        <BookGrid />
      </div>
    </>  
  );
}

export default Home;