import { initCalendar } from "../../../src/components/calendar.js";
import { getAccountCategory } from "../../../src/components/eventCard/getCategory.js";
import { getEventAccount } from "../../../src/components/eventCard/getEvent.js";
import { showEvents } from "../../../src/components/eventCard/showEvent.js";

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