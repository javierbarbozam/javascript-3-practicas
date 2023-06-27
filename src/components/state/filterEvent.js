import { cacheProxy } from "../cache/cache.js";

const filterEvent = (category, value) => {
  const events = cacheProxy[category]
  const result = events.find((element) => element.id === value);
  return result;
};

export { filterEvent };