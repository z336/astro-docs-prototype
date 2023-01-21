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

// const nav = document.querySelector('.navbar');
// const container = nav.querySelector('div');
// const burgerClone = document
//   .querySelector('#burger-template')
//   .content.cloneNode(true);
// // const svg = nav.querySelector("svg");

// const button = burgerClone.querySelector('#menu');
// button.addEventListener('click', (event) => {
//   const isOpen = button.getAttribute('aria-expanded') === 'false';
//   button.setAttribute('aria-expanded', isOpen);
// });

// // avoid DRY: disabling menu
// const disableMenu = () => {
//   button.setAttribute('aria-expanded', false);
//   button.focus();
// };

// //  close on escape
// nav.addEventListener('keyup', (event) => {
//   if (event.code === 'Escape') {
//     disableMenu();
//   }
// });

// // close if clicked outside of event target
// document.addEventListener('click', (event) => {
//   const isClickInsideElement = nav.contains(event.target);
//   if (!isClickInsideElement) {
//     disableMenu();
//   }
// });

// nav.insertBefore(burgerClone, container);
