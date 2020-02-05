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
          background: "#fff",
          padding: 256,
          margin: 0,
          // minHeight: 280,
          // padding: "0 50px",
          marginTop: 24
        }}
      >
        <div>
          <Title>Welcome to Octostat!</Title>
          <h3>Search for a user.</h3>
          <SearchBox />
        </div>
      </Content>
    </Layout>
  );
}
