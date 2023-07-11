const activeTab = (event) => {
  const activeTabId = event.currentTarget.id;
  const tabs = document.querySelectorAll('li.nav-wrapper-list__item');
  tabs.forEach((element) => {
    element.id === activeTabId
    ? element.classList.add("nav-wrapper-list__item--active")
    : element.classList.remove("nav-wrapper-list__item--active");
  });
};

const disableTabs = () => {
  const tabs = document.querySelectorAll('li.nav-wrapper-list__item');
  tabs.forEach((element) => {
    element.addEventListener("click", activeTab);
  });
};

export { disableTabs };
