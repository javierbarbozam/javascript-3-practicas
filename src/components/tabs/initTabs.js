import { eventCategory } from "../../config.js";
import { createTabs } from "./createTabs.js";


const initTabs = () => {
  createTabs(eventCategory)
}

export { initTabs };
