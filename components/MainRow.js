import { Card, Col, Row } from "antd";

import { Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const MainRow = ({ userData }) => (
  <div style={{ background: "#f6f6f6", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <a href={userData.repos_url}>
          <Card
            title="Total Repositories"
            bodyStyle={{ textAlign: "center" }}
            hoverable={true}
            bordered={false}
          >
            <Title>{userData.public_repos}</Title>
          </Card>
        </a>
      </Col>
      <Col span={8}>
        <Card
          title="Followers"
          bodyStyle={{ textAlign: "center" }}
          hoverable={true}
          bordered={false}
        >
          <Title>{userData.followers}</Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          title="Following"
          bodyStyle={{ textAlign: "center" }}
          hoverable={true}
          bordered={false}
        >
          <Title>{userData.following}</Title>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
