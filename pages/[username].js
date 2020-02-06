import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Icon } from "antd";
import { Row, Col } from "antd";
const { Header, Content, Sider, Footer } = Layout;

import { Typography } from "antd";

import fetch from "isomorphic-unfetch";

import MainRow from "../components/MainRow";
import TopRepos from "../components/TopRepos";

var GhPolyglot = require("gh-polyglot");

const { Title } = Typography;

const Stats = props => {
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
        setError({ active: true, type: 200 });
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
    // getRepoData();

    // setUserData({ name: "kelvin" });
    // setLangData(mockLangData);
    // setRepoData(mockRepoData);
  }, []);

  console.log("tryies");
  console.log(username);

  return (
    <Layout>
      <Content
        style={{
          background: "#fff",
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
              <Avatar size={64} icon="user" src={userData.avatar_url} />
            </div>
          </div>

          <Title>{userData.name}</Title>
          <Title>@{username}</Title>
          <h6>{userData.bio}</h6>
          <p>Joined on {userData.created_at}</p>
          <p>New York</p>
          <MainRow userData={userData} />
          <TopRepos />
        </div>
      </Content>
    </Layout>
  );
};

export default Stats;
