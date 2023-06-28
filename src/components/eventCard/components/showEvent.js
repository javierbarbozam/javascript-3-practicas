import { getPrice } from "./getPrice.js";
import { getDate } from "./getDate.js";
import {createBtn} from './buttons/buttons.js'

const cardContent = (element) => {
  const {image, title, date, location, price, id} = element;
  const content =
  `<li class="event-item">
      <img src="${image}" alt="" class="event-item__img">
      <div class="event-item__wrapper">
        <p class="event-item__title">${title}</p>
        <p class="event-item__date">${getDate(date)}</p>
        <p class="event-item__location">${location.address} • ${location.city}, ${location.state}</p>
        <span class="event-item__price">${getPrice(price)}</span>
        <div class="event-item__btn-wrapper" data-id="event-btn-wrapper">
          ${createBtn(id)}
        </div>
      </div>
    </li>`;
  return content
}

const showEvents = (value) => {
  const container = document.getElementById("event-list");
  let eventList = "";
  value.forEach((element) => {
    eventList +=
    cardContent(element)
  });
  container.innerHTML = eventList;
};

export { cardContent, showEvents };
