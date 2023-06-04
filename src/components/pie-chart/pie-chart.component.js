import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import dataLabels from "chartjs-plugin-datalabels";

import { getProductName } from "../../utils/common.utils";
import { pieCartOptions } from "../../constants/charts.constants";

import styles from "./pie-chart.module.scss";

Chart.register(ArcElement, Tooltip, Legend, dataLabels);

export function PieChart({ data }) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (data) {
      const chart = {
        labels: Object.keys(data).map((item) => getProductName(item)),
        datasets: [
          {
            data: Object.values(data).map((item) => Math.floor(item / 1000)),
            backgroundColor: ["#228B22", "#FFBD33"],
          },
        ],
      };

      setChartData(chart);
    }
  }, [data]);

  return chartData ? (
    <div className={styles.pieChartWrapper}>
      <div className={styles.pieChart}>
        <Pie data={chartData} options={pieCartOptions} />
      </div>
    </div>
  ) : null;
}
