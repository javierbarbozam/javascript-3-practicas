import { showEvents } from "./components/showEvent.js";
import { getCategory } from "./components/getCategory.js";
import { getEventCategory } from "./components/getEvent.js";
import { addButtonEvent } from "./components/buttons/BtnEvent.js";

const initEvents = async () => {
  const category = getCategory();
  const events = await getEventCategory(category);
  showEvents(events);
  addButtonEvent(category);
};

export { initEvents };
