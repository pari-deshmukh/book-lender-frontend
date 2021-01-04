import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

/**
 * Component for listing books in a grid layout.
 *
 * @component
 * @example
 * return (
 *   <BookGrid />
 * )
 */
function BookGrid(props) {
  return  (
    <>
    <Row type="flex" justify="space-around">
      <Col span={6}>
        <Link to="/book/1">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1024/400"/>}>
            <Meta title="First Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
      <Col span={6}>
        <Link to="/book/2">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1025/400"/>}>
            <Meta title="Second Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
      <Col span={6}>
        <Link to="/book/3">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1026/400"/>}>
            <Meta title="Third Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
    </Row>  
    <Row type="flex" justify="space-around">
      <Col span={6}>
        <Link to="/book/4">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1027/400"/>}>
            <Meta title="Fourth Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
      <Col span={6}>
        <Link to="/book/5">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1028/400"/>}>
            <Meta title="Fifth Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
      <Col span={6}>
        <Link to="/book/6">
          <Card cover={<img alt="test" src="https://picsum.photos/id/1029/400"/>}>
            <Meta title="Sixth Book" description="This is about something" />
          </Card>
        </Link>
      </Col>
    </Row>  
    </>
  );
}

export default BookGrid;