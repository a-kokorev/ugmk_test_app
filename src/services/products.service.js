export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/products");
    const responseJson = await response.json();

    if (responseJson) {
      return mapProductsData(responseJson);
    }

    return {};
  } catch (error) {
    console.error(error);
  }
};

const mapProductsData = (data) => {
  const result = {};

  for (const item of data) {
    if (!item?.date) {
      continue;
    }

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

  return result;
};
