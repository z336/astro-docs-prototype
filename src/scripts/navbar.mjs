const nav = document.querySelector('.navbar');
const container = nav.querySelector('div');
const burgerClone = document
  .querySelector('#burger-template')
  .content.cloneNode(true);

const button = burgerClone.querySelector('button');
button.addEventListener('click', (event) => {
  const isOpen = button.getAttribute('aria-expanded') === 'false';

  button.setAttribute('aria-expanded', isOpen);
});

// Disable the menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
  button.focus();
};

// Close on escape
nav.addEventListener('keyup', (event) => {
  if (event.code === 'Escape') {
    disableMenu();
  }
});

// Close if clicked outside of event target
document.addEventListener('click', (event) => {
  const isClickInsideElement = nav.contains(event.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, container);
