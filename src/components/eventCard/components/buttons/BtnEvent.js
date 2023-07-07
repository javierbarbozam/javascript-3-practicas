import { cacheProxy } from "../../../cache.js";
import { stateImmutable } from "../../../state.js";
import { getCategory } from "../getCategory.js";

const eventFromCache = (category, element) => {
  const eventId = element.dataset.event_id;
  const events = cacheProxy[category];
  const result = events.find((element) => element.id === eventId);
  return result;
};

const handleState = (category, button) => {
  // Get specific state array
  const stateCategory = button.value;
  const state = stateImmutable.getState();

  // const key = state[stateCategory];
  // const filterEvent = key.find(element => element.id === currentEvent.id)

  // Get clicked event data
  const currentEvent = eventFromCache(category, button);

  // Filter event from state
  const filterEvent = stateImmutable.getEvent(stateCategory, currentEvent.id);

  // Add or Remove from state
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
  const events = cacheProxy[tabCategory];
  const buttons = document.querySelectorAll(".event-item__btn");

  buttons.forEach((element) =>
    element.addEventListener("click", () => {
      // Get needed data from button
      const eventId = element.dataset.event_id;
      const stateCategory = element.value;

      handleState(tabCategory, element);
    })
  );
};

export { addButtonEvent };
