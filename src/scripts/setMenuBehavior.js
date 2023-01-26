const menus = document.querySelectorAll('.menu');

function updateDetailsAttribute() {
  if (window.innerWidth <= 1280) {
    menus.forEach((menu) => menu.removeAttribute('open'));
  }
}

updateDetailsAttribute();

window.addEventListener('resize', updateDetailsAttribute);
