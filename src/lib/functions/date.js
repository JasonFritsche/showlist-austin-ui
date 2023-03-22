const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function formatDate(value) {
  if (!value) return;
  const year = value.getFullYear();
  const date = value.getDate();
  const monthName = months[value.getMonth()];
  const dayName = days[value.getDay()];
  return { dayName, date: `${monthName} ${date}, ${year}` };
}

export function getShortIsoDate(date) {
  return (
    date.getFullYear().toString() +
    (1 === (date.getMonth() + 1).toString().length ? "0" : "") +
    (date.getMonth() + 1).toString() +
    (1 === date.getDate().toString().length ? "0" : "") +
    date.getDate().toString()
  );
}

export function getDateFromShortIsoDate(shortIsoDate) {
  const year = shortIsoDate.substring(0, 4);
  const month = shortIsoDate.substring(4, 6);
  const day = shortIsoDate.substring(6, 8);

  const date = new Date(year, month - 1, day);
  return date;
}
