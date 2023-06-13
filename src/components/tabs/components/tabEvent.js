import { cacheProxy } from "../../cache/cache.js";
import { showEvents } from "../../event/showEvent.js";

const tabEvents = () => {
  const tabs = document.querySelectorAll('li[class="nav-wrapper-list__item"]');
  tabs.forEach((element) => {
    element.addEventListener("click", async () => {
      const category = element.id
      showEvents(category)
    });
  });
};

export { tabEvents };