import { initCalendar } from "../calendar.js";
import { BtnClickHandler } from "./buttons/btnClickHandler.js";
import { initBtnStyles } from "./buttons/btnStyleHandler.js";
import { createBtn } from "./buttons/createBtn.js";
import { getAccountCategory, getCategory } from "./getCategory.js";
import { getEventAccount, getEventCategory } from "./getEvent.js";

const getPrice = (value) => {
  let price = "";
  value === 0 ? (price = "Free") : (price = `$${value.toFixed(2)}`);
  return price;
};

const getDate = (value) => {
  const date = new Date(value);
  const options = {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-us", options);
};

const cardContent = (element) => {
  const { image, title, date, location, price, id } = element;
  const content = `<li class="event-item">
      <img src="${image}" alt="" class="event-item__img">
      <div class="event-item__wrapper">
        <p class="event-item__title">${title}</p>
        <p class="event-item__date">${getDate(date)}</p>
        <p class="event-item__location">${location.address} • ${
    location.city
  }, ${location.state}</p>
        <span class="event-item__price">${getPrice(price)}</span>
        ${createBtn(id)}
      </div>
    </li>`;
  return content;
};

const showEvents = (value) => {
  if (!value) {
    const container = document.getElementById("main-content");
    const message = '<p class="main-content__message">No events added</p>'
    container.insertAdjacentHTML('afterbegin', message)
  } else {
    const container = document.getElementById("event-list");
    let eventList = "";
    value.forEach((element) => {
      eventList += cardContent(element);
    });
    container.innerHTML = eventList;
  }
};

const initHomeEvents = async () => {
  const category = getCategory();
  const events = await getEventCategory(category);
  showEvents(events);
  BtnClickHandler(category);
  initBtnStyles();
};

const initAccountEvents = () => {
  const category = getAccountCategory();
  if (category === "calendar") {
    initCalendar();
  } else {
    const events = getEventAccount(category);
    showEvents(events);
  }
};

export { cardContent, initHomeEvents, initAccountEvents };
