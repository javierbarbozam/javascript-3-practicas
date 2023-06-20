import { accountTab } from "./accountTab.js";

const createTabs = (value) => {
  const container = document.getElementById("category-nav");
  const account = accountTab();
  let { tab, path } = accountTab();
  value.forEach( (element) =>
    (tab +=
      `<li>
        <a 
        class="nav-wrapper-list__item"
        href="${path}?category=${element.category}">${element.category}</a>
      </li>`)
  );
  tab += account;
  container.innerHTML = tab;
};

export { createTabs };
