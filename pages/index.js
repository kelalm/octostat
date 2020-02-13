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
          padding: 256,
          margin: 0,
          // minHeight: 280,
          // padding: "0 50px",
          marginTop: 24
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col xs={2} sm={2} md={2} lg={4} xl={4}></Col>
          <Col xs={20} sm={20} md={20} lg={16} xl={16}>
            <Title>Welcome to Octostat</Title>
            <Title level={4}>Search for a GitHub user</Title>
            <SearchBox />
          </Col>
          <Col xs={2} sm={2} md={2} lg={4} xl={4}></Col>
        </Row>
      </Content>
    </Layout>
  );
}
