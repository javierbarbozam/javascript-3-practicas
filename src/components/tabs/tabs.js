import { eventCategory } from "../config.js";

const initTabs = () => {
  const container = document.getElementById("category-nav");
  let tabs = "";
  eventCategory.forEach((element) =>
    (tabs +=
			`<li class="nav-wrapper-list__item">
				<a class="nav-wrapper-list__item-anchor" href="/src/pages/category/category.html?category=${element.category}">${element.category}</a>
			</li>`)
  );
	container.innerHTML = tabs
};

export { initTabs };
