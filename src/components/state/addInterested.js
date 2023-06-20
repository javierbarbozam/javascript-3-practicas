import { stateImmutable } from "./state.js";
import { getCategory } from "../event/components/getCategory.js";
import { filterEvent } from "./filterEvent.js";

const handleEventBtn = async (element) => {
  // Filter which event will be added to the list
  const eventId = element.currentTarget.dataset.event_id;
  const stateCategory = element.currentTarget.value;
  const category = getCategory();
  const event = await filterEvent(category, eventId);
  
  // Add the event to interested or going list
  if (stateCategory === "interested") {
    stateImmutable.addEvent(stateCategory, event);
    stateImmutable.removeGoingEvent(event);
  } else {
    stateImmutable.addEvent(stateCategory, event);
    stateImmutable.removeInterestedEvent(event);
  }
};

export { handleEventBtn };
