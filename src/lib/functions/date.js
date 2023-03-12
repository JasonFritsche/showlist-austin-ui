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
  const year = value.getFullYear();
  const date = value.getDate();
  const monthName = months[value.getMonth()];
  const dayName = days[value.getDay()];
  return { dayName, date: `${monthName} ${date}, ${year}` };
}
