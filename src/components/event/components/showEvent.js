import { getPrice } from "./getPrice.js";
import { getDate } from "./getDate.js";
import { getEvent } from "./getEvent.js";
import { getCategory } from "./getCategory.js";

const showEvents = async (value) => {
  const category = getCategory()
  const events = await getEvent(category);
  const container = document.getElementById("event-list");
  let eventList = "";
  events.forEach((element) => {
    eventList += `<li class="event-item">
      <button>
        <span class="material-symbols-rounded">favorite</span>
      </button> 
      <img src="${element.image}" alt="" class="event-item__img">
      <div class="event-item__wrapper">
        <p class="event-item__title">${element.title}</p>
        <p class="event-item__date">${getDate(element.date)}</p>
        <p class="event-item__location">${element.location.address} • ${
      element.location.city
    }, ${element.location.state}</p>
        <span class="event-item__price">${getPrice(element.price)}</span>
      </div>
    </li>`;
  });
  container.innerHTML = eventList;
};

export { showEvents };
