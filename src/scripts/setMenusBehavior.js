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
  } else {
    menus.forEach((menu) => menu.setAttribute('open', ''));
  }
}

function updateOpenPage() {
  if (window.innerWidth <= 1280 && currentNavPage && currentSideBarPage) {
    currentNavPage.closest('details').setAttribute('open', '');
    currentSideBarPage.closest('details').setAttribute('open', '');
  }
}

updateDetailsAttribute();
updateOpenPage();

window.addEventListener('resize', updateDetailsAttribute);
window.addEventListener('resize', updateOpenPage);

// Todo: update names and consider changing to arrow functions just to button down the scope and be consistent with the other js files
