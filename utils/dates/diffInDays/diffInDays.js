const MILLISECONDS_IN_DAY = 86400000;

const diffInDays = (date1, date2) => {
  return Math.floor(Math.abs(date1 - date2) / MILLISECONDS_IN_DAY);
}

export { diffInDays };