import { Card, Col, Row } from "antd";

const MainRow = ({ userData }) => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Total Repositories" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Followers" bordered={false}>
          {userData.name}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Following" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
