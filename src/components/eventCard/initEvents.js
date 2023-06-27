import { showEvents } from "./components/showEvent.js";
import { handleFavoriteEvent } from "../eventCard/components/buttons/addFavorites.js";
import { handleInterestedEvent } from "../state/addInterested.js";
import { getCategory } from "./components/getCategory.js";
import { getEventCategory } from "./components/getEvent.js";

const initEvents = async () => {
  const category = getCategory();
  const events = await getEventCategory(category);
  showEvents(events);
  // add favorites event listener
  handleFavoriteEvent();
  // add favorites event listener
  handleInterestedEvent();
};

export { initEvents };
