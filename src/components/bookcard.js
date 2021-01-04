import React from 'react';
import { Card } from 'antd';
// import BookAvailability from './bookavailabiity';
import NavImage from './navimage';

const { Meta } = Card;

/**
 * Component to display a book within a Card wrapper..
 *
 * @component
 * @example
 * return (
 *    <BookCard {...book} />
 * )
 */
class BookCard extends React.Component {

  render() {
    const bookID = this.props.ID;
    return (
      <Card
        style={{ width: 320 }}
        cover={<NavImage alt={`Book ${bookID}`} src={this.props.frontCoverImageURL} to={`/book/${bookID}`} />}
        hoverable={true}>
        <Meta title={this.props.title} description={this.props.summary} />
        <div>{this.props.availabilityStatus}</div>
      </Card>
    );
  }
}

export default BookCard; 
