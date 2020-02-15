import { Card, Col, Row } from "antd";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

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

const data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const data3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const MainRow = ({ userData }) => (
  <div style={{ background: "#FFFFFF", padding: "30px" }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Top Languages" bordered={false}>
          <div>
            <Doughnut data={data} />
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="GitHub Contributions" bordered={false}>
          <div>
            <h2>Line Example</h2>
            <Line data={data2} />
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Most Starred Repositories" bordered={false}>
          <div>
            <Bar
              data={data3}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true
              }}
            />
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainRow;
