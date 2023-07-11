import { stateImmutable } from "../../../state.js";

const handleBtnStyle = (category, element) => {
  const activeClass = element.classList.contains("event-item__btn--active");

  switch (category) {
    case "going":
      element.classList.toggle("event-item__btn--active");
      const interestedBtn = document.querySelector(`button[value="interested"][id="${element.id}"]`);
      interestedBtn.style.display = activeClass ? "block" : "none";
      element.innerHTML = activeClass
        ? category
        : `You are ${category}. Changed your mind?`;
      break;
    case "interested":
      element.classList.toggle("event-item__btn--active");
      element.innerHTML = activeClass
        ? category
        : `You are ${category}. Changed your mind?`;
      break;
    default:
      element.classList.toggle("event-item__btn--favorite--active");
      break;
  }
};

const initBtnStyles = () => {
  const events = stateImmutable.getState();
  const eventButtons = document.querySelectorAll(".js-event-btn");
  eventButtons.forEach((element) => {
    const findEvent = events[element.value].find(
      (event) => event.id === element.id
    );
    findEvent ? handleBtnStyle(element.value, element) : null;
  });
};

export { handleBtnStyle, initBtnStyles };
