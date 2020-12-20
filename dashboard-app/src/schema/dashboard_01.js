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

export { stackedBarOptions };
