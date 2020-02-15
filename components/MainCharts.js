import { Card, Col, Row } from "antd";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const MainRow = ({ userData }) => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Top Languages" bordered={false}>
          <div>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} />
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Most Starred" bordered={false}>
          {/* {userData.followers} */}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Stars Per Language" bordered={false}>
          {/* {userData.following} */}
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
