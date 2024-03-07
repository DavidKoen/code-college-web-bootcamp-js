// EXCERCISE 11.1

// let darkMode = false;

// window.onclick = () => {

//     if (!darkMode) {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         darkMode = true;
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         darkMode = false;
//     }
// }

// EXCERCISE 11.2

// let divs = document.querySelectorAll("div");

// divs.forEach((el) => {
//     el.addEventListener("click", () => {
//         document.body.style.backgroundColor = el.textContent;
//     });
// });

// EXCERCISE 11.3

// document.addEventListener("DOMContentLoaded", (e) => {
//     message("Document ready", e);
// });

// window.onload = (e) => {
//     message("Window ready", e);
// }

// function message(val, event) {
//     console.log(event);
//     console.log(val);
// }

// EXCERCISE 11.4

const output = document.querySelector(".output");

output.textContent = "hello world";

output.style.height = "200px";

output.style.width = "400px";

output.style.backgroundColor = "red";

output.addEventListener("mousedown", function (e) {
    message("green", e);
});

output.addEventListener("mouseover", function (e) {
    message("red", e);
});

output.addEventListener("mouseout", function (e) {
    message("yellow", e);
});

output.addEventListener("mouseup", function (e) {
    message("blue", e);
});

function message(elColor, event) {
    console.log(event.type);
    output.style.backgroundColor = elColor;
}

/* Whenever an event gets fired, an event variable becomes available. It has many
properties, and you can check it out by using this command in the function that
gets fired for the event: */

console.dir(event);

/* This will show many properties. One of the most interesting properties for now is the
target property. The target is the HTML element that fired the event. So, we can use
it to get information from a web page. Let's look at a simple example. */