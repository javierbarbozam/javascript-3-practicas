import { stateImmutable } from "./state.js";
import { getCategory } from "../event/components/getCategory.js";
import { filterEvent } from "./filterEvent.js";

const eventBtnFunctionability = async (value) => {
  const eventId = value.dataset.event_id;
  const category = getCategory();
  const event = await filterEvent(category, eventId);
  return event;
};

const initEventButtons = async (value) => {
  const event = await eventBtnFunctionability(value);
  const stateCategory = value.dataset.state;
  stateImmutable.addEvent(stateCategory, event);
};

export { initEventButtons };
