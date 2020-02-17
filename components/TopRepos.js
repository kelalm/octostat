import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Select, Radio } from "antd";

const { Option } = Select;

import { Card, Col, Row } from "antd";

import { Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const gridStyle = {
  width: "100%",
  textAlign: "center"
};

const selectorStyle = {
  marginTop: 60,
  marginBottom: 0,
  textAlign: "center"
};

const TopRepos = ({ repoData }) => {
  console.log(repoData);
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("stars");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = type => {
    const LIMIT = 8;
    const map = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size"
    };
    const sortProperty = map[type];
    const sorted = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    if (repoData.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

  const triggerNotification = () => {
    console.log("ok");
  };

  const changeRepoSort = sortType => {
    console.log("Setting sort type");
    console.log(sortType.target.value);
    setSortType(sortType.target.value);
    triggerNotification();
  };

  const sortTypes = ["stars", "forks", "size"];

  return (
    <div>
      <Radio.Group
        value={sortType}
        onChange={changeRepoSort}
        style={selectorStyle}
      >
        <Title level={4}>Sort repositories by </Title>
        <Radio.Button value="stars">Stars</Radio.Button>
        <Radio.Button value="forks">Forks</Radio.Button>
        <Radio.Button value="size">Size</Radio.Button>
      </Radio.Group>
      <Card title="Top Repositories" style={{ marginTop: 10 }}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {topRepos.map(repo => (
              <a href={repo.html_url}>
                <Card.Grid key={repo.id} style={gridStyle}>
                  <Title level={4}>{repo.name}</Title>
                  <Paragraph ellipsis="true">
                    {repo.description != null
                      ? repo.description
                      : "No description available for this repo."}
                  </Paragraph>
                  <Paragraph ellipsis="true">
                    {repo.language +
                      " - " +
                      repo.stargazers_count +
                      " Stars - " +
                      repo.forks_count +
                      " Forks - " +
                      repo.size +
                      " KB"}
                  </Paragraph>
                </Card.Grid>
              </a>
            ))}
          </Col>

          <Col xs={0} sm={0} md={0} lg={0} xl={0}></Col>
        </Row>
      </Card>
    </div>
  );
};

export default TopRepos;
