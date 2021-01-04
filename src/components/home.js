import React from 'react';
import { PageHeader, Input } from 'antd';
import BookGrid from './bookgrid';

const { Search } = Input;

/**
 * Component for displaying the library's main content in the Home page.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
function Home(props) {
  return (
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
  );
}

export default Home;