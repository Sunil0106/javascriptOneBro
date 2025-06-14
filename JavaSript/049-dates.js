// Date objects = objects that contain values that represent dates and times.
//These date objects can be changed and formatted
//Date(year, month, day, hour, minute, second, ms)
// const date = new Date();
// console.log(date);

// const date = new Date(2025, 0, 1, 2, 3, 4, 8);
// console.log(date);

// const date = new Date("2025-01-02T12:00:00");
// console.log(date);

// const date = new Date();
// console.log(date);

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth();
// console.log(month);

// const day = date.getDay();
// console.log(day);

// const dayDate = date.getDate();
// console.log(dayDate);

// const hour = date.getHours();
// console.log(hour);

// const minutes = date.getMinutes();
// console.log(minutes);

// const seconds = date.getSeconds();
// console.log(seconds);
const date = new Date();
date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(1);
date.setMinutes(1);
date.setSeconds(1);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("happy new year");
}
