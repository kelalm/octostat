import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ langData }) => {
  const data = {
    labels: langData.map(a => a.label),

    datasets: [
      {
        data: langData.map(a => a.value),
        backgroundColor: langData.map(a => a.color),
        hoverBackgroundColor: langData.map(a => a.color)
      }
    ]
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
