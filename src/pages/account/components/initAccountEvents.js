import { initCalendar } from "../../../components/calendar.js";
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