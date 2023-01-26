const menus = document.querySelectorAll('.menu');
const currentNavPage = document.querySelector(
  `.navbar details a[aria-current="page"]`
);
const currentSideBarPage = document.querySelector(
  `.sidebar details a[aria-current="page"]`
);

function updateDetailsAttribute() {
  if (window.innerWidth <= 1280) {
    menus.forEach((menu) => menu.removeAttribute('open'));
    currentNavPage.closest('details').setAttribute('open', '');
    currentSideBarPage.closest('details').setAttribute('open', '');
  } else {
    menus.forEach((menu) => menu.setAttribute('open', ''));
  }
}

updateDetailsAttribute();

window.addEventListener('resize', updateDetailsAttribute);
