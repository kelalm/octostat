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
          <h1>Welcome to Octostat!</h1>
          <h3>Enter the GitHub user's stats you'd like to see below.</h3>
          <SearchBox />
        </div>
      </Content>
    </Layout>
  );
}
