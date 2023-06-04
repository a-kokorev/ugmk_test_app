export const getCompanyName = (id) => {
  if (id === "1") {
    return "Фабрика А";
  }

  return "Фабрика Б";
};

export const getProductName = (product) => {
  const productNumber = product.replace(/^\D+/g, '');

  return `Продукт ${productNumber}`;
};

export const geCompanyLetter = (id) => {
  if (id === "1") {
    return "А";
  }

  return "Б";
};
