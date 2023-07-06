import { showEvents } from "./components/showEvent.js";
import { handleFavoriteEvent } from "../eventCard/components/buttons/addFavorites.js";
import { handleInterestedEvent } from "../state/addInterested.js";
import { getCategory } from "./components/getCategory.js";
import { getEventCategory } from "./components/getEvent.js";
import { addBtnEvent } from "./components/buttons/BtnEvent.js";

const initEvents = async () => {
  const category = getCategory();
  const events = await getEventCategory(category);
  showEvents(events);
  addBtnEvent(category);
  // add favorites event listener
  // handleFavoriteEvent();
  // add favorites event listener
  // handleInterestedEvent();
};

export { initEvents };
