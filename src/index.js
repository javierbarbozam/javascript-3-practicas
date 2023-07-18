import { setPlantData } from './js/modules/getFormData.js';
import { renderPlant } from './js/modules/renderPlant.js';

const initPlant = async () => {
  const plant = await setPlantData();
  renderPlant(plant);
};

initPlant();
