//Variable Scope = where a variable is reconized and accessible (local vs global)

//Local scope
// function function1() {
//   let x = 1;
//   console.log(x);
// }
// function function2() {
//   let x = 2;
//   console.log(x);
// }

// Global Scope
// let x = 3;
// function function1() {
//   console.log(x);
// }
// function function2() {
//   console.log(x);
// }

// function1();
// function2();

//it use local variables
let x = 3;
function function1() {
  let x = 1;
  console.log(x);
}
function function2() {
  let x = 5;
  console.log(x);
}

function1();
function2();
