import { Chart } from "react-google-charts";
import { useParams } from "react-router-dom";

// export const data = [
//   ['Day', 'Buyers'],
//   ['Monday', 120],
//   ['Tuesday', 135],
//   ['Wednesday', 150],
//   ['Thursday', 170],
//   ['Friday', 140],
//   ['Saturday', 190],
//   ['Sunday', 110],
// ];

export const options = {
  title: "Weekly Buyers",
  legend: { position: "none" },
  hAxis: { title: "Day of the Week" },
  vAxis: { title: "Number of Buyers" },
  colors: ["#4285F4"],
};

const WeeklyBuyersChart = () => {
  const queryParams = useParams();
  const productId: number = Number(queryParams?.id) || 1;
  const data = [
    ["Day", "Buyers"],
    ["Monday", 1 * productId],
    ["Tuesday", 2 * productId],
    ["Wednesday", 3 * productId],
    ["Thursday", 4 * productId],
    ["Friday", 5 * productId],
    ["Saturday", 6 * productId],
    ["Sunday", 7 * productId],
  ];

  return (
    <div style={{ width: "100%", height: "400" }}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default WeeklyBuyersChart;
