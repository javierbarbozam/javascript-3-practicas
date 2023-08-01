// const handleMaterialChange = (data) => {
//   const currentImage = document.querySelector('.plant-card__preview--pot');
//   const currentDescription = document.getElementById('card-pot-description');

//   if (data.potMaterial === 'ceramic') {
//     userPlant.ceramicPot();
//   } else {
//     userPlant.clayPot();
//   }

//   currentImage.setAttribute(
//     'src',
//     `/src/assets/pots/${userPlant.potMaterial}-${userPlant.potDecoration}-${userPlant.potColor}.png`,
//   );
//   currentDescription.innerHTML = `${userPlant.potDecoration} ${userPlant.potMaterial} pot`;
// };

// const handleDecorationChange = (data) => {
//   const currentImage = document.querySelector('.plant-card__preview--pot');
//   const currentDescription = document.getElementById('card-pot-description');
//   const label = document.getElementById('pot-decoration-trigger-label');

//   if (data.potDecoration) {
//     label.innerHTML = 'Yes';
//     userPlant.potStyle('decorated');
//   } else {
//     label.innerHTML = 'No';
//     userPlant.potStyle('simple');
//   }

//   currentImage.setAttribute(
//     'src',
//     `/src/assets/pots/${userPlant.potMaterial}-${userPlant.potDecoration}-${userPlant.potColor}.png`,
//   );
//   currentDescription.innerHTML = `${userPlant.potDecoration} ${userPlant.potMaterial} pot`;
// };

// const handleSoilChange = (data) => {
//   const currentImage = document.querySelector('.plant-card__preview--soil');
//   const currentDescription = document.getElementById('card-soil');

//   if (data.soil) {
//     userPlant.soilType(data.soil);
//   }

//   currentImage.setAttribute(
//     'src',
//     `/src/assets/soil/soil-${userPlant.soil}.png`,
//   );
//   currentDescription.innerHTML = `${userPlant.soil}`;
// };

// const handlePlantChange = (data) => {
//   const currentImage = document.querySelector('.plant-card__preview--plant');
//   const currentDescription = document.getElementById('card-plant-name');

//   if (data.name) {
//     userPlant.setName(data.name);
//   }

//   currentImage.setAttribute(
//     'src',
//     `/src/assets/plants/plant-${userPlant.name}.png`,
//   );

//   currentDescription.innerHTML = userPlant.name;
// };

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

const renderVisualizer = () => {
  plantCardObserver.subscribe(handleColorChange);
};

export { renderVisualizer };
