// let test = prompt("Call the function").toLowerCase();

// function random() {
//     console.log("random");
// };

// random();

// let varFun = function() { // function in a variable
//     console.log("variable")
// };

// if (test === "variable") {
//     varFun();
// };

// Parameters and arguments

// let greeting = prompt("Are we meeting, or leaving?");
// let name = prompt("Who are we greeting?");

// function myAlert(greet, person) {
//     return greet + " " + person;
//     };

// alert(myAlert(greeting, name));
// console.log(myAlert("boom", "bam"));

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
//    }

// addTwoNumbers(10, 9); // this will override the default parameters

// function addTwoNumbers(x = 2, y = 3) {
//  console.log(x + y);
// }

// ARROW FUNCTIONS

// function didSomething() {
//     console.log("Did something.")
// };

// didSomething();

// let didSomethingCooler = () => { // ADD ARROW FUNCTIONS INTO A VARIABLE
//     console.log("Did something cooler.")
// };

// didSomethingCooler();

// let arr = ["squirrel", "alpaca", "buddy"];

// // arr.forEach(e => console.log(e));
// /* As a final example, we can combine the arrow function with certain built-in methods.
// For example, we can use the foreach() method on an array. This method executes a
// certain function for every element in the array. Have a look at this example: */

// let maths = [1, 3, 5];

// maths.forEach(e => console.log(e + 1));

// Spread operator

// let theEquationArray = [2, 4, 8];

// function theEquation(a, b, c) {
//     console.log(a + b + c)
// };

// /* the elements of the spread operator become individual elements in
// the array. The spread operator spreads the array to individual elements in the new
// array. */
// theEquation(...theEquationArray);

// Local variables in functions

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }

// let z = testAvailability();

// console.log("Outside the function:", z);

// Immediately invoked function expression

// Recursive functions

// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
/* When you feel the need to call
the same function over and over again in a loop, you should probably consider
recursion */

// getRecursive(3);

// CHAPTER PROJECTS

// function myRecurFunc(number) {
//     console.log(number);
//     if (number < 10) {
//         myRecurFunc(++number);
//     }
// };

// myRecurFunc(1);

// Set timeout order

// let one = () => {
//     console.log("One");
// }

// let two = () => {
//     console.log("Two");
// }

// let threeInvoke = () => {
//     console.log("Three");
//     one();
//     two();
// }

// let four = () => {
//     console.log("Four");
//     setTimeout(one, 0); // this method will excite the called function (the first value) with the next value's time delay (in miliseconds).
//     threeInvoke();
// };

// four();

/*  

1. (The code will return the following because the function enters an if loop that will only exit once the val value is equal to or greater than 100, in which the final return will log the val total value.)

20
30
40
50
60
70
80
90
100

2. Hello, because it is a simple function with a console.log action.

3. The first code block logs "Welcome" then the 2nd code block stores "Laurence", then the third code block stores "Laurence" again but immediately returns it if the function is called, then the final code block logs the full string.

4. 

Welcome
Laurence
My Name is Laurence

5. 16 Because the 2nd variable's (addFive2) function is not called, so its value isn't relevant.

*/