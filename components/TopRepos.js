import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

const gridStyle = {
  width: "25%",
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
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ["stars", "forks", "size"];

  return (
    <Card title="Top Repositories" style={{ marginTop: 100 }}>
      {topRepos.map(repo => (
        <Card.Grid style={gridStyle}>repo.title</Card.Grid>
      ))}
    </Card>
  );
};

export default TopRepos;
