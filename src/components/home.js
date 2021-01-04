import React from 'react';
import { PageHeader, Input } from 'antd';
import LibGrid from './libgrid';
import { status, json } from '../utilities/requestHandlers';

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
class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        books: []
      }
      this.onSearch = this.onSearch.bind(this);
  }
  
  onSearch = (searchterm) => {
    console.log('Received search term: ', searchterm);
    fetch('http://localhost:3030/api/v1/books/search?term='+searchterm)
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ books: data })
    })
    .catch(err => console.log("Error fetching books"));
  };

  componentDidMount() {
    fetch('http://localhost:3030/api/v1/books')
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ books: data })
      console.log("loaded");
    })
    .catch(err => console.log("Error fetching books"));
  }
  
  render() {
    return (
        <div className="site-layout-content">
          <div style={{ padding: '2% 20%' }}>
            <Search placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={this.onSearch}/>
            <PageHeader className="site-page-header"
              title="Public Library"
              subTitle="Welcome to the Public Library."/>
          </div>  
          <LibGrid books={this.state.books}/>
        </div>
    );
  }
}

export default Home;