import { createTabs } from "../../../components/tabs/components/createTabs.js";
import { accountCategory } from "../../../components/config.js";

const initAccountTabs = () => {
  createTabs(accountCategory);
};

export { initAccountTabs };
