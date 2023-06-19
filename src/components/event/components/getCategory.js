const getCategory = () => {
  let category = new URLSearchParams(window.location.search).get("category");
  category === null ? (category = "music") : null;
  return category;
};

export { getCategory };
