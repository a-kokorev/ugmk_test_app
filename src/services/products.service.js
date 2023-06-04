export const getProducts = async () => {
  const response = await fetch("http://localhost:3001/products");

  return mapProductsData(await response.json());
};

const mapProductsData = (data) => {
  const result = {};

  for (const item of data) {
    if (!!item.date) {
      const [, month] = item.date.split("/");

      if (!result[item.factory_id]) {
        result[item.factory_id] = {};
      }

      if (!result[item.factory_id][month]) {
        result[item.factory_id][month] = {
          product1: 0,
          product2: 0,
        };
      }

      result[item.factory_id][month].product1 += item.product1;
      result[item.factory_id][month].product2 += item.product2;
    }
  }

  return result;
};
