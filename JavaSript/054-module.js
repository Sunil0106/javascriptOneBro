// ES6 Module = An extra file that contains resuable code that can be imported into other Javascript files.
// Write resuable code for many different apps.
//Can contain variables, classes, functions... and more;
// Introduced as part of ECMAScript 2015 update
import {
  PI,
  getCircumference,
  getArea,
  getSurfaceVolume,
} from "./054-mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm`);

const volume = getSurfaceVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);
