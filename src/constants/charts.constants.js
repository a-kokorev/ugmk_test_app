export const pieCartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      align: "end",
      formatter: Math.round,
      color: (chart) => {
        return chart.dataset.backgroundColor[chart.dataIndex];
      },
      font: {
        size: 20,
      },
    },
  },
};

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
    datalabels: false,
  },
};
