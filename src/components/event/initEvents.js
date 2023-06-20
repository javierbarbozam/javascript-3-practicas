import { showEvents } from "./components/showEvent.js";
import { handleFavoriteBtn } from "../state/addFavorites.js";
import { handleEventBtn } from "../state/addInterested.js";

const initEvents = async () => {
  await showEvents();
  // add favorites event listener
  const favoriteBtn = document.querySelectorAll('[data-id="js-favorite-btn"]');
  favoriteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      handleFavoriteBtn(element);
    });
  });

  // add favorites event listener
  const interestedBtn = document.querySelectorAll('[data-id="event_state"]');
  interestedBtn.forEach(element => {
    element.addEventListener("click", (e) => {
      e.preventDefault()
      handleEventBtn(e)
    })
  })
};

export { initEvents };
