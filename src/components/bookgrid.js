import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const grid = (
  <>
  <Row type="flex" justify="space-around">
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1024/400"/>}>
        <Meta title="First Book" description="This is about something" />
      </Card>
    </Col>
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1025/400"/>}>
        <Meta title="Second Book" description="This is about something" />
      </Card>
    </Col>
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1026/400"/>}>
        <Meta title="Third Book" description="This is about something" />
      </Card>
    </Col>
  </Row>  
  <Row type="flex" justify="space-around">
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1027/400"/>}>
        <Meta title="Fourth Book" description="This is about something" />
      </Card>
    </Col>
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1028/400"/>}>
        <Meta title="Fifth Book" description="This is about something" />
      </Card>
    </Col>
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1029/400"/>}>
        <Meta title="Sixth Book" description="This is about something" />
      </Card>
    </Col>
  </Row>  
  </>
);

function BookGrid(props) {
  return grid;
}

export default BookGrid;