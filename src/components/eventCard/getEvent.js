import { fetchEvent } from "../../api.js";
import { cacheProxy } from "../../cache.js";
import { stateImmutable } from "../../state.js";

const getEventCategory = async (value) => {
  if (cacheProxy[value]) {
    return cacheProxy[value];
  } else {
    const events = await fetchEvent(value);
    cacheProxy[value] = events;
    return events;
  }
};

const getEventAccount = (value) => {
  const events = stateImmutable.getState();
  if (events[value].length) {
    return events[value];
  } else {
    return 
  }
};

export { getEventCategory, getEventAccount };
