import { fetchEvent } from "../../api/api.js";
import { cacheProxy } from "../../cache/cache.js";
import { stateImmutable } from "../../state/state.js";

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
    console.log(events[value])
    return events[value];
  } else {
    console.log('No hay eventos')
    return 
  }
};

export { getEventCategory, getEventAccount };
