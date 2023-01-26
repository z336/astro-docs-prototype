const currentPage = document.querySelector(
  `.navbar details a[aria-current="page"]`
);

if (currentPage) {
  currentPage.closest('details').setAttribute('open', '');
}
