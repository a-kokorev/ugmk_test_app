import { getProducts } from "../../services/products.service";
import {
  ProductSelectOptions,
  ProductSelectOptionsDisplayText,
} from "../../constants/product.constants";
import { useEffect, useState } from "react";
import { BarChart } from "../../components/bar-chart/bar-chart.component";
import {
  getStoredSelectedProductOption,
  setStoredSelectedProductOption,
} from "../../services/local-storage.service";
import styles from "./home-page.module.scss";

function HomePage() {
  const [selectedOption, setSelectedOption] = useState(
    getStoredSelectedProductOption() || ProductSelectOptions.all
  );
  const [chartData, setChartData] = useState();

  const getProductsData = async () => {
    const data = await getProducts();

    setChartData(data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const onProductSelect = (value) => {
    setStoredSelectedProductOption(value);
    setSelectedOption(value);
  };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.content}>
        <div className={styles.filterWrapper}>
          <div>Фильтр по типу продукции</div>
          <select
            onChange={(e) => onProductSelect(e.target.value)}
            value={selectedOption}
          >
            {Object.keys(ProductSelectOptions).map((key) => (
              <option value={ProductSelectOptions[key]}>{ProductSelectOptionsDisplayText[ProductSelectOptions[key]]}</option>
            ))}
          </select>
        </div>
        {chartData ? (
          <BarChart data={chartData} selectedOption={selectedOption} />
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
