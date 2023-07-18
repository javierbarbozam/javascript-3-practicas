import { Plant } from '../Plant.js';
import { plantConfig } from '../plant-config.js';

const getFormData = () => {
  return new Promise((resolve) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const res = new FormData(e.target);
      const extras = [];
      res.getAll('extras').forEach((value) => {
        extras.push(value);
      });

      const formData = Object.fromEntries(res);
      formData.extras = extras;

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

const setPlantData = async () => {
  const data = await getFormData();
  const plant = new Plant();
  const name = setPlantName(data);

  plant.setName(name);
  plant.lightQuantity(data.lightQuantity);
  plant.soilType(data.soil);
  plant.potStyle(data.pot_style);

  if (data.toxic_plant === 'non_toxic') {
    plant.withPets();
  } else {
    plant.noPets();
  }

  if (data.watering === 'overwater') {
    plant.clayPot();
  } else {
    plant.ceramicPot();
  }

  if (data.extras.length) {
    plant.addExtras(data.extras);
  }

  return plant;
};

export { setPlantData };
