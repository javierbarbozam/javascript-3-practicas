import { getAccountCategory } from "../../../components/event/components/getCategory.js";
import { getEventAccount } from "../../../components/event/components/getEvent.js";
import { showEvents } from "../../../components/event/components/showEvent.js";

const initAccountEvents = () => {
  const category = getAccountCategory()
  const events = getEventAccount(category)
  showEvents(events)
};

export { initAccountEvents };
