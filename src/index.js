import { renderPlant } from './js/modules/renderPlant.js';
import { userPlant, PlantData } from './js/modules/getPlant.js';
import { initCustomizeForm } from './js/customize-form.js';

const initPlant = async () => {
  await PlantData();
  renderPlant(userPlant, initCustomizeForm);
};

initPlant();
