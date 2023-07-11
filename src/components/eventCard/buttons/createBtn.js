import { getAccountCategory } from "../getCategory.js";
import { accountCategory } from "../../../config.js";
import { accountTab } from "../../tabs.js";

const homeEventBtn = (id) => {
  const categories = accountCategory.filter((element) => element.category !== "calendar");
  let favoriteBtn = '';
  let buttons = '';
  categories.forEach((element) => {
    const { category } = element;
    if (category === "favorite") {
      favoriteBtn += `<button
        class="js-event-btn event-item__btn event-item__btn--${category}"
        id="${id}"
        value="${category}" data-state="${category}">
		    <span class="material-symbols-rounded">${category}</span>
	    </button>`;
    } else {
      buttons += `<button
        class="js-event-btn event-item__btn"
        id="${id}"
        value="${category}">${category}
      </button>`;
    }
  });
  let container = `<div id="${id}" class="event-item__btn-wrapper">${favoriteBtn}${buttons}</div>`
  return container;
};

const accountEventBtn = (category, id) => {
  let btn = "";
  category === "calendar"
    ? null
    : (btn += `<span id=${id}>Not ${category} anymore?</span>
    <button class="js-event-btn-account  event-item__btn--active" value="${category}" id="${id}">Remove</button>`);
    let container = `<div id="${id}" class="event-item__btn-wrapper">${btn}</div>`
  return container;
};

const createBtn = (id) => {
  const { page } = accountTab();
  if (page === "index.html") {
    return homeEventBtn(id);
  } else {
    const accountCategory = getAccountCategory();
    return accountEventBtn(accountCategory, id);
  }
};

export { createBtn };
