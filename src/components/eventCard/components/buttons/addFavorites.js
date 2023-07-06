import { stateImmutable } from "../../../state/state.js";
import { getCategory } from "../getCategory.js";
import { cacheProxy } from "../../../cache/cache.js";

const filterEvent = (element) => {
  const eventId = element.dataset.event_id;
  const category = getCategory();
  const events = cacheProxy[category];
  const result = events.find((element) => element.id === eventId);
  return result;
}; // ya copié este código

const handleFavorite = (event, category, button) => {
  const state = stateImmutable.getState();
  const { favorite } = state;
  const result = favorite.find(element => element.id === event.id)
  if(!result) {
    stateImmutable.addEvent(category, event);
    handleFavoriteStyles(button, true)
  } else {
    stateImmutable.removeEvent(category, event);
    handleFavoriteStyles(button)
  }
};

const handleFavoriteStyles = (element, flag) => {
 if (flag) {
  element.classList.toggle('event-item__btn--favorite--active')
 } else {
  element.classList.toggle('event-item__btn--favorite--active')
 }
}

const homeButtonFeature = async (element) => {
  const stateCategory = element.dataset.state;
  const event = filterEvent(element);
  if (stateCategory === "favorite") {
    handleFavorite(event, stateCategory, element)
  } else {
    
  }
};

const handleFavoriteEvent = () => {
  const favoriteBtn = document.querySelectorAll('[data-id="js-favorite-btn"]');
  favoriteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      homeButtonFeature(element);
    });
  });
};

export { homeButtonFeature, handleFavoriteEvent };
