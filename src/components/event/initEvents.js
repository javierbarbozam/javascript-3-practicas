import { showEvents } from "./components/showEvent.js";
import { handleFavoriteEvent } from "../state/addFavorites.js";
import { handleInterestedEvent } from "../state/addInterested.js";

const initEvents = async () => {
  await showEvents();

  // add favorites event listener
  handleFavoriteEvent()
  // add favorites event listener
  handleInterestedEvent()
};

export { initEvents };
