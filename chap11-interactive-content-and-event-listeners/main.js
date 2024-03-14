// Specifying events

/* The great thing about specifying events this way is that it's quite easy to read this
code and predict what it is going to do. There are some downsides too: you can only
specify one event this way, and you cannot change the event dynamically either */

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

// Specifying events with event listeners

/* The last method is using the addEventListener() method to add an event to an
element. With this, we can specify multiple functions for the same event, for
example, when an element gets clicked */

// EXCERCISE 11.2

// let divs = document.querySelectorAll("div");

// divs.forEach((el) => {
//     el.addEventListener("click", () => {
//         document.body.style.backgroundColor = el.textContent;
//     });
// });

// The onload event handler

// The onload event gets fired after a certain element is loaded.

/* . And it can also be used for the event that all the content in the DOM is loaded.
There is a special built-in event for this: DOMContentLoaded(). This event can be used
to handle the event of the DOM loading, which will get fired immediately after the
DOM for the page has been constructed when the event is set. */

// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
// });

// EXCERCISE 11.3

// window.onload = bom();

// function bom(m, e) {
//     m = "Window Ready";
//     e = console.log(m);
// }

// document.onload = dom();

// function dom() {
//     document.addEventListener("DOMContentLoaded", (e) => {
//         e = console.log("Document Loaded");
//     })
// }

// PRACTICE 11.4

// Mouse event handlers

// let blank = document.querySelector(".blank");
// blank.innerHTML = "<p>hello world</p>";

// blank.addEventListener("mousedown", function (e) {
//     message("green", e);
// });
// blank.addEventListener("mouseover", function (e) {
//     message("red", e);
// });
// blank.addEventListener("mouseout", function (e) {
//     message("yellow", e);
// });
// blank.addEventListener("mouseup", function (e) {
//     message("blue", e);
// });

// function message(elColor, event) {
//     console.log(event.type);
//     blank.style.backgroundColor = elColor;
// }

// EXCERCISE 11.5

// /* Whenever an event gets fired, an event variable becomes available. It has many
// properties, and you can check it out by using this command in the function that
// gets fired for the event: */

// console.dir(event); // THIS MUST BE IN A FUNCTION:

// function triggerSomething() {
//     console.dir(event.target);
// }

/* This will show many properties. One of the most interesting properties for now is the
target property. The target is the HTML element that fired the event. So, we can use
it to get information from a web page. */

// const myInput = document.querySelector("input[name='message']");

// const output = document.querySelector(".output");

// const btn1 = document.querySelector(".btn1");

// const btn2 = document.querySelector(".btn2");

// const btn3 = document.querySelector(".btn3");

// const log = [];

// btn1.addEventListener("click", tracker);

// btn2.addEventListener("click", tracker);

// btn3.addEventListener("click", (e) => {
//     console.log(log);
// });

// function tracker(e) {
//     output.textContent = myInput.value;
//     const ev = e.target;
//     console.dir(ev);
//     const temp = {
//         message: myInput.value,
//         type: ev.type,
//         class: ev.className,
//         tag: ev.tagName
//     };
//     log.push(temp);
//     myInput.value = "";
// }

// CHAPTER PROJECTS

// Build your own analytics

// let trackArray = [];

// let one = document.getElementById("box-one").addEventListener("click", storeClicks);;
// let two = document.getElementById("box-two").addEventListener("click", storeClicks);;
// let three = document.getElementById("box-three").addEventListener("click", storeClicks);;

// function storeClicks(e) {
//     trackArray += e.target.id + " ";
//     console.log(trackArray);
// }

// Star rating system

// const starsUL = document.querySelector(".stars");

// const output = document.querySelector(".output");

// const stars = document.querySelectorAll(".star");

// stars.forEach((star, index) => {
//     star.starValue = (index + 1);
//     star.addEventListener("click", starRate);
// });

// function starRate(e) {
//     output.innerHTML = `You Rated this ${e.target.starValue} stars`;

//     stars.forEach((star, index) => {
//         if (index < e.target.starValue) {
//             star.classList.add("orange");
//         } else {
//             star.classList.remove("orange");
//         }
//     });
// }

// Mouse position tracker

// const ele = document.querySelector(".holder");

// ele.addEventListener("mouseover", (e) => { e.target.classList.add("active"); });

// ele.addEventListener("mouseout", (e) => { e.target.classList.remove("active"); });

// ele.addEventListener("mousemove", coordin);

// function coordin() {
//     let html = "X:" + event.clientX + " | Y:" + event.clientY;
//     document.getElementById("output").innerHTML = html;
// };

// Box clicker speed test

const output = document.querySelector('.output');

const message = document.querySelector('.message');

message.textContent = "Press to Start";

const box = document.createElement('div');

const game = {
    timer: 0,
    start: null
};

box.classList.add('box');

output.append(box);

box.addEventListener('click', (e) => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));
    if (!game.start) {
        message.textContent = 'Loading....';
    } else {
        const cur = new Date().getTime();
        const dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
});

function addBox() {
    message.textContent = 'Click it...';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}

function ranNum(max) {
    return Math.floor(Math.random() * max);
}

// PROJECT QUIZ

/* 
1. console.dir(window);

2. It cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
*/