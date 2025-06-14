//for loop = repeat some code a limited amount of times

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// //add by 2
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

//starts from 2
// for (let i = 2; i < 10; i += 2) {
//   console.log(i);
// }

// from 10 - 1
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// // }

// for (let i = 1; i <= 20; i++) {
//   //it will skip 13 from loop
//   if (i == 13) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
for (let i = 1; i <= 20; i++) {
  //it will stop loop at 13
  if (i == 13) {
    break;
  } else {
    console.log(i);
  }
}
