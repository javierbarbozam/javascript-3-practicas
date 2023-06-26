import { accountTab } from "../../tabs/components/accountTab.js";
import { getAccountCategory } from "./getCategory.js";
import { accountCategory } from "../../config.js";

const homeBtn = (id) => {
  const categories = accountCategory.map(element => element.category)
  let btn = '';
  categories.forEach(element => {
    if(element === 'favorite') {
      btn +=
      `<button
        class="event-item__btn event-item__btn--${element}"
        data-id="js-${element}-btn" data-event_id="${id}" data-state="${element}">
		    <span class="material-symbols-rounded">${element}</span>
	    </button>`
    } else {
      btn +=
      `<button
        class="event-item__btn event-item__btn--state"
        data-id="event_state" data-event_id="${id}"
        value="${element}">${element}
      </button>`;
    }
  })
  return btn
}

const accountBtn = (category, id) => {
  const btn =
  `<span>Not ${category} anymore?</span>
  <button
    data-event_id="${id}">Remove
  </button>`;
  return btn
}

const createBtn = (id) => {
  const { page } = accountTab()
  if (page === "index.html") {
    return homeBtn(id)
  } else {
    const accountCategory = getAccountCategory()
    return accountBtn(accountCategory, id)
  }
};

export { createBtn };
