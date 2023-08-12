import { handleAvailability } from './availability.js';
import { plantCardObserver, userPlant } from './modules/getPlant.js';
import { renderVisualizer } from './visualizer.js';
import formUrl from '../templates/customize-form.html';

const renderForm = async () => {
  await fetch(`${formUrl}`)
    .then((res) => res.text())
    .then((data) => {
      const container = document.querySelector('.plant-form-wrapper');
      container.insertAdjacentHTML('beforeend', data);
    });
};

function updateFormData() {
  const form = document.getElementById('customize-plant');
  const data = new FormData(form);
  const extras = [];
  data.getAll('extrasCustomize').forEach((value) => {
    extras.push(value);
  });
  const formData = Object.fromEntries(data);
  formData.extrasCustomize = extras;

  plantCardObserver.onChange(formData);
}

const initFormValues = () => {
  const plant = document.getElementById('new-plant-form');
  plant.value = userPlant.name;

  const soil = document.querySelector(
    `input[name="soilCustomize"][value="${userPlant.soil}"]`,
  );
  soil.checked = true;

  const material = document.querySelector(
    `input[name="potMaterial"][value="${userPlant.potMaterial}"]`,
  );
  material.checked = true;

  if (userPlant.potDecoration === 'decorated') {
    const decoration = document.getElementById('pot-decoration-trigger');
    decoration.checked = true;
  }

  if (userPlant.potColor !== 'unpainted') {
    const colorTrigger = document.getElementById('pot-color-trigger');
    const potColor = document.querySelector(
      `input[name="potColor"][value="${userPlant.potColor}"]`,
    );
    colorTrigger.checked = true;
    potColor.checked = true;
  }

  if (userPlant.extras) {
    userPlant.extras.forEach((element) => {
      const input = document.querySelector(
        `input[name="extrasCustomize"][value="${element}"]`,
      );
      input.checked = true;
    });
  }

  updateFormData();
};

const formColorTrigger = () => {
  const input = document.getElementById('pot-color-trigger');
  const label = document.getElementById('pot-color-trigger-label');
  const colors = document.querySelector('.pot-color-container');

  // init trigger style
  if (input.checked) {
    colors.style.display = 'initial';
    label.innerHTML = 'Yes';
  } else {
    colors.style.display = 'none';
    label.innerHTML = 'No';
  }

  const inputColor = document.querySelectorAll('input[name="potColor"]');
  inputColor.forEach((element) =>
    element.addEventListener('change', updateFormData),
  );

  input.addEventListener('input', () => {
    if (input.checked) {
      colors.style.display = 'initial';
      label.innerHTML = 'Yes';
    } else {
      colors.style.display = 'none';
      label.innerHTML = 'No';
    }
    updateFormData();
  });
};

const handleFormChanges = () => {
  const potMaterial = document.querySelectorAll('input[name="potMaterial"]');
  const extras = document.querySelectorAll('input[name="extrasCustomize"]');
  const potDecoration = document.getElementById('pot-decoration-trigger');
  const soil = document.querySelectorAll('input[name="soilCustomize"]');
  const plant = document.getElementById('new-plant-form');

  potDecoration.addEventListener('change', updateFormData);
  soil.forEach((element) => element.addEventListener('change', updateFormData));
  plant.addEventListener('change', updateFormData);
  extras.forEach((element) =>
    element.addEventListener('change', updateFormData),
  );
  potMaterial.forEach((element) =>
    element.addEventListener('change', updateFormData),
  );
};

async function initCustomizeForm() {
  document.querySelector('#plant-form').style.display = 'none';
  document.querySelector('.plant-card__header-title').innerHTML = 'Preview';
  document.querySelector('.plant-card__header-text').remove();

  this.removeEventListener('click', initCustomizeForm);
  this.addEventListener('click', handleAvailability);
  this.innerHTML = 'Check availability >';
  await renderForm();
  initFormValues();
  formColorTrigger();
  handleFormChanges();
  renderVisualizer();
}

export { initCustomizeForm };
