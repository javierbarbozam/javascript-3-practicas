const cache = {}

const cacheHandler = {
	get: function(target, category) {
    return target[category];
  },
  set: function(target, category, value) {
    target[category] = value;
    return true;
  }
}

const cacheProxy = new Proxy(cache, cacheHandler);

export { cacheProxy };