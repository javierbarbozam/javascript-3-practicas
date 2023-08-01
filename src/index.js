import { renderPlant } from './js/modules/renderPlant.js';
import { userPlant, PlantData } from './js/modules/getPlant.js';
import { initCustomizeForm } from './js/customize-form.js';
// import './styles/styles.css';

const initPlant = async () => {
  await PlantData();
  await renderPlant(userPlant, true);
  initCustomizeForm();
};

initPlant();
