import { renderPlant } from './modules/renderPlant.js';
import { userPlant, plantCardObserver } from './modules/getPlant.js';

const handleColorChange = (data) => {
  if (data.color_trigger) {
    userPlant.setPotColor(data.potColor || 'unpainted');
  } else {
    userPlant.setPotColor('unpainted');
  }
  renderPlant(userPlant);
};

const handlePlantChange = (data) => {
  userPlant.setName(data.name);
  renderPlant(userPlant);
};

const handleDecorationChange = (data) => {
  const label = document.getElementById('pot-decoration-trigger-label');

  if (data.potDecoration) {
    label.innerHTML = 'Yes';
    userPlant.potStyle('decorated');
  } else {
    label.innerHTML = 'No';
    userPlant.potStyle('simple');
  }

  renderPlant(userPlant);
};

const handleSoilChange = (data) => {
  userPlant.soilType(data.soilCustomize);
  renderPlant(userPlant);
};

const handleMaterialChange = (data) => {
  if (data.potMaterial === 'ceramic') {
    userPlant.ceramicPot();
  } else {
    userPlant.clayPot();
  }
  renderPlant(userPlant);
};

const handleExtrasChange = (data) => {
  userPlant.addExtras(data.extrasCustomize);
  renderPlant(userPlant);
};

const renderVisualizer = () => {
  plantCardObserver.subscribe(handleSoilChange);
  plantCardObserver.subscribe(handleColorChange);
  plantCardObserver.subscribe(handlePlantChange);
  plantCardObserver.subscribe(handleExtrasChange);
  plantCardObserver.subscribe(handleMaterialChange);
  plantCardObserver.subscribe(handleDecorationChange);
};

export { renderVisualizer };
