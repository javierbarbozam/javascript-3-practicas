import { PlantData } from './js/modules/getPlant.js';
import { renderPlant } from './js/modules/renderPlant.js';
// import './styles/styles.css';

const initPlant = async () => {
  const plant = await PlantData();
  renderPlant(plant);
};

initPlant();
