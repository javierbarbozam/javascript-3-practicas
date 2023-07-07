import { cacheProxy } from "../../../cache.js";
import { stateImmutable } from "../../../state.js";

const eventFromCache = (category, element) => {
  const eventId = element.id;
  const events = cacheProxy[category];
  const result = events.find((element) => element.id === eventId);
  return result;
};

const handleState = (category, button) => {
  // Get specific state array
  const stateCategory = button.value;
  const state = stateImmutable.getState();

  // Get clicked event data
  const currentEvent = eventFromCache(category, button);

  // Look for event in state
  const filterEvent = stateImmutable.getEvent(stateCategory, currentEvent.id);

  // Add or remove event
  if (filterEvent) {
    stateImmutable.removeEvent(stateCategory, currentEvent);
  } else {
    if (stateCategory === "favorite") {
      stateImmutable.addEvent(stateCategory, currentEvent);
    } else if (stateCategory === "going") {
      stateImmutable.addEvent(stateCategory, currentEvent);
      stateImmutable.removeEvent("interested", currentEvent);
    } else {
      stateImmutable.addEvent(stateCategory, currentEvent);
      stateImmutable.removeEvent("going", currentEvent);
    }
  }
};

const addButtonEvent = (category) => {
  const tabCategory = category;
  const buttons = document.querySelectorAll(".js-event-btn");

  buttons.forEach((element) =>
    element.addEventListener("click", () => {

      handleState(tabCategory, element);
    })
  );
};

export { addButtonEvent };

/////// Código para estilos ////////

/*

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

*/
