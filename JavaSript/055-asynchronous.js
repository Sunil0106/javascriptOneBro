//synchronous = Execute line by line consecutively in a squential manner
// Code that waits for an operation to complete.

//asynchronous = Allows multiple operations to be performed concurrently without waiting
//Doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
//Handle with: Callbacks, Promises, Async/Await

function fun1(callback) {
  setTimeout(() => {
    console.log("task1");
    callback();
  }, 3000);
}
function fun2() {
  console.log("task2");
  console.log("task3");
}

fun1(fun2);
