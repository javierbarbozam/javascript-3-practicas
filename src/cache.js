const eventCache = {
  data: JSON.parse(localStorage.getItem("eventCache")) || {},
  addProperty(property, value) {
    this.data[property] = value;
    this.saveData();
  },
  getProperty(property) {
    return this.data[property];
  },
  saveData() {
    localStorage.setItem('eventCache', JSON.stringify(this.data));
  },
};

const cacheHandler = {
  get: function (target, category) {
    return target.getProperty(category);
  },
  set: function (target, category, value) {
    target.addProperty(category, value);
    return true;
  },
};

const cacheProxy = new Proxy(eventCache, cacheHandler);

export { cacheProxy };
