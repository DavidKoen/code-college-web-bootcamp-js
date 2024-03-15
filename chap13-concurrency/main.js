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

/* A Promise is a special object that connects code that needs to produce
a result and the code that needs to use this result in the next step. */

// const resPromise = new Promise((resolve, reject) => {
//     resolve("success!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "completed";
//     })
//     .then(value => {
//         console.log(value);
//         return "this";
//     })
//     .then(value => {
//         console.log(value);
//         return "promise";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     });

/* The resolve functions are implemented with an arrow function. The return statement
is the value input for the next function. You can see that the last block is a catch()
function. If any of the functions were to result in a rejection and the Promise were
therefore rejected, this catch() block would be executed and print whatever the
reject() function sent to the catch() method. */

// const rejPromise = new Promise((resolve, reject) => {
//     reject("oops... ");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "this";
//     })
//     .then(value => {
//         console.log(value);
//         return "was";
//     })
//     .then(value => {
//         console.log(value);
//         return "rejected";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     });

/* This will just log oops… because the first Promise was rejected instead of resolved.
This is great for creating asynchronous processes that need to wait till another
process is complete. We can try to do a certain set of actions and when something
goes wrong, use a catch() method to deal with it. */

// EXCERCISE 13.2

// let myPromise = new Promise((res, rej) => {
//     res("Start Counting");
// })
// .then(v => {
//     console.log(v);
//     return "One";
// })
// .then(v => {
//     console.log(v);
//     return "Two";
// })
// .then(v => {
//     console.log(v);
//     return "Three";
// })
// .then(v => {
//     console.log(v);
// })

// async and await

/* With the async keyword, we can make a
function return a Promise. This makes the Promises nicer to read and look a lot like
synchronous (non-concurrent) code. We can use this Promise just like we learned in
the previous section, or we can use the more powerful await keyword to wait until
the Promise is done. await only works in an asynchronous function */

// function saySomething(x) {
//     return new Promise(resolve => {
//     setTimeout(() => {
//     resolve("something" + x);
//     }, 2000);
//     });
//    }
//    async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
//    }
//    talk(2);
//    talk(4);
//    talk(8);

// CHAPTER PROJECT

const allowed = ["1234", "pass", "apple"];

function passwordChecker(pass) {
    return allowed.includes(pass);
};

function login(password) {
    return new Promise((resolve, reject) => {
        if (passwordChecker(password)) {
            resolve({
                status: true
            });
        } else {
            reject({
                status: false
            });
        }
    });
};

function checker(pass) {
    login(pass)
        .then(token => {
            console.log("Approve:");
            console.log(token);
        })
        .catch(value => {
            console.log("Reject:");
            console.log(value);
        })
};

checker("1234");
checker("wrong");

// PROJECT QUIZ

/*
1. 
function addOne(val) {
    return val + 1;
}
function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
console.log(total(4, 5, addOne)); // REMOVED THE BRACKETS FROM THE CALLED addONE FUNCTION.

2. Oh no

3. Add the following to the ckecker call back: 
.finally(() => { console.log("done");});

4.
function myFun() {
 new Promise(resolve () => {
    resolve("Hello");
 }
}
myFun().then(
 function(val) { console.log(val); },
 function(err) { conole.log(err); }
);
*/