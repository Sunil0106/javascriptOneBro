//Promise = An object that manages asynchronous operations.
// Wrap a Promise object around {asynchronous code}
//"I promise to return a value"
//Pending ->resolve or rejected
//new Promise((resolve, reject)=>{asynchronous cod})

//DO THESE CHORES IN ORDER

//1.walk the dog
//2.Clean the kitchen
//3.Take out the trash

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog");
//     callback();
//   }, 1500);
// }
// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen");
//     callback();
//   }, 2500);
// }
// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("Take out the trash");
//     callback();
//   }, 500);
// }
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finised all the chores");
//     });
//   });
// });

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkdog = true;
      if (walkdog) {
        resolve("You walk the dog🐶");
      } else {
        reject("You didnot walked the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clean = true;
      if (clean) {
        resolve("You clean the kitchen🧹");
      } else {
        reject("You didnot clean");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = false;
      if (trash) {
        resolve("Take out the trash🥡");
      } else {
        reject("You did not");
      }
    }, 500);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen().then((value) => {
      console.log(value);
      return takeOutTrash().then((value) => {
        console.log(value);
        console.log("you finished all the chores");
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
