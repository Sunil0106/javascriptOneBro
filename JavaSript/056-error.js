//Error = An object that is created to represent a problem that occurs
//Occur often with user input or establishing a connection

//Network Errors
//Promise Rejection
//Security Errors

// methods
//try{} = Encloses code that might potentially cause an error
//catch{} = Catch and handle any thrown Errors from try{}
//finally{} = (optional) Always executes. Used mostly for clean up
// ex. close files, connections, release resources

try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log("This always execute");
}
console.log("You have reached the end!");

//2nd
try {
  const dividend = Number(window.prompt("Enter a Dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (divisor == 0) {
    throw new Error(`You can't divide by 0`);
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("You must enter valid Numbers");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}
console.log("At The End");
