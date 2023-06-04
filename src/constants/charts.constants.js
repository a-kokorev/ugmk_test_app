export const pieCartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    datalabels: {
      anchor: "end",
      align: "end",
      formatter: Math.round,
      color: (chart) => {
        return chart.dataset.backgroundColor[chart.dataIndex];
      },
      font: {
        size: 16,
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
    datalabels: false,
  },
};
