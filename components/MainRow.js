import { Card, Col, Row } from "antd";

const MainRow = props => {
  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MainRow;
