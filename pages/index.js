import { Layout, Row, Col, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

import SearchBox from "../components/SearchBox";

export default function Index() {
  return (
    <Layout>
      <Content
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#263238"
        }}
      >
        <Row style={{ textAlign: "center", marginTop: "256px" }}>
          <Col xs={2} sm={4} md={4} lg={4} xl={6}></Col>
          <Col xs={20} sm={16} md={16} lg={16} xl={12}>
            <Title style={{ color: "#eceff1" }}>Welcome to Octostat</Title>
            <Title level={4} style={{ color: "#cfd8dc" }}>
              Search for a GitHub user
            </Title>
            <SearchBox />
          </Col>
          <Col xs={2} sm={4} md={4} lg={4} xl={6}></Col>
        </Row>
      </Content>
    </Layout>
  );
}
