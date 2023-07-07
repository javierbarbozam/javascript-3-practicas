import { cacheProxy } from "../../../cache.js";
import { stateImmutable } from "../../../state.js";
import { handleBtnStyle } from "./btnStyleHandler.js";

const eventFromCache = (category, element) => {
  const eventId = element.id;
  const events = cacheProxy[category];
  const result = events.find((element) => element.id === eventId);
  return result;
};

const handleState = (category, button) => {
  // Get clicked state category
  const stateCategory = button.value;

  // Get clicked event data
  const currentEvent = eventFromCache(category, button);

  // Look for event in state's clicked category
  const filterEvent = stateImmutable.getEvent(stateCategory, currentEvent.id);

  // Add style to button
  handleBtnStyle(stateCategory, button);

  // Add or remove event
  if (filterEvent) {
    stateImmutable.removeEvent(stateCategory, currentEvent);
  } else {
    switch (stateCategory) {
      case "favorite":
        stateImmutable.addEvent(stateCategory, currentEvent);
        break;
      case "going":
        stateImmutable.addEvent(stateCategory, currentEvent);
        stateImmutable.removeEvent("interested", currentEvent);
        break;
      default:
        stateImmutable.addEvent(stateCategory, currentEvent);
        stateImmutable.removeEvent("going", currentEvent);
        break;
    }
  }
};

const BtnClickHandler = (category) => {
  const tabCategory = category;
  const buttons = document.querySelectorAll(".js-event-btn");

  buttons.forEach((element) =>
    element.addEventListener("click", () => {
      handleState(tabCategory, element);
    })
  );
};

export { BtnClickHandler };