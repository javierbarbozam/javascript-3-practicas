import { createTabs } from "./components/createTabs.js";
import { eventCategory } from "../config.js";


const initTabs = () => {
  createTabs(eventCategory)
}

export { initTabs };
