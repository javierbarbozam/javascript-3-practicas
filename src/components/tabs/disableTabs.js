import { eventCategory } from "../config.js";

const activeCategory = () => {
  const result = eventCategory.find((element) => element.active === true);
  return result.category;
};

const disableCategory = () => {
  const category = activeCategory();
  const tabs = document.querySelectorAll(".nav-wrapper-list__item-anchor");
  tabs.forEach((element) =>
    element.innerHTML === category
      ? element.classList.add("nav-wrapper-list__item-anchor--active")
      : element.classList.remove("nav-wrapper-list__item-anchor--active")
  );
};

export { disableCategory };
