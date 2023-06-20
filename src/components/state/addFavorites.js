import { stateImmutable } from "./state.js";
import { getCategory } from "../event/components/getCategory.js";
import { filterEvent } from "./filterEvent.js";

const addFavorite = async (element) => {
  // Filter which event will be added to the list
  const eventId = element.dataset.event_id;
  const stateCategory = element.dataset.state;
  const category = getCategory();
  const event = await filterEvent(category, eventId)

  stateImmutable.addEvent(stateCategory, event)
};

const handleFavoriteEvent = () => {
  const favoriteBtn = document.querySelectorAll('[data-id="js-favorite-btn"]');
  favoriteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      addFavorite(element);
    });
  });

}

export { handleFavoriteEvent };