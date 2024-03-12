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

let message = "Hello storage!";

localStorage.setItem("example", message);

if (localStorage.getItem("example")) {
    document.getElementById("stored").innerHTML = localStorage.getItem("example");
}

// JSON: JavaScript Object Notation

/* JSON stands for JavaScript Object Notation, which is nothing more than a data
format. We saw this notation when we were creating our objects in JavaScript;
however, JSON doesn't mean JavaScript objects, it's just a way of representing data
using a similar format as JavaScript objects. It can also be easily converted to a
JavaScript object. */