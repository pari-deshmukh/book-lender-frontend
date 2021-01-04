import React from 'react';
import { Col, Row } from 'antd';
import BookCard from './bookcard';

/**
 * Component for listing books in a grid layout.
 *
 * @component
 * @example
 * return (
 *   <LibGrid books="data"/>
 * )
 */
class LibGrid extends React.Component {

  render() {
    if (this.props.books.length<0) {
      return <h3>Loading books...</h3>
    } else  if (this.props.books.length===0) {
      return <h3>No books were found in the database!</h3>
    }
    const cardList = this.props.books.map(book => {
      return (
        <div style={{padding:"10px"}} key={book.ID}>
          <Col span={6}>
            <BookCard {...book} />
          </Col>
        </div>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>
    );
  }
}

export default LibGrid;