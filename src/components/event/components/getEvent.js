import { fetchEvent } from "../../api/api.js";
import { cacheProxy } from "../../cache/cache.js";

const getEvent = async (value) => {
  if (cacheProxy[value]) {
    return cacheProxy[value]
  } else {
    const events = await fetchEvent(value);
    cacheProxy[value] = events
    return events;
  }
};

export { getEvent };
