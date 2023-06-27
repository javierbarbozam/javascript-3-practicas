import { initCalendar } from "../../../components/calendar/calendar.js";
import { getAccountCategory } from "../../../components/eventCard/components/getCategory.js";
import { getEventAccount } from "../../../components/eventCard/components/getEvent.js";
import { showEvents } from "../../../components/eventCard/components/showEvent.js";

const initAccountEvents = () => {
  const category = getAccountCategory()
  if (category === 'calendar') {
    initCalendar()
  } else {
    const events = getEventAccount(category)
    showEvents(events)
  }
  
};

export { initAccountEvents };
/*
const createCalendar = () => {
  const calendar = document.getElementById('calendar')
  const {day, month, year, monthDays} = calendarVariables()
  const foreignDays = addForeignDays(year, month)

  // Clean container every time buttons are clicked and creates container first time the page loads
  let daysContainer = document.querySelector('.calendar-month')
  if (daysContainer) {
    daysContainer.innerHTML = ''
  } else {
    daysContainer = document.createElement("div");
    daysContainer.classList.add("calendar-month");
  }

  // Insert days into month
  for(let i = 1; i <= foreignDays + monthDays; i++) {
    const dayContainer = document.createElement('div');
    dayContainer.classList.add('calendar-month__item');

    const dayString = `${month + 1}/${i - foreignDays}/${year}`;

    if (i > foreignDays) {
      dayContainer.innerText = i - foreignDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - foreignDays === day && currentMonth === 0) {
        dayContainer.classList.add('calendar-month__item--today')
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        dayContainer.appendChild(eventDiv);
      }

      dayContainer.addEventListener('click', () => openModal(dayString));
    } else {
      dayContainer.classList.add('calendar-day__item--foreign');
    }
    daysContainer.appendChild(dayContainer);

    calendar.appendChild(daysContainer)
  }
}

*/
