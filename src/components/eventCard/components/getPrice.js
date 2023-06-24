const getPrice = (value) => {
  let price = "";
  value === 0 ? (price = "Free") : (price = `$${value.toFixed(2)}`);
  return price;
};

export { getPrice };
