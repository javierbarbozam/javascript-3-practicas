import { fetchEvent } from "../api/api.js";
import { eventCache, cacheProxy } from "../cache/cache.js";

const getEvent = async (value) => {
  if (cacheProxy[value]) {
    // console.log('using cache') //validating where data comes from
    console.log(eventCache)
    return cacheProxy[value]
  } else {
    const events = await fetchEvent(value);
    cacheProxy[value] = events
    // console.log('using fetch') //validating where data comes from
    console.log(eventCache)
    return events;
  }
};

export { getEvent };
