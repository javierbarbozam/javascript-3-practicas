import { createTabs } from "./components/createTabs.js";
import { disableTabs } from "./components/disableTabs.js";
import { tabEvents } from "./components/tabEvent.js";


const initTabs = () => {
  createTabs()
  tabEvents()
  disableTabs()
}

export { initTabs };
