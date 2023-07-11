import { cacheProxy } from "../../../cache.js";
import { stateImmutable } from "../../../state.js";
import { accountTab } from "../../tabs.js";
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

const handleAccountState = (category, button) => {
  const event = stateImmutable.getEvent(category, button.id)
  stateImmutable.removeEvent(category, event);
  const message = document.querySelector(`span[id="${button.id}"]`)
  message.innerHTML = 'Event successfully removed'
  button.remove()
}

const BtnClickHandler = (category) => {
  const { page } = accountTab();
  if (page === "index.html") {
    const buttons = document.querySelectorAll(".js-event-btn");

    buttons.forEach((element) =>
      element.addEventListener("click", () => {
        handleState(category, element);
      })
    );
  } else {
    const buttons = document.querySelectorAll('.js-event-btn-account')
    if (buttons.length) {
      buttons.forEach(element => element.addEventListener('click', () => {
        handleAccountState(category, element)
      }))
    } else {
      return
    }
  }
};

export { BtnClickHandler };
