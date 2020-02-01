import { Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

const TopRepos = props => {
  return (
    <Card title="Top Repositories" style={{ marginTop: 100 }}>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        Content
      </Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
};

export default TopRepos;
