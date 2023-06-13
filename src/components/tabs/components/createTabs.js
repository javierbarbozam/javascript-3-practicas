import { eventCategory } from "../../config.js";

const createTabs = () => {
  const container = document.getElementById("category-nav");
  let tabs = "";
  eventCategory.forEach(
    (element) =>
      (tabs += `<li id="${element.category}" class="nav-wrapper-list__item">${element.category}</li>`)
  );
  container.innerHTML = tabs;
};

export { createTabs };
