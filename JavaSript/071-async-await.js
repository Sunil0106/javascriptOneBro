//Async/Await = Async - makes a function return promise;
//              Await - makes an async function wait for a promise
//Allows you write asynchronous code in a synchronous manner
//Async doesn't have resolve or reject parameters
//Everythin after Await is placed in an event queue

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
      const trash = true;
      if (trash) {
        resolve("Take out the trash🥡");
      } else {
        reject("You did not");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const taketrash = await takeOutTrash();
    console.log(taketrash);

    console.log("You finished all chores");
  } catch (error) {
    console.error(error);
  }
}
doChores();
