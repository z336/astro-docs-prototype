function dateFormatter(dateToFormat) {
  const rawDate = new Date(dateToFormat);
  const date = rawDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return date;
}
