const accountTab = () => {
  // Makes sure if we are inside events or account page
  const path = new URL(window.location).pathname;
  const page = path.split("/").pop();
  // console.log(path)
  
  let tab = "";
  if (page === "account.html") {
    tab +=
    `<li>
      <a class="nav-wrapper-list__item nav-wrapper-list__item--event" href="/index.html">Back to events</a>
    </li>`;
  } else {
    tab +=
    `<li>
      <a class="nav-wrapper-list__item nav-wrapper-list__item--acount" href="/src/pages/account/account.html">My account</a>
    </li>`;
  }
  return {tab, path}
};

export { accountTab };
