import { fetchEvent } from "../api/api.js";
import { getPrice } from "./getPrice.js";
import { getDate } from "./getDate.js";

const urlCategory = () => {
  let category = new URLSearchParams(window.location.search).get("category");
  category === null ? (category = "music") : null;
  return category;
};

const getEvents = async () => {
  const category = urlCategory();
  const events = await fetchEvent(category);
  return events;
};

const showEvents = async () => {
  const events = await getEvents();
  const container = document.getElementById("event-list");
  let eventList = "";
  events.forEach((element) => {
    eventList +=
    `<li class="event-item">
      <img src="${element.image}" alt="" class="event-item__img">
      <div class="event-item__wrapper">
        <p class="event-item__title">${element.title}</p>
        <p class="event-item__date">${getDate(element.date)}</p>
        <p class="event-item__location">${element.location.address} • ${element.location.city}, ${element.location.state}</p>
        <span class="event-item__price">${getPrice(element.price)}</span>
      </div>
    </li>`;
  });
  container.innerHTML = eventList;
};

const initEvents = () => {
  showEvents();
};

export { initEvents };
