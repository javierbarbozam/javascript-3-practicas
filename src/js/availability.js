import { userPlant } from './modules/getPlant.js';
import { getOrderInfo } from './inventory.js';

const renderTitle = () => {
  const title = document.createElement('h2');
  title.classList.add('availability-title');
  title.innerHTML = `Plant with ${userPlant.potDecoration} ${userPlant.potMaterial} pot and ${userPlant.soil} soil`;
  return title;
};

const initAvailability = async () => {
  const mainContainer = document.querySelector('.container');
  const section = document.createElement('section');
  section.classList.add('availability-wrapper');

  const title = renderTitle();
  section.appendChild(title);
  mainContainer.appendChild(section);
  getOrderInfo(userPlant);
};

function handleAvailability() {
  const plantForm = document.querySelector('.plant-form-wrapper');
  plantForm.style.display = 'none';
  initAvailability();

  this.removeEventListener('click', handleAvailability);
  this.innerHTML = '< Back to customization';
  this.addEventListener('click', () => {
    plantForm.style.display = 'block';
    this.innerHTML = 'Check availability >';
    document.querySelector('.availability-wrapper').remove();
  });
}

export { handleAvailability };
