import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";

const { Title } = Typography;

import SearchBox from "../components/SearchBox";

export default function Index() {
  return (
    <Layout>
      <Content
        style={{
          //padding: 128,
          minHeight: "100vh",
          // minHeight: 280,
          width: "100%",
          backgroundColor: "#263238"

          // padding: "0 50px",
          //marginTop: 128
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
