import { addMiddleware, execute } from './modules/pipeline.js';
import { productPrice } from './pricing.js';

const getPlant = async (product) => {
  return fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/plant/${product.name}`,
  ).then((res) => res.json());
};

const getPot = async (product) => {
  return fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/pot/${product.potMaterial}-${product.potDecoration}-${product.potColor}`,
  ).then((res) => res.json());
};

const getSoil = async (product) => {
  return fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/soil/${product.soil}`,
  ).then((res) => res.json());
};

const getInfo = async (product) => {
  return fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${product.name}`,
  ).then((res) => res.json());
};

function accordionTrigger(item) {
  item.classList.toggle('availability-accordion-item--visible');
}

// Middlewares
const getInventory = async (context, next) => {
  const plantData = [
    getPlant(context),
    getPot(context),
    getSoil(context),
    getInfo(context),
  ];

  const [plantStock, potStock, soilStock, info] = await Promise.all(plantData);
  context.info = info;

  const zeroStock = [];
  const lowStock = {};
  const withStock = [];

  if (plantStock.stock === 0) {
    zeroStock.push(`${context.name}`);
  } else if (plantStock.stock <= 10) {
    lowStock[context.name] = plantStock.stock;
  } else {
    withStock.push(`${context.name}`);
  }

  if (potStock.stock === 0) {
    zeroStock.push(
      `${context.potMaterial}-${context.potDecoration}-${context.potColor}`,
    );
  } else if (potStock.stock <= 10) {
    lowStock[
      `${context.potMaterial}_${context.potDecoration}_${context.potColor}`
    ] = potStock.stock;
  } else {
    withStock.push(
      `${context.potMaterial}-${context.potDecoration}-${context.potColor}`,
    );
  }

  if (soilStock.stock === 0) {
    zeroStock.push(`${context.soil}`);
  } else if (soilStock.stock <= 10) {
    lowStock[context.soil] = soilStock.stock;
  } else {
    withStock.push(`${context.soil}`);
  }

  context.stock = {
    zeroStock,
    lowStock,
    withStock,
  };

  next();
};

const generalAlert = (context, next) => {
  const wrapper = document.querySelector('.availability-wrapper');

  // alert message
  const alertMessage = document.createElement('span');

  // order button
  const orderBtn = document.createElement('button');
  orderBtn.classList.add('btn', 'btn--order');
  orderBtn.innerHTML = 'Order Now!';

  const { zeroStock, lowStock } = context.stock;

  if (zeroStock.length) {
    alertMessage.classList.add(
      'availability-message',
      'availability-message--red',
    );
    alertMessage.innerHTML =
      'One of the items of your order is out of stock. Please check the inventory alerts.';

    // Disabled button
    orderBtn.disabled = true;

    wrapper.append(alertMessage, orderBtn);
  } else if (lowStock && !zeroStock.length) {
    alertMessage.classList.add(
      'availability-message',
      'availability-message--yellow',
    );
    alertMessage.innerHTML =
      'One of the items of your order has limited stock. Order soon!';

    wrapper.append(alertMessage, orderBtn);
  } else {
    alertMessage.classList.add(
      'availability-message',
      'availability-message--green',
    );
    alertMessage.innerHTML = 'In Stock!';
  }

  next();
};

const inventoryAlerts = (context, next) => {
  const wrapper = document.querySelector('.availability-wrapper');

  const { zeroStock, lowStock } = context.stock;

  const accordion = document.createElement('div');
  accordion.classList.add('availability-accordion');

  const inventoryList = document.createElement('ul');
  inventoryList.classList.add('availability-accordion-item');

  // Out of stock items
  zeroStock.forEach((element) => {
    const alert = document.createElement('li');
    alert.classList.add('availability-message', 'availability-message--red');
    alert.innerHTML = `${element} is out of stock. Please select a diferent product.`;
    inventoryList.appendChild(alert);
  });

  // Low stock items
  for (const key in lowStock) {
    if (Object.prototype.hasOwnProperty.call(lowStock, key)) {
      const alert = document.createElement('li');
      alert.classList.add(
        'availability-message',
        'availability-message--yellow',
      );
      alert.innerHTML = `${key}: Only ${lowStock[key]} items left in stock!`;
      inventoryList.appendChild(alert);
    }
  }

  // Accordion button
  const trigger = document.createElement('button');
  trigger.classList.add('accordion-trigger');
  trigger.innerHTML = 'Inventory Alerts';
  trigger.addEventListener('click', () => accordionTrigger(inventoryList));

  // Add elements to DOM
  accordion.append(trigger, inventoryList);
  wrapper.appendChild(accordion);

  // Next middleware call
  if (!zeroStock.length) {
    next();
  }
};

const pricing = (context, next) => {
  const wrapper = document.querySelector('.availability-wrapper');

  // Add prices to user product choice
  context.pricing = {};
  context.pricing[context.name] = productPrice.plants[context.name];
  context.pricing[
    `${context.potMaterial}_${context.potDecoration}_${context.potColor}`
  ] =
    productPrice.pots[context.potMaterial][
      `${context.potDecoration}_${context.potColor}`
    ];
  context.pricing[context.soil] = productPrice.soil[context.soil];

  if (context.extras) {
    context.extras.forEach((element) => {
      context.pricing[element] = productPrice.extras[element];
    });
  }

  // Add total price
  const itemsPrice = Object.values(context.pricing);
  context.pricing.total = itemsPrice.reduce((total, price) => total + price, 0);

  // Add accordion
  const accordion = document.createElement('div');
  accordion.classList.add('availability-accordion');

  const priceList = document.createElement('ul');
  priceList.classList.add('availability-accordion-item');

  for (const key in context.pricing) {
    if (Object.prototype.hasOwnProperty.call(context.pricing, key)) {
      const priceDetail = document.createElement('li');
      priceDetail.innerHTML = `<span class="availability-accordion-title">${key}:</span><span class="availability-accordion-price">$ ${context.pricing[key]}</span>`;
      priceList.appendChild(priceDetail);
    }
  }

  const trigger = document.createElement('button');
  trigger.classList.add('accordion-trigger');
  trigger.innerHTML = 'Price breakdown';
  trigger.addEventListener('click', () => accordionTrigger(priceList));

  accordion.append(trigger, priceList);
  wrapper.append(accordion);

  // call next middleware
  next();
};

const plantDescription = (context, next) => {
  const wrapper = document.querySelector('.availability-wrapper');

  const { description } = context.info;

  const accordion = document.createElement('div');
  accordion.classList.add('availability-accordion');

  const plantInfo = document.createElement('p');
  plantInfo.classList.add('availability-accordion-item');
  plantInfo.innerHTML = description;

  const trigger = document.createElement('button');
  trigger.classList.add('accordion-trigger');
  trigger.innerHTML = 'Plant description';
  trigger.addEventListener('click', () => accordionTrigger(plantInfo));

  accordion.append(trigger, plantInfo);
  wrapper.append(accordion);

  next();
};

const plantCare = (context, next) => {
  const wrapper = document.querySelector('.availability-wrapper');

  const { care } = context.info;

  const accordion = document.createElement('div');
  accordion.classList.add('availability-accordion');

  const careInfo = document.createElement('ul');
  careInfo.classList.add('availability-accordion-item');

  for (const key in care) {
    if (Object.prototype.hasOwnProperty.call(care, key)) {
      const careItem = document.createElement('li');
      careItem.innerHTML = `<span class="availability-accordion-care-title availability-accordion-care-${key}">${key}</span><span>${care[key]}</span>`;
      careInfo.appendChild(careItem);
    }
  }

  const trigger = document.createElement('button');
  trigger.classList.add('accordion-trigger');
  trigger.innerHTML = 'Caring tips';
  trigger.addEventListener('click', () => accordionTrigger(careInfo));

  accordion.append(trigger, careInfo);
  wrapper.append(accordion);

  next();
};

addMiddleware(getInventory);
addMiddleware(generalAlert);
addMiddleware(inventoryAlerts);
addMiddleware(pricing);
addMiddleware(plantDescription);
addMiddleware(plantCare);

const getOrderInfo = (product) => {
  execute(product);
};

export { getOrderInfo };
