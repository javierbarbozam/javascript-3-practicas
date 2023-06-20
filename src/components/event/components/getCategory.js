import { eventCategory } from "../../config.js";

const getCategory = () => {
  let category = new URLSearchParams(window.location.search).get("category");
  // Show default events when there is no "category" at SearchParams
  category === null ? (category = "music") : null;
  return category;
};

const getAccountCategory = () => {
  let category = new URLSearchParams(window.location.search).get("category");
  // Show default events when there is no "category" at SearchParams
  category === null ? (category = "favorite") : null;
  return category;
};

export { getCategory, getAccountCategory };
