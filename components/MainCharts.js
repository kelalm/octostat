import { Card, Col, Row } from "antd";

import DoughnutChart from "./charts/DoughnutChart";

const MainCharts = ({ langData }) => (
  <div style={{ background: "#FFFFFF", padding: "30px" }}>
    <Row gutter={8}>
      <Col span={24}>
        <Card title="Top Languages" bordered={false}>
          <DoughnutChart langData={langData}></DoughnutChart>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainCharts;
