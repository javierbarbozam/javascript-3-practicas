import { accountCategory, eventCategory } from '../config.js';

const accountTab = () => {
  // Makes sure if we are at events or account page
  const path = new URL(window.location).pathname;
  const page = path.split('/').pop();

  let tab = '';
  if (page === 'account.html') {
    tab
    += `<li>
      <a class="nav-wrapper-list__item nav-wrapper-list__item--event" href="/index.html">Back to events</a>
    </li>`;
  } else {
    tab
    += `<li>
      <a class="nav-wrapper-list__item nav-wrapper-list__item--acount" href="/pages/account/account.html">My account</a>
    </li>`;
  }
  // return path to use it in every event card
  // return tab to use it in DOM
  return { page, tab, path };
};

const createTabs = (value) => {
  const container = document.getElementById('category-nav');
  const { path } = accountTab();
  let { tab } = accountTab();
  value.forEach((element) => (tab
      += `<li>
        <a 
        class="nav-wrapper-list__item"
        href="${path}?category=${element.category}">${element.category}</a>
      </li>`),
  );
  container.innerHTML = tab;
};

const activeTab = (event) => {
  const activeTabId = event.currentTarget.id;
  const tabs = document.querySelectorAll('li.nav-wrapper-list__item');
  tabs.forEach((element) => {
    element.id === activeTabId
      ? element.classList.add('nav-wrapper-list__item--active')
      : element.classList.remove('nav-wrapper-list__item--active');
  });
};

const disableTabs = () => {
  const tabs = document.querySelectorAll('li.nav-wrapper-list__item');
  tabs.forEach((element) => {
    element.addEventListener("click", activeTab);
  });
};

const initHomeTabs = () => {
  createTabs(eventCategory)
}

const initAccountTabs = () => {
  createTabs(accountCategory);
};

export { accountTab, initHomeTabs, initAccountTabs };
