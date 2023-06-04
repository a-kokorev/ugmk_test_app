import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FactoryNameById, MonthsArray } from "../../constants/product.constants";
import { PieChart } from "../../components/pie-chart/pie-chart.component";
import { getProducts } from "../../services/products.service";
import styles from "./details-page.module.scss";

function DetailsPage() {
  const { factoryId, monthNumber } = useParams();
  const [chartData, setChartData] = useState();
  const navigate = useNavigate();

  const getProductsData = async () => {
    const data = await getProducts();
    const companyData = data[factoryId];

    if (companyData) {
      setChartData(companyData[monthNumber]);
    }
  };

  useEffect(() => {
    if (monthNumber > 12 || factoryId > 2) {
      return navigate(`/notFound`);
    }

    getProductsData();
  }, [factoryId, monthNumber]);

  const getMonthName = () => {
    const month = MonthsArray.find((item) => item.number === +monthNumber);

    return month?.name ?? '';
  };

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsContent}>
        <h1 className={styles.detailsHeader}>
          {`Статистика по продукции Фабрики ${FactoryNameById[factoryId]} за ${getMonthName()}`}
        </h1>
        <PieChart data={chartData} />
      </div>
    </div>
  );
}

export default DetailsPage;
