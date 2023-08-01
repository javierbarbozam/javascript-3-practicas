import { renderPlant } from './js/modules/renderPlant.js';
import { userPlant, PlantData } from './js/modules/getPlant.js';
// import './styles/styles.css';

const initPlant = async () => {
  await PlantData();
  renderPlant(userPlant, true);
};

initPlant();
