const plantTitle = (plant) => {
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('plant-card__header');
  cardHeader.innerHTML = `
  <span class="plant-card__header-text">The perfect plant for you is...</span>
  <span class="plant-card__header-title">${plant.name}</span>`;

  return cardHeader;
};

const plantInfo = (plant) => {
  const cardInfo = document.createElement('table');
  cardInfo.classList.add('plant-card__info');

  const addExtras = () => {
    let extrasHTML = '';
    plant.extras.forEach((element) => {
      extrasHTML += `<p>${element}</p>`;
    });
    return extrasHTML;
  };

  if (plant.extras) {
    cardInfo.innerHTML = `
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Name</td>
      <td class="plant-card__info-text">${plant.name}</td>
    </tr>
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Soil</td>
      <td class="plant-card__info-text">${plant.soil} soil</td>
    </tr>
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Pot</td>
      <td class="plant-card__info-text">${plant.potDecoration} ${
        plant.potMaterial
      } pot</td>
    </tr>
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Extras</td>
      <td class="plant-card__info-text">
        ${addExtras()}
      </td>
    </tr>`;
  } else {
    cardInfo.innerHTML = `
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Name</td>
      <td class="plant-card__info-text">${plant.name}</td>
    </tr>
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Soil</td>
      <td class="plant-card__info-text">${plant.soil} soil</td>
    </tr>
    <tr class="plant-card__info-item">
      <td class="plant-card__info-title">Pot</td>
      <td class="plant-card__info-text">${plant.potDecoration} ${plant.potMaterial} pot</td>
    </tr>`;
  }

  return cardInfo;
};

const plantPreview = (plant) => {
  const container = document.createElement('div');
  container.classList.add('plant-card__preview');
  let images = `
  <img class="plant-card__preview plant-card__preview--plant" src="/src/assets/plants/plant-${plant.name}.png" alt="">
  <img class="plant-card__preview plant-card__preview--soil" src="/src/assets/soil/soil-${plant.soil}.png" alt="">
  <img class="plant-card__preview plant-card__preview--pot" src="/src/assets/pots/${plant.potDecoration}-${plant.potMaterial}-pot.png" alt="">`;

  if (plant.extras) {
    plant.extras.forEach((element) => {
      images += `<img class="plant-card__preview plant-card__preview--${element}" src="/src/assets/extra/${element}.png" alt="">`;
    });
  }

  container.innerHTML = images;
  return container;
};

const renderPlant = (plant) => {
  const container = document.querySelector('.plant-card');
  container.innerHTML = '';

  const title = plantTitle(plant);
  const info = plantInfo(plant);
  const images = plantPreview(plant);

  container.appendChild(title);
  container.appendChild(images);
  container.appendChild(info);
};

export { renderPlant };
