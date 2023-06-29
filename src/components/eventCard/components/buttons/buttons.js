import { accountTab } from "../../../tabs/components/accountTab.js";
import { getAccountCategory } from "../getCategory.js";
import { accountCategory } from "../../../config.js";

const homeBtn = (id) => {
  const categories = accountCategory.filter((element) => element.category !== "calendar");
  let favoriteBtn = '';
  let buttons = '';
  categories.forEach((element) => {
    const { category } = element;
    if (category === "favorite") {
      favoriteBtn += `<button
        class="event-item__btn event-item__btn--${category}"
        data-id="js-${category}-btn" data-event_id="${id}" data-state="${category}">
		    <span class="material-symbols-rounded">${category}</span>
	    </button>`;
    } else {
      buttons += `<button
        class="event-item__btn event-item__btn--state"
        data-id="event_state" data-event_id="${id}"
        value="${category}">${category}
      </button>`;
    }
  });
  let container = `<div class="event-item__btn-wrapper">${favoriteBtn}${buttons}</div>`
  return container;
};

const accountBtn = (category, id) => {
  let btn = "";
  category === "calendar"
    ? null
    : (btn += `<span>Not ${category} anymore?</span>
    <button data-event_id="${id}">Remove</button>`);
  return btn;
};

const createBtn = (id) => {
  const { page } = accountTab();
  if (page === "index.html") {
    return homeBtn(id);
  } else {
    const accountCategory = getAccountCategory();
    return accountBtn(accountCategory, id);
  }
};

export { createBtn };
