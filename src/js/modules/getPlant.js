import { Plant } from '../Plant.js';
import { Publisher } from '../Publisher.js';
import { plantConfig } from '../plant-config.js';

const userPlant = new Plant();
const plantCardObserver = new Publisher();

const getFormData = () => {
  return new Promise((resolve) => {
    const form = document.getElementById('plant-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.plant-form-btn').style.display = 'none';

      const res = new FormData(e.target);
      const extras = [];
      res.getAll('extras').forEach((value) => {
        extras.push(value);
      });

      const formData = Object.fromEntries(res);
      formData.extras = extras;

      form.reset();

      resolve(formData);
    });
  });
};

const setPlantName = (data) => {
  // filter plant name through light property
  let name = plantConfig[data.lightQuantity];

  // filter plant name through toxic property
  name = name[data.toxic_plant];

  // filter plant name through watering property
  if (data.watering === 'overwatering') {
    name = name.overwater;
  } else {
    name = name.default;
  }
  return name;
};

const PlantData = async () => {
  const data = await getFormData();
  const name = setPlantName(data);

  userPlant.setName(name);
  userPlant.lightQuantity(data.lightQuantity);
  userPlant.soilType(data.soil);
  userPlant.potStyle(data.pot_style);

  if (data.pot_style === 'painted-decorated') {
    userPlant.setPotColor('pink');
    userPlant.potStyle('decorated');
  } else {
    userPlant.setPotColor('unpainted');
    userPlant.potStyle(data.pot_style);
  }

  if (data.toxic_plant === 'non_toxic') {
    userPlant.withPets();
  } else {
    userPlant.noPets();
  }

  if (data.watering === 'overwater') {
    userPlant.clayPot();
    userPlant.soilType('drainage');
  } else {
    userPlant.ceramicPot();
  }

  if (data.extras.length) {
    userPlant.addExtras(data.extras);
  }
};

export { userPlant, plantCardObserver, PlantData };
