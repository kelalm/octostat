import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";

import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";

import fetch from "isomorphic-unfetch";

import MainRow from "../components/MainRow";
import MainCharts from "../components/MainCharts";
import TopRepos from "../components/TopRepos";

var GhPolyglot = require("gh-polyglot");

const { Title, Text, Paragraph } = Typography;

const Stats = props => {
  const username = props.query.id;

  console.log("tryies");
  console.log(username);

  const [userData, setUserData] = useState("");
  const [langData, setLangData] = useState("");
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
    // getLangData();
    getRepoData();
    console.log("Sazon");
    console.log(repoData);
  }, []);

  return (
    <Layout>
      <Content
        style={{
          background: "#1c2e4a",
          height: 500,
          paddingTop: 24,
          paddingLeft: 256,
          paddingRight: 256,
          paddingBottom: 256,
          margin: 0
          // minHeight: 280,
          // padding: "0 50px",
          // marginTop: 24
        }}
      >
        <div>
          <div>
            <div>
              <Avatar size={128} icon="user" src={userData.avatar_url} />
            </div>
          </div>

          <Title style={{ color: "#b9dfef" }} underline={true}>
            {userData.name}
          </Title>
          <Title level={3} style={{ marginTop: -24, color: "#6e727d" }}>
            @{username}
          </Title>
          <Title level={4} style={{ marginTop: 0, color: "#fff" }}>
            {userData.bio}
          </Title>
          <Paragraph style={{ marginTop: -10, color: "#fff" }}>
            <Icon type="environment-o" /> {userData.location}
            <Icon type="calendar" style={{ marginLeft: 30 }} /> Joined{" "}
            {new Date(userData.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </Paragraph>

          {userData && <MainRow userData={userData} />}
          <MainCharts />
          {repoData && <TopRepos repoData={repoData} />}
        </div>
      </Content>
    </Layout>
  );
};

export default Stats;

Stats.propTypes = {
  query: PropTypes.object
};
