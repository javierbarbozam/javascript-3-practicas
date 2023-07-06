import { cacheProxy } from "../../../cache/cache.js";

const filterEvent = (category, element) => {
  const eventId = element.dataset.event_id;
  const currentCategory = category;
  const events = cacheProxy[currentCategory];
  const result = events.find((element) => element.id === eventId);
  return result;
};

const handleFavorite = (event, category, button) => {
  const state = stateImmutable.getState();
  const { favorite } = state;
  const result = favorite.find((element) => element.id === event.id);
  if (!result) {
    stateImmutable.addEvent(category, event);
    handleFavoriteStyles(button, true);
  } else {
    stateImmutable.removeEvent(category, event);
    handleFavoriteStyles(button);
  }
};

const addBtnEvent = (tabCategory) => {
  const currentCategory = tabCategory;
  const buttons = document.querySelectorAll(".event-item__btn");
  buttons.forEach((element) =>
    element.addEventListener("click", () => {
      const currentEvent = filterEvent(currentCategory, element);
      console.log(currentEvent);
      // element.value, element.dataset.event_id
      if (element.value === "favorite") {
        // agregar lógica
      } else if (element.value === "going") {
      } else {
      }
    })
  );
};

export { addBtnEvent };
