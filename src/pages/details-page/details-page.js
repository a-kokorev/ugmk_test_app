import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { months } from "../../constants/product.constants";
import { PieChart } from "../../components/pie-chart/pie-chart.component";
import { getProducts } from "../../services/products.service";
import { geCompanyLetter } from "../../utils/common.utils";

import styles from "./details-page.module.scss";

function DetailsPage() {
  const { companyId, monthNumber } = useParams();
  const [chartData, setChartData] = useState();
  const navigate = useNavigate();

  const getProductsData = async () => {
    const data = await getProducts();
    const companyData = data[companyId];

    if (companyData) {
      setChartData(companyData[monthNumber]);
    }
  };

  useEffect(() => {
    if (monthNumber > 12 || companyId > 2) {
      return navigate(`/notFound`);
    }

    getProductsData();
  }, [companyId, monthNumber]);

  const getMonthName = () => {
    const month = months.find((item) => item.number.toString() === monthNumber);

    return month?.name;
  };

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsContent}>
        <h1 className={styles.detailsHeader}>
          {`Статистика по продукции Фабрики ${geCompanyLetter(
            companyId
          )} за ${getMonthName()}`}
        </h1>
        <PieChart data={chartData} />
      </div>
    </div>
  );
}

export default DetailsPage;
