import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";

import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

import fetch from "isomorphic-unfetch";

import MainRow from "../components/MainRow";
import MainCharts from "../components/MainCharts";
import TopRepos from "../components/TopRepos";

import GhPolyglot from "gh-polyglot";

const Stats = props => {
  const username = props.query.id;

  console.log("tryies");
  console.log(username);

  const [userData, setUserData] = useState("");
  const [langData, setLangData] = useState([]);
  const [repoData, setRepoData] = useState("");
  const [error, setError] = useState({ active: false, type: 200 });
  const [rateLimit, setRateLimit] = useState(null);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then(json => setUserData(json))
      .catch(error => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
        setError({ active: true, type: 400 });
      }
      setLangData(stats);
    });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then(json => setRepoData(json))
      .catch(error => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // fetch(`https://api.github.com/rate_limit`)
    //   .then(response => response.json())
    //   .then(json => {
    //     setRateLimit(json.resources.core);
    //     if (json.resources.core.remaining < 1) {
    //       setError({ active: true, type: 403 });
    //     }
    //   });

    getUserData();
    getLangData();
    getRepoData();
  }, []);

  return (
    <Layout>
      <Content
        style={{
          background: "#263238",
          height: 400,
          paddingTop: 24,

          paddingBottom: 256,
          margin: 0
          // minHeight: 280,
          // padding: "0 50px",
          // marginTop: 24
        }}
      >
        <Row>
          <Col xs={1} sm={1} md={1} lg={4} xl={4}></Col>
          <Col xs={22} sm={22} md={22} lg={16} xl={16}>
            <Row>
              <Col xs={20} sm={24} md={24} lg={20} xl={10}>
                <div>
                  <div>
                    <Avatar size={128} icon="user" src={userData.avatar_url} />
                  </div>
                </div>

                <Title style={{ color: "#cfd8dc" }} underline={true}>
                  {userData.name}
                </Title>
                <Title level={3} style={{ marginTop: -16, color: "#607d8b" }}>
                  <a
                    style={{ color: "inherit" }}
                    href={"https://www.github.com/" + username}
                  >
                    @{userData.login}
                  </a>
                </Title>
              </Col>
              <Col xs={2} sm={2} md={0} lg={2} xl={7}></Col>
              <Col xs={2} sm={2} md={0} lg={2} xl={7}></Col>
            </Row>
            <Row>
              <Title level={4} style={{ marginTop: 0, color: "#fff" }}>
                {userData.bio}
              </Title>
            </Row>

            <Paragraph style={{ marginTop: -8, color: "#fff" }}>
              <Icon type="environment-o" /> {userData.location}
              <Icon type="calendar" style={{ marginLeft: 30 }} /> Joined{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </Paragraph>

            <Row>
              <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                {" "}
                {userData && <MainRow userData={userData} />}
              </Col>
              <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
            </Row>
            <Row>{langData && <MainCharts langData={langData} />}</Row>
            <Row>{repoData && <TopRepos repoData={repoData} />}</Row>
          </Col>
          <Col xs={1} sm={1} md={1} lg={4} xl={4}></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Stats;

Stats.propTypes = {
  query: PropTypes.object
};
