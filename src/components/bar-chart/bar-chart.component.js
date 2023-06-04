import React, { useEffect, useState, useRef } from "react";
// NOTE: Using chart.js in React: https://blog.logrocket.com/using-chart-js-react/
// Allows to use chartjs as components
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartOptions } from "../../constants/charts.constants";
import { ProductSelectOptions, MonthsArray, FactoryNameById } from "../../constants/product.constants";
import styles from "./bar-chart.module.scss";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BarChart({ data, selectedOption }) {
  const [chartData, setChartData] = useState();
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      return;
    }

    const datasets = [];

    for (const factoryId of Object.keys(data)) {
      const stats = data[factoryId];

      datasets.push({
        id: factoryId,
        label: `Фабрика ${FactoryNameById[factoryId]}`,
        data: MonthsArray.map((month) =>
          Math.floor(getProductsSum(stats, month) / 1000)
        ),
        backgroundColor: factoryId === "1" ? "red" : "blue",
      });
    }

    const chart = {
      labels: MonthsArray.map((month) => month.name.slice(0, 3)),
      datasets,
    };

    setChartData(chart);
  }, [data, selectedOption]);

  const getProductsSum = (stats, month) => {
    let sum = 0;

    switch (selectedOption) {
      case ProductSelectOptions.all:
        sum = Object.values(stats[month.number]).reduce((a, b) => {
          return a + b;
        }, 0);
        break;
      case ProductSelectOptions.product1:
        sum = stats[month.number].product1;
        break;
      case ProductSelectOptions.product2:
        sum = stats[month.number].product2;
        break;
      default:
        sum = 0;
        break;
    }

    return sum;
  };

  const onClick = (event) => {
    const clickedElements = getElementAtEvent(ref.current, event);

    if (clickedElements && clickedElements.length) {
      const element = clickedElements[0];

      const companyId = chartData.datasets[element.datasetIndex]?.id;
      const monthNumber = element.index + 1;

      if (companyId && monthNumber) {
        return navigate(`/details/${companyId}/${monthNumber}`);
      }
    }
  };

  return chartData ? (
    <div className={styles.barChartWrapper}>
      <Bar ref={ref} options={barChartOptions} data={chartData} onClick={onClick} />
    </div>
  ) : null;
}
