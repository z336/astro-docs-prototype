const nav = document.querySelector('.navbar');
const container = nav.querySelector('div');
const burgerClone = document
  .querySelector('#burger-template')
  .content.cloneNode(true);

const button = burgerClone.querySelector('button');
button.addEventListener('click', (e) => {
  const isOpen = button.getAttribute('aria-expanded') === 'false';

  button.setAttribute('aria-expanded', isOpen);
});

nav.addEventListener('keyup', (e) => {
  if (e.code === 'Escape') {
    button.setAttribute('aria-expanded', false);
    button.focus();
  }
});

nav.insertBefore(burgerClone, container);
