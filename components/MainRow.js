import { Card, Col, Row } from "antd";

import { Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const MainRow = ({ userData }) => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Total Repositories" hoverable={true} bordered={false}>
          <Title>{userData.public_repos}</Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Followers" hoverable={true} bordered={false}>
          <Title>{userData.followers}</Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Following" hoverable={true} bordered={false}>
          <Title>{userData.following}</Title>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
