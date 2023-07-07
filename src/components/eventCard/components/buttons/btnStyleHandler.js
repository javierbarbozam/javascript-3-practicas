const handleBtnStyle = (category, element) => {
  const validation = element.classList.contains("event-item__btn--active");

  switch (category) {
    case "going":
      const interestedBtn = document.querySelector(`button[value="interested"][id="${element.id}"]`);
      interestedBtn.style.display = validation ? "block" : "none";
      element.innerHTML = validation ? category : "Changed your mind?";
      element.classList.toggle("event-item__btn--active");
      break;
    case "interested":
      element.innerHTML = validation ? category : "Changed your mind?";
      element.classList.toggle("event-item__btn--active");
      break;
    default:
      element.classList.toggle("event-item__btn--favorite--active");
      break;
  }
};

export { handleBtnStyle };
