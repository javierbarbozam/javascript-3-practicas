import { getPrice } from "./getPrice.js";
import { getDate } from "./getDate.js";
import { getEvent } from "./getEvent.js";
import { getCategory } from "./getCategory.js";
import { initEventButtons } from "../../state/addFavorites.js";

const showEvents = async (value) => {
  const category = getCategory();
  const events = await getEvent(category);
  const container = document.getElementById("event-list");
  let eventList = "";
  events.forEach((element) => {
    eventList += `<li class="event-item">
      <button data-id="js-favorite-btn" data-event_id="${element.id}" data-state="favorite">
        <span class="material-symbols-rounded">favorite</span>
      </button> 
      <img src="${element.image}" alt="" class="event-item__img">
      <div class="event-item__wrapper">
        <p class="event-item__title">${element.title}</p>
        <p class="event-item__date">${getDate(element.date)}</p>
        <p class="event-item__location">${element.location.address} • ${element.location.city}, ${element.location.state}</p>
        <span class="event-item__price">${getPrice(element.price)}</span>
        <div>
          <button data-id="js-interested-btn" data-event_id="${element.id}" data-state="interested">Interested</button>
          <button data-id="js-going-btn" data-event_id="${element.id}" data-state="going">Going!</button>
        </div>
      </div>
    </li>`;
  });
  container.innerHTML = eventList;

  // add favorites event listener
  const favoriteBtn = document.querySelectorAll('[data-id="js-favorite-btn"]');
  favoriteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      initEventButtons(element);
    });
  });
  // add interested event listener
  const interestedBtn = document.querySelectorAll('[data-id="js-interested-btn"]');
  interestedBtn.forEach((element) => {
    element.addEventListener("click", () => {
      initEventButtons(element);
    });
  });
  // add going event listener
  const goingBtn = document.querySelectorAll('[data-id="js-going-btn"]');
  goingBtn.forEach((element) => {
    element.addEventListener("click", () => {
      initEventButtons(element);
    });
  });
};

export { showEvents };
