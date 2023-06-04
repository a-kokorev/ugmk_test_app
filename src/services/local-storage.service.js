const SELECTED_PRODUCT_OPTION_STORAGE_KEY = "selectedProduct";

export const getStoredSelectedProductOption = () => {
  return localStorage.getItem(SELECTED_PRODUCT_OPTION_STORAGE_KEY);
}

export const setStoredSelectedProductOption = (value) => {
  localStorage.setItem(SELECTED_PRODUCT_OPTION_STORAGE_KEY, value);
}
