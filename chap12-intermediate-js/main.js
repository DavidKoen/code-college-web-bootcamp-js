// Regular expressions

// let text = "I love JavaScript!";

// console.log(text.match(/javascript/i));  // If you want it to be case-insensitive, you can specify this using an i after the slash.

// Specifying multiple options for words

// let text = "I love React and JavaScript!";

//  console.log(text.match(/javascript|nodejs|react/i));  
/* If we wanted to find all matches, we could specify the global modifier, g. 
It is very similar to what we did for case-insensitive searches. In this example, we are checking for all matches, and it is case-insensitive. */

// Character options

// let text = "Just some text.";

// console.log(text.match(/./g)); // To address the difficulty of complex characters not matching an expression, the dot functions as a special wildcard character in regex that can match any character. 

// console.log(text.match(/\./g)); 
/* If you want a special character (one that is used in regex to specify a pattern) to have a normal
meaning, or a normal character to have a special meaning, you can escape it using
the backslash. */

/* A very useful one is \b, which matches text only when it's at the beginning of a word.
So, in the following example, it is not going to match the instances of in in beginning: */

// let text = "In the end or at the beginning?";

// console.log(text.match(/\bin/gi));

// Groups

// let text = "I love JavaScript!";

// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));
/* Here it is going to look for either love or dislike, followed by a whitespace
character, followed by javascript or spiders, and it will do so for all occurrences
while ignoring whether they are in uppercase or lowercase. */

//If we only want it to be present 0 or 1 times, we can use the question mark.

// let text = "You are doing great!";

// console.log(text.match(/n?g/gi)); // This logs the ng in doing and the g in great.

// let text = "I love JavaScript!";

// console.log(text.match(/(?<language>javascript)/i)); // In order to specify groups, we'll have to name them

// Practical regex

// Searching and replacing strings

// let text = "Coding is fun. Coding opens up a lot of opportunities.";

// console.log(text.replace("Coding", "JavaScript")); // replaces the first value with the second value, it will naturally find the last value stated in the first value.

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g; // A CORRECT EMAIL FORMAT

// Functions and the arguments object

/* JavaScript deals with arguments in functions by adding them to a custom object
called arguments. This object works a lot like an array, and we can use it instead of
using the name of the parameter. */

// function test(a, b, c) {
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
// }

// test("fun", "js", "secrets");

// Local storage

/* The localStorage object is a property of the window object that we have seen before.
There are a few methods on the localStorage object that we need to know to use
it effectively. First of all, we need to be able to get and set key-value pairs on local
storage. We use setItem() whenever we want to save something and getItem()
whenever we want to retrieve the value later */

// let message = "Hello storage!";

// localStorage.setItem("example", message);

// if (localStorage.getItem("example")) {
//     document.getElementById("stored").innerHTML = localStorage.getItem("example");
// }

// /* This code snippet outputs Hello storage! on the page. You can add items to
// storage by specifying a key and a value with the setItem method. You can access
// localStorage directly or via the window object. Here we specify example as the key
// and Hello storage! as the value and save it to local storage. Then we check whether
// the example key is set in local storage and output the data by writing it to the
// innerHTML of the div with the ID stored.

// If you go back to your code and turn off the setItem() line before loading the page
// a second time, it still will output that value, since the information was stored when
// running the script the first time and never got deleted. Local storage doesn't expire,
// though it can be manually deleted. */

// /* We can also retrieve a key using the index. This is useful whenever we need to loop
// through the key-value pairs and we don't know the names of the keys. This is how to
// retrieve a key by index: */

// window.localStorage.key(0);

// // In order to get the associated value, we can do this:

// window.localStorage.getItem(window.localStorage.key(0));

// // We can also remove key-value pairs like this:

// window.localStorage.removeItem("example");

// // And we can remove all the key-value pairs from the local storage in one call:

// window.localStorage.clear();

// JSON: JavaScript Object Notation

/* JSON stands for JavaScript Object Notation, which is nothing more than a data
format. We saw this notation when we were creating our objects in JavaScript;
however, JSON doesn't mean JavaScript objects, it's just a way of representing data
using a similar format as JavaScript objects. It can also be easily converted to a
JavaScript object. */

// EXCERCISE 12.8

// Creating JS Objects in a JSON format.

// let footballClubs = [
//     {
//         "club": "Liverpool FC",
//         "UCLtitles": 6,
//     },
//     {
//         "club": "Real Madrid",
//         "UCLtitles": 13,
//     }
// ];

// function honors() {

//     for (let i = 0; i < footballClubs.length; i++) {
//         console.log(footballClubs[i].club + " has won " + footballClubs[i].UCLtitles + " UCL titles.");
//     }
// }

// honors();

// EXCERCISE 12.9

// Parsing JSON

// let players = [
//     {
//         "name": "VVD",
//         "position": "Defender",
//     },
//     {
//         "name": "Alisson",
//         "position": "Keeper",
//     },
// ];

// let jsonPlayers = JSON.stringify(players); // This makes the JS object a string, which is how JSON can accept it.
// console.log(jsonPlayers);

// let jsPlayers = JSON.parse(jsonPlayers); // This makes the string into JS object.
// console.log(jsPlayers);

// CHAPTER PROJECT: Email extractor

// let bttn = document.getElementsByTagName("button")[0];

// let txtOne = document.getElementById("first");

// let txtTwo = document.getElementById("second");

// let emailFormat = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g

// bttn.addEventListener("click", firstTxtArea);

// let addresses = [];

// let uniqueAddresses = new Set();

// let duplicateAddresses = [];

// function firstTxtArea() {

//     if (txtOne.value.match(emailFormat)) {  
//         addresses.push(txtOne.value);
//     } else {
//         alert("That is not an email address.");
//     };

//     check()

// };

// function check() {

//     addresses.forEach(item => {

//         if (uniqueAddresses.has(item)) {
//           duplicateAddresses.push(item);
//         } else {
//           uniqueAddresses.add(item);
//         }

//       });

// }

// CHAPTER PROJECT: Form validator

// const myForm = document.querySelector("form");
// const inputs = document.querySelectorAll("input");
// const errors = document.querySelectorAll(".error");
// const required = ["email", "userName"];
// myForm.addEventListener("submit", validation);
// function validation(e) {
//     let data = {};
//     e.preventDefault();
//     errors.forEach(function (item) {
//         item.classList.add("hide");
//     });
//     let error = false;
//     inputs.forEach(function (el) {
//         let tempName = el.getAttribute("name");
//         if (tempName != null) {
//             el.style.borderColor = "#ddd";
//             if (el.value.length == 0 && required.includes(tempName)) {
//                 addError(el, "Required Field", tempName);
//                 error = true;
//             }
//             if (tempName == "email") {
//                 let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
//                 let result = exp.test(el.value);
//                 if (!result) {
//                     addError(el, "Invalid Email", tempName);
//                     error = true;
//                 }
//             }
//             if (tempName == "password") {
//                 let exp = /[A-Za-z0-9]+$/;
//                 let result = exp.test(el.value);
//                 if (!result) {
//                     addError(el, "Only numbers and Letters", tempName);
//                     error = true;
//                 }
//                 if (!(el.value.length > 3 && el.value.length < 9)) {
//                     addError(el, "Needs to be between 3-8 characters", tempName);
//                     error = true;
//                 }
//             }
//             data[tempName] = el.value;
//         }
//     });
//     if (!error) {
//         myForm.submit();
//     }
// }

// function addError(el, mes, fieldName) {
//     let temp = el.nextElementSibling;
//     temp.classList.remove("hide");
//     temp.textContent = fieldName.toUpperCase() + " " + mes;
//     el.style.borderColor = "red";
//     el.focus();
// }

// CHAPTER PROJECT: Simple math quiz

// const app = function () {
//     const game = {};
//     const val1 = document.querySelector(".val1");
//     const val2 = document.querySelector(".val2");
//     const output = document.querySelector(".output");
//     const answer = document.querySelector("input");
//     function init() {
//         document.querySelector("button").addEventListener("click", checker);
//         loadQuestion();
//     }
//     function ranValue(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     function loadQuestion() {
//         game.val1 = ranValue(1, 100);
//         game.val2 = ranValue(1, 100);
//         game.answer = game.val1 + game.val2;
//         val1.textContent = game.val1;
//         val2.textContent = game.val2;
//     }
//     function checker() {
//         let bg = answer.value == game.answer ? "green" : "red";
//         output.innerHTML +=
//             `<div style="color:${bg}">${game.val1} + ${game.val2} = ${game.answer} (${answer.value})</div>`;
//         answer.value = "";
//         loadQuestion();
//     }
//     return {
//         init: init
//     };
// }();
// document.addEventListener('DOMContentLoaded', app.init);

// PROJECT QUIZ

/*
1. " enjoy"

2. No. They are part of the window document.

4. hello world
The a const in the function is a global variable.

5. An error. The 'use strict' will prevent the a variable from being created since a 
var type was not called when creating the variable.

6.
a
c
b
The setTimeout function falls after the called functions in the picking order.
*/