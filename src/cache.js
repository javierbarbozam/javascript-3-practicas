import { DataStorage } from "./localStorage.js";

const eventCache = new DataStorage('eventCache')

const cacheHandler = {
	get: function(target, category) {
    return target.getProperty(category)
  },
  set: function(target, category, value) {
    target.addProperty(category, value)
    return true;
  }
}

const cacheProxy = new Proxy(eventCache, cacheHandler);

export { cacheProxy };