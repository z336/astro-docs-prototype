const tableOfContents = document.querySelector('#table-of-contents');

function updateDetailsOpenAttribute() {
  if (window.innerWidth >= 1280) {
    tableOfContents.closest('details').setAttribute('open', '');
  } else {
    tableOfContents.closest('details').removeAttribute('open');
  }
}

updateDetailsOpenAttribute();

window.addEventListener('resize', updateDetailsOpenAttribute);
