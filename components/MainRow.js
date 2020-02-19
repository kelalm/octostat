import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

const MainRow = ({ userData }) => (
  <div style={{ background: "#455a64", padding: "30px" }}>
    <Row gutter={16}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginTop: 10 }}>
        <Card
          title="Total Repositories"
          bodyStyle={{ textAlign: "center" }}
          hoverable={true}
          bordered={false}
        >
          <Title>{userData.public_repos}</Title>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginTop: 10 }}>
        <Card
          title="Followers"
          bodyStyle={{ textAlign: "center" }}
          hoverable={true}
          bordered={false}
        >
          <Title>{userData.followers}</Title>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ marginTop: 10 }}>
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
