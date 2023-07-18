import '../../styles/styles.css';

const renderPlant = (plant) => {
  const container = document.querySelector('.plant');

  // card container
  const card = document.createElement('div');
  card.classList.add('plant-card');

  // card title
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('plant-card__title');
  cardTitle.innerHTML = `
  <span class="">The perfect plant for you is...</span>
  <span class="">${plant.name}</span>`;

  // card images

  // card plant info
  const cardInfo = document.createElement('dl');
  cardInfo.classList.add('plant-card__info');
  cardInfo.innerHTML = `
  <div class="plant-card__info-item">
    <dt>Name</dt>
    <dd>${plant.name}</dd>
  </div>
  <div class="plant-card__info-item">
    <dt>Soil</dt>
    <dd>${plant.soil} soil</dd>
  </div>
  <div class="plant-card__info-item">
    <dt>Pot</dt>
    <dd>${plant.potDecoration} ${plant.potMaterial} pot</dd>
  </div>`;

  if (plant.extras) {
    // create extras element
    const extras = document.createElement('div');
    extras.innerHTML = '<dt>Extras</dt>';
    extras.classList.add('plant-card__info-item');

    // add values from plant instance
    plant.extras.forEach((element) => {
      extras.insertAdjacentHTML('beforeend', `<dd>${element}</dd>`);
    });

    // add extras to card plant info
    cardInfo.insertAdjacentElement('beforeend', extras);
  }

  card.appendChild(cardTitle);
  card.appendChild(cardInfo);
  container.appendChild(card);
};

export { renderPlant };
