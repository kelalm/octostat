import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";

const { Title } = Typography;

export default class username extends React.Component {
  render() {
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
            <Title>{this}</Title>
            <h1>username</h1>
            <h6>Software Engineer from San Francisco</h6>
            <p>Joined on September 12th, 2013</p>
            <p>New York</p>
          </div>
        </Content>
      </Layout>
    );
  }
}
