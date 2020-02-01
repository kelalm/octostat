import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";

import fetch from "isomorphic-unfetch";

import MainRow from "../../components/MainRow";
import TopRepos from "../../components/TopRepos";

const { Title } = Typography;

const Stats = props => {
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
          <Title>{props.username}</Title>
          <Title>{props.username}</Title>
          <h6>Software Engineer from San Francisco</h6>
          <p>Joined on September 12th, 2013</p>
          <p>New York</p>

          <MainRow />
          <TopRepos />
        </div>
      </Content>
    </Layout>
  );
};

Stats.getInitialProps = async function(context) {
  // On a post page, retrive post by id and the comments for that post.
  const { username } = context.query;
  // const postRes = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`
  // );
  // const commentsRes = await fetch(
  //   `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  // );
  // const post = await postRes.json();
  // const comments = await commentsRes.json();

  // console.log(`Fetched post: ${post.title}`);
  // console.log(`Fetched comments: ${comments}`);

  // return { post, comments };
  return { username };
};

export default Stats;
