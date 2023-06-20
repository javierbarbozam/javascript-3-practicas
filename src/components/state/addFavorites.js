import { stateImmutable } from "./state.js";
import { getCategory } from "../event/components/getCategory.js";
import { filterEvent } from "./filterEvent.js";

const handleFavoriteBtn = async (element) => {
  const eventId = element.dataset.event_id;
  const stateCategory = element.dataset.state;
  const category = getCategory();
  const event = await filterEvent(category, eventId)
  stateImmutable.addEvent(stateCategory, event)
};


const handleEventBtn = async (element) => {
  const eventId = element.currentTarget.dataset.event_id
  const stateCategory = element.currentTarget.value
  const category = getCategory();
  const event = await filterEvent(category, eventId)

  if (stateCategory === 'interested') {
    stateImmutable.addEvent(stateCategory, event)
    stateImmutable.removeGoingEvent(event)
  } else {
    stateImmutable.addEvent(stateCategory, event)
    stateImmutable.removeInterestedEvent(event)
  }
}

export { handleFavoriteBtn, handleEventBtn };