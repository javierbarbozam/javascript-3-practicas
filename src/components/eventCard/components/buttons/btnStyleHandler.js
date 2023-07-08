const handleBtnStyle = (category, element) => {
  const activeClass = element.classList.contains("event-item__btn--active");

  switch (category) {
    case "going":
      element.classList.toggle("event-item__btn--active");
      const interestedBtn = document.querySelector(`button[value="interested"][id="${element.id}"]`);
      interestedBtn.style.display = activeClass ? "block" : "none";
      element.innerHTML = activeClass ? category : `You are ${category}. Changed your mind?`;
      break;
    case "interested":
      element.classList.toggle("event-item__btn--active");
      element.innerHTML = activeClass ? category : `You are ${category}. Changed your mind?`;
      break;
    default:
      element.classList.toggle("event-item__btn--favorite--active");
      break;
  }
};

function findObjectById(id) {
  let foundObject = null;
  let foundArray = null;

  for (let key in stateImmutable) {
    if (Array.isArray(stateImmutable[key])) {
      foundObject = stateImmutable[key].find((obj) => obj.id === id);
      if (foundObject) {
        foundArray = key;
        break;
      }
    }
  }

  return { element: foundObject, array: foundArray };
}

export { handleBtnStyle };
