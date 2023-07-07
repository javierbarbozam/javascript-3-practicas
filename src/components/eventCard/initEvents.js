import { showEvents } from "./components/showEvent.js";
import { getCategory } from "./components/getCategory.js";
import { getEventCategory } from "./components/getEvent.js";
import { BtnClickHandler } from "./components/buttons/btnClickHandler.js";

const initEvents = async () => {
  const category = getCategory();
  const events = await getEventCategory(category);
  showEvents(events);
  BtnClickHandler(category);
};

export { initEvents };
