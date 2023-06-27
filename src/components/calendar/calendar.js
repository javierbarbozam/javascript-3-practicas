import { stateImmutable } from "../state/state.js";

// Global variables
let currentMonth = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const addCalendarContainer = () => {
  const container = document.getElementById("main-content");
  const calendar = document.createElement("div");
  calendar.classList.add("calendar");
  calendar.id = "calendar";
  container.appendChild(calendar);
}

const addWeekDays = () => {
  const calendar = document.getElementById('calendar')
  const container = document.createElement("div");
  container.classList.add("calendar-weekday");
  let result = "";
  weekdays.forEach(
    (element) =>
      (result += `<span class="calendar-weekday__item">${element}</span>`)
  );
  container.innerHTML = result;
  calendar.appendChild(container)
};

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

  return {currentDate, day, month, year, monthDays}
}

const addForeignDays = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const foreignDays = weekdays.indexOf(
    firstDayOfMonth.toLocaleDateString('en-us', {weekday: 'long'})
  );
  return foreignDays
}

const addCalendarHeader = () => {
  const calendar = document.getElementById('calendar')
  const {currentDate, year} = calendarVariables()

  // Clean container every time buttons are clicked and creates container first time the page loads
  let container = document.querySelector('.calendar-header')
  if (container) {
    container.innerHTML = ''
  } else {
    container = document.createElement("div");
    container.classList.add("calendar-header");
  }
  container.innerHTML =
  `<p class="calendar-header__date">${currentDate.toLocaleDateString('en-us', { month: 'long' })} ${year}</p>`
  calendar.insertAdjacentElement(
    'afterbegin', container
  )

  // Adding change month buttons
  createBtn()
}

const createBtn = () => {
  const container = document.querySelector('.calendar-header')
  const btn = 
    `<button class="calendar-header__btn calendar-header__btn--previous" id="calendar-btn-previous">Previous</button>
    <button class="calendar-header__btn calendar-header__btn--next" id="calendar-btn-next">Next</button>`
  container.insertAdjacentHTML(
    'afterbegin', btn
  )
}

const handleMonthChange = () => {
  const nextBtn = document.getElementById('calendar-btn-next')
  const previousBtn = document.getElementById('calendar-btn-previous')

  nextBtn.addEventListener('click', () => {
    currentMonth++;
    addCalendarHeader();
    handleMonthChange()
    createCalendar();
  });

  previousBtn.addEventListener('click', () => {
    currentMonth--;
    addCalendarHeader();
    handleMonthChange()
    createCalendar();
  });
  

}

const addDays = (container) => {
  const {day, month, year, monthDays} = calendarVariables()
  const foreignDays = addForeignDays(year, month)

  for(let i = 1; i <= foreignDays + monthDays; i++) {
    // create all days HTML
    const dayWrapper = document.createElement('div');
    dayWrapper.classList.add('calendar-month__item');

    if (i > foreignDays) {
      dayWrapper.innerHTML = `<span>${i - foreignDays}</span>`
      // Add style to current day
      i - foreignDays === day && currentMonth === 0 ? dayWrapper.classList.add('calendar-month__item--today') : null

      dayWrapper.addEventListener('click', () => openEventModal())
    } else {
      dayWrapper.classList.add('calendar-month__item--foreign');
    }
    container.appendChild(dayWrapper);
    calendar.appendChild(container);
  }
}

const addEvents = () => {
  const events = stateImmutable.getState()

  return events
}
console.log(addEvents())

const createCalendar = () => {
  const calendar = document.getElementById('calendar')

  // Clean container every time buttons are clicked and creates container first time the page loads
  let daysContainer = document.querySelector('.calendar-month')
  if (daysContainer) {
    daysContainer.innerHTML = '';
  } else {
    daysContainer = document.createElement("div");
    daysContainer.classList.add("calendar-month");
  }

  // Insert days into month
  addDays(daysContainer)
}

function openEventModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  createCalendar();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

const initCalendar = () => {
  addCalendarContainer()
  addCalendarHeader()
  addWeekDays()
  createCalendar();
  handleMonthChange()
  initButtons();
};

export { initCalendar };


// function openModal(date) {
//   clicked = date;

//   const eventForDay = events.find(e => e.date === clicked);

//   if (eventForDay) {
//     document.getElementById('eventText').innerText = eventForDay.title;
//     deleteEventModal.style.display = 'block';
//   } else {
//     newEventModal.style.display = 'block';
//   }

//   backDrop.style.display = 'block';
// }