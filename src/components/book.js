import React from 'react';
import { withRouter } from 'react-router';
import { Image, Row, Col, Typography } from 'antd'
import BookIcon from './bookicon';
import { status, json } from '../utilities/requestHandlers';

const { Title, Paragraph } = Typography;

/**
 * Component for displaying a Book's details.
 *
 * @component
 * @example
 * return (
 *   <Book />
 * )
 */
class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: undefined
    }
    this.toggleLike = this.toggleLike.bind(this);
    this.togglePinned = this.togglePinned.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id; // available using withRouter()

    fetch(`http://localhost:3030/api/v1/books/${id}`)
    .then(status)
    .then(json)
    .then(book => {
      this.setState({book:book})
    })
    .catch(err => {
      console.log(`Fetch error for book ${id}`)
    });
  }

  toggleLike(isSelected) {
    // Implement same functionality as in <BookCard>
    // To avoid repetition (DRY principle) the handler for this
    // and for <BookCard> should be defined in a single place
    // and imported into both components.
    console.log('like was toggled');
  }

  togglePinned(isSelected) {
    // Implement same functionality as in <BookCard>
    // To avoid repetition (DRY principle) the handler for this
    // and for <BookCard> should be defined in a single place
    // and imported into both components.
    console.log('pin was toggled');
  }

  render() {
    if (!this.state.book) {
      return <h3>Loading book...</h3>
    }
    const book = this.state.book;

    const icons = (
      <div>
        Likes : <BookIcon type="like" count={book.likes} selected={book.liked}
          handleToggle={this.toggleLike}/><br/>
        Comments : <BookIcon type="message" count={book.comments} viewOnly={true}/><br/>
        Pinned : <BookIcon type="pushpin" selected={book.pinned}
          handleToggle={this.togglePinned}/>
      </div>
    );

    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={6} align="center">
            <Image width={200} alt="Book" src={book.imageURL} />
          </Col>
          <Col span={12}>
            <Title>{book.title}</Title>
            <Paragraph>{book.allText}</Paragraph>
          </Col>
          <Col span={6} align="center">
            {icons}
          </Col>
        </Row>
      </div>
    );
  }

}

export default withRouter(Book);