import { createTabs } from "../../../src/components/tabs/createTabs.js";
import { accountCategory } from "../../../src/config.js";

const initAccountTabs = () => {
  createTabs(accountCategory);
};

export { initAccountTabs };
