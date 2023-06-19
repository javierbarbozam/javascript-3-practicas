import { eventCategory } from "../../config.js";

const createTabs = () => {
  const container = document.getElementById("category-nav");
  let tabs = "";
  eventCategory.forEach(
    (element) =>
      (tabs +=
        `<li>
          <a 
          class="nav-wrapper-list__item"
          href="/src/pages/category/category.html?category=${element.category}">${element.category}</a>
        </li>`)
  );
  container.innerHTML = tabs;
};

export { createTabs };
