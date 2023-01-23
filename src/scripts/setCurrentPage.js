const currentPage = document.querySelector(
  `#sidebar details a[aria-current="page"]`
);
const currentPageMobile = document.querySelector(
  `.navbar details a[aria-current="page"]`
);

if (currentPage) {
  currentPage.closest('details').setAttribute('open', '');
}

if (currentPageMobile) {
  currentPageMobile.closest('details').setAttribute('open', '');
}
