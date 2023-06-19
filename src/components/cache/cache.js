import { DataStorage } from "../localStorage/localStorage.js";

const eventCache = new DataStorage('eventCache')

const cacheHandler = {
	get: function(target, category) {
    return target.getData(category)
  },
  set: function(target, category, value) {
    target.data[category] = value;
    target.addData()
    return true;
  }
}

const cacheProxy = new Proxy(eventCache, cacheHandler);

export { cacheProxy };