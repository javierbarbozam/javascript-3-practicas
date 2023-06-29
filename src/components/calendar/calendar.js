import { cardContent } from "../eventCard/components/showEvent.js";
import { stateImmutable } from "../state/state.js";

let currentMonth = 0;
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const calendarVariables = () => {
  // set month every time buttons are clicked
  const currentDate = new Date();
  if (currentMonth !== 0) {
    currentDate.setMonth(new Date().getMonth() + currentMonth);
  }

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthDays = new Date(year, month + 1, 0).getDate();

  return { currentDate, day, month, year, monthDays };
};

const addCalendarContainer = () => {
  const container = document.getElementById("main-content");
  const calendar = document.createElement("div");
  calendar.classList.add("calendar");
  calendar.id = "calendar";
  container.appendChild(calendar);
};

const addCalendarHeader = () => {
  const calendar = document.getElementById("calendar");
  const { currentDate, year } = calendarVariables();

  // Clean container every time buttons are clicked and creates container first time the page loads
  let container = document.querySelector(".calendar-header");
  if (container) {
    container.innerHTML = "";
  } else {
    container = document.createElement("div");
    container.classList.add("calendar-header");
  }
  container.innerHTML = `<p class="calendar-header__date">${currentDate.toLocaleDateString(
    "en-us",
    { month: "long" }
  )} ${year}</p>`;
  calendar.insertAdjacentElement("afterbegin", container);

  // Adding change month buttons
  createBtn();
};

const addWeekDays = () => {
  const calendar = document.getElementById("calendar");
  const container = document.createElement("div");
  container.classList.add("calendar-weekday");
  let result = "";
  weekdays.forEach(
    (element) =>
      (result += `<span class="calendar-weekday__item">${element}</span>`)
  );
  container.innerHTML = result;
  calendar.appendChild(container);
};

const addForeignDays = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const foreignDays = weekdays.indexOf(
    firstDayOfMonth.toLocaleDateString("en-us", { weekday: "long" })
  );
  return foreignDays;
};

const createBtn = () => {
  const container = document.querySelector(".calendar-header");
  const btn = `<button class="calendar-header__btn calendar-header__btn--previous" id="calendar-btn-previous">Previous</button>
    <button class="calendar-header__btn calendar-header__btn--next" id="calendar-btn-next">Next</button>`;
  container.insertAdjacentHTML("afterbegin", btn);
};

const handleMonthChange = () => {
  const monthBtn = document.querySelectorAll(".calendar-header__btn");
  monthBtn.forEach((element) =>
    element.addEventListener("click", (e) => {
      e.currentTarget.id === "calendar-btn-next"
        ? currentMonth++
        : currentMonth--;
      addCalendarHeader();
      handleMonthChange();
      createCalendar();
    })
  );
};

const addDays = (container) => {
  const { day, month, year, monthDays } = calendarVariables();
  const foreignDays = addForeignDays(year, month);

  for (let i = 1; i <= foreignDays + monthDays; i++) {
    // create all days HTML
    const dayWrapper = document.createElement("div");
    dayWrapper.classList.add("calendar-month__item");

    if (i > foreignDays) {
      // Add day to every box
      dayWrapper.innerHTML = `<span class="calendar-month__item__date">${
        i - foreignDays
      }</span>`;

      // Add style to current day
      i - foreignDays === day && currentMonth === 0
        ? dayWrapper.classList.add("calendar-month__item--today")
        : null;

      // Add event preview to current looped day
      const date = `${month + 1}/${i - foreignDays}/${year}`;
      addEvents(date, dayWrapper);
    } else {
      dayWrapper.classList.add("calendar-month__item--foreign");
    }
    container.appendChild(dayWrapper);
    calendar.appendChild(container);
  }
};

const addEvents = (value, container) => {
  const events = stateImmutable.getState();
  const eventCategories = Object.keys(events);

  // Fix timestamp to date format
  for (const category of eventCategories) {
    for (const obj of events[category]) {
      obj.date = new Date(obj.date).toLocaleDateString("en-us");

      // Add event if date matches
      if (value === obj.date) {
        const result = document.createElement("p");
        result.id = `${obj.id}`;
        result.classList.add(
          "calendar-month__item__event",
          `calendar-month__item__event--${category}`
        );
        result.innerHTML = `${obj.title}`;
        result.addEventListener("click", (e) => {
          e.stopPropagation();
          openEventModal(e, category);
        });
        container.appendChild(result);
      }
    }
  }
};

const openEventModal = (event, category) => {
  const eventId = event.currentTarget.id;
  const eventInfo = stateImmutable.getEvent(category, eventId);
  const container = document.querySelector("body");

  //create elements
  const eventContainer = document.createElement("div");
  const overlay = document.createElement("div");

  // Add classes
  overlay.classList.add('calendar-modal__overlay')
  eventContainer.classList.add("calendar-modal");

  overlay.addEventListener('click', closeEventModal)
  // Add event to DOM
  eventContainer.innerHTML = cardContent(eventInfo);
  container.prepend(eventContainer, overlay);
}

const closeEventModal = () =>  {
  const eventContainer = document.querySelector('.calendar-modal')
  const overlay = document.querySelector('.calendar-modal__overlay')
  eventContainer.remove()
  overlay.remove()
}

const createCalendar = () => {
  const calendar = document.getElementById("calendar");

  // Creates container first time the page loads and cleans it every time buttons are clicked
  let daysContainer = document.querySelector(".calendar-month");
  if (daysContainer) {
    daysContainer.innerHTML = "";
  } else {
    daysContainer = document.createElement("div");
    daysContainer.classList.add("calendar-month");
  }

  // Insert days into month
  addDays(daysContainer);
};

const initCalendar = () => {
  addCalendarContainer();
  addCalendarHeader();
  addWeekDays();
  createCalendar();
  handleMonthChange();
};

export { initCalendar };