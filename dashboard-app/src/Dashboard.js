import { useEffect, useState } from "react";

import { StackedBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";

const stackedBarOptions = {
  title: "Stacked bar (time series - custom ticks)",
  axes: {
    left: {
      mapsTo: "value",
      stacked: true,
    },
    bottom: {
      mapsTo: "date",
      scaleType: "time",
      ticks: {
        values: ["2019-01-16T23:00:00.000Z"],
      },
    },
  },
  height: "400px",
};

const initialData = [
  { group: "Dataset 1", date: "2018-12-31T23:00:00.000Z", value: 0 },
  { group: "Dataset 1", date: "2019-01-05T23:00:00.000Z", value: -37312 },
  { group: "Dataset 1", date: "2019-01-07T23:00:00.000Z", value: -22392 },
  { group: "Dataset 1", date: "2019-01-14T23:00:00.000Z", value: -52576 },
  { group: "Dataset 1", date: "2019-01-18T23:00:00.000Z", value: 20135 },
  { group: "Dataset 2", date: "2018-12-31T23:00:00.000Z", value: 47263 },
  { group: "Dataset 2", date: "2019-01-04T23:00:00.000Z", value: 14178 },
  { group: "Dataset 2", date: "2019-01-07T23:00:00.000Z", value: 23094 },
  { group: "Dataset 2", date: "2019-01-12T23:00:00.000Z", value: 45281 },
  { group: "Dataset 2", date: "2019-01-18T23:00:00.000Z", value: -63954 },
];

function Dashboard() {
  const [stackBarData, setStackBarData] = useState([]);

  useEffect(() => {
    setStackBarData(initialData);
  }, []);

  return (
    <div style={{ margin: "auto", padding: 25, textAlign: "center" }}>
      <StackedBarChart data={stackBarData} options={stackedBarOptions} />
    </div>
  );
}

export default Dashboard;
