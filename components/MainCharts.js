import { Card, Col, Row } from "antd";

const MainRow = ({ userData }) => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Top Languages" bordered={false}>
          {/* {userData.public_repos} */}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Most Starred" bordered={false}>
          {/* {userData.followers} */}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Stars Per Language" bordered={false}>
          {/* {userData.following} */}
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
