const stackedBarOptions = {
  title: "Stacked bar options loaded from folder. 0.1",
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
  height: "500px",
};

function getLastOption() {
  return stackedBarOptions;
}

export { getLastOption };
