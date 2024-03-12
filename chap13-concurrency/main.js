// Callbacks

/* Callbacks are the first thing we should understand when we are talking about
concurrency. The good news is that the callback principle is not too hard to
understand. It is just a function that takes another function as an argument, which is
then called when the rest of the initial function has finished. In other words, it's just a
function calling a function */

// function doSomething(callback) {
//     callback()
// };

// function sayHi() {
//     console.log("Hi!")
// };

// doSomething(sayHi);

/* Some JavaScript built-in functions work with this callback principle, for example,
the setTimeOut() and setInterval() functions. They will take a function that is
executed after a certain time in the case of a timeout and every certain amount of
time for the specified interval. */

// setInterval(encourage, 500);

// function encourage() {
//     console.log("You're doing great, keep going!");
// };

// Promises

// EXCERCISE 13.2

new Promise((res, rej) => {
    res("Start Counting");
    rej("Oops");
})
    .then((value) => {
        console.log(value);
        return "One";
    })
    .then((value) => {
        console.log(value);
        return "Two";
    })
    .then((value) => {
        console.log(value);
        return "Three";
    })
    .then((value) => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
        return "Nothing to count";
    })
    .then(value => {
        console.log(value);
    })