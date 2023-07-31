function initCustomizeForm() {
  document.querySelector('#plant-form').style.display = 'none';

  fetch('/src/templates/customize-form.html')
    .then((res) => res.text())
    .then((data) => {
      const container = document.querySelector('.plant-form-wrapper');
      container.insertAdjacentHTML('beforeend', data);
    });

  this.removeEventListener('click', initCustomizeForm);
  this.innerHTML = 'Check availability';
}

export { initCustomizeForm };
