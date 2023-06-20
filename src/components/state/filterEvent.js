import { getEvent } from "../event/components/getEvent.js";

const filterEvent = async (category, value) => {
  const events = await getEvent(category);
  const result = events.find((element) => element.id === value);
  return result;
};

export { filterEvent };
