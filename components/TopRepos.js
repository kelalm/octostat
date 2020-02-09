import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Select, Radio } from "antd";

const { Option } = Select;

import { Card } from "antd";

const gridStyle = {
  width: "50%",
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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = sortType => {
    console.log("Setting sort type");
    console.log(sortType.target.value);
    setSortType(sortType.target.value);
    // toggleDropdown();
  };

  const sortTypes = ["stars", "forks", "size"];

  return (
    <div>
      <Radio.Group
        value={sortType}
        onChange={changeRepoSort}
        style={selectorStyle}
      >
        <Radio.Button value="stars">Stars</Radio.Button>
        <Radio.Button value="forks">Forks</Radio.Button>
        <Radio.Button value="size">Size</Radio.Button>
      </Radio.Group>
      <Card title="Top Repositories" style={{ marginTop: 10 }}>
        {topRepos.map(repo => (
          <Card.Grid key={repo.id} style={gridStyle}>
            {repo.name}
          </Card.Grid>
        ))}
      </Card>
    </div>
  );
};

export default TopRepos;
