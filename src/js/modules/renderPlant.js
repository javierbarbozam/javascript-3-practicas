const renderPlant = (plant) => {
  const container = document.querySelector('.plant-card');
  container.innerHTML = '';

  // card title
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('plant-card__header');
  cardHeader.innerHTML = `
  <span class="plant-card__header-text">The perfect plant for you is...</span>
  <span class="plant-card__header-title">${plant.name}</span>`;

  // card images

  // card plant info
  const cardInfo = document.createElement('dl');
  cardInfo.classList.add('plant-card__info');
  cardInfo.innerHTML = `
  <table class="plant-card__info">
    <tr class="plant-card__info-item">
      <td>Name</td>
      <td>${plant.name}</td>
    </tr>
    <tr class="plant-card__info-item">
      <td>Soil</td>
      <td>${plant.soil} soil</td>
    </tr>
    <tr class="plant-card__info-item">
      <td>Pot</td>
      <td>${plant.potDecoration} ${plant.potMaterial} pot</td>
    </tr>
  </table>`;

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

  container.appendChild(cardHeader);
  container.appendChild(cardInfo);
};

export { renderPlant };
