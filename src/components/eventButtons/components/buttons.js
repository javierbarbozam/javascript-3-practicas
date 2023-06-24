import { accountTab } from "../../tabs/components/accountTab.js";
import { getAccountCategory } from "../../eventCard/components/getCategory.js";

const homeInterestedBtn = (id) => {
  const btn =
  `<button
      class="event-item__btn event-item__btn--state"
      data-id="event_state" data-event_id="${id}"
      value="interested">Interested
  </button>`;
  return btn
}

const homeGoingBtn = (id) => {
  const btn =
  `<button
      class="event-item__btn event-item__btn--state"
      data-id="event_state" data-event_id="${id}"
      value="going">Going
  </button>`;
  return btn
}

const homeFavoriteBtn = (id) => {
  const btn =
  `<button
    class="event-item__btn event-item__btn--favorite"
    data-id="js-favorite-btn" data-event_id="${id}" data-state="favorite">
		<span class="material-symbols-rounded">favorite</span>
	</button>`
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
    let result;
    const interestedBtn = homeInterestedBtn(id)
    const goingBtn = homeGoingBtn(id)
    const favoriteBtn = homeFavoriteBtn(id)
    return result = interestedBtn + goingBtn + favoriteBtn
  } else {
    const accountCategory = getAccountCategory()
    return accountBtn(accountCategory, id)
  }
};

export { createBtn };
