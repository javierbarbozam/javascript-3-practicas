import { fetchEvent } from "../api/api.js";
import { cacheProxy } from "../cache/cache.js";

const getEvent = async (value) => {
  if (cacheProxy[value]) {
    console.log('using cache') //validating where data comes from
    return cacheProxy[value]
  } else {
    const events = await fetchEvent(value);
    cacheProxy[value] = events
    console.log('using fetch') //validating where data comes from
    return events;
  }
};

export { getEvent };
