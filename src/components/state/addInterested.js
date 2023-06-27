import { stateImmutable } from "./state.js";
import { getCategory } from "../eventCard/components/getCategory.js";
import { filterEvent } from "./filterEvent.js";

const AddInterested = async (element) => {
  // Filter which event will be added to the list
  const eventId = element.currentTarget.dataset.event_id;
  const stateCategory = element.currentTarget.value;
  const category = getCategory();
  const event = await filterEvent(category, eventId);
  
  // Add the event to interested or going list
  if (stateCategory === "interested") {
    console.log(stateCategory)
    stateImmutable.addEvent(stateCategory, event);
    stateImmutable.removeGoingEvent(event);
  } else {
    stateImmutable.addEvent(stateCategory, event);
    stateImmutable.removeInterestedEvent(event);
  }
};

const handleInterestedEvent = () => {
  const interestedBtn = document.querySelectorAll('[data-id="event_state"]');
  interestedBtn.forEach(element => {
    element.addEventListener("click", (e) => {
      AddInterested(e)
    })
  })
}

export { handleInterestedEvent };
