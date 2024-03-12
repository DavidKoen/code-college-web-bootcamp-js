// // Basic DOM traversing

// /* We can traverse the DOM using the document object that we saw in the previous
// chapter. This document object contains all the HTML and is a representation of the
// web page. Traversing over these elements can get you to the element you need in
// order to manipulate it. */

// // TYPE THE FOLLOWING IN THE CONSOLE TO ANALYSE THE ELEMENT: console.dir(document.body);

// // console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// /* To get to the treasure using childNodes you would have to use your console a lot
// because text and comment nodes are also in there. childNodes is an array, so you will
// have to select the right index to select the right child. There is one advantage here: it
// is a lot shorter because you won't need to select the name separately. */

// // console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// EXCERCISE 10.1

// console.dir(document)
// document.body.children
// document.body.children.children

// // Selecting elements as objects

// // Changing innerText

// /* The retrieved value would be here as plain text. For example, if we go to the console
// and we type:

// document.body.children.greeting.innerText = "Bye!"; */

// // Changing innerHTML

// /* If you did not only want to work with plain text, or perhaps specify some HTML
// formatting with your value, you could use the innerHTML property instead. This
// property doesn't just process be plain text, it can also be inner HTML elements:

// document.body.children.greeting.innerHTML = "<b>Bye!</b>"; */

// // Accessing elements by ID

// /* We can grab elements by ID with the getElementById() method. This returns one
// element with the specified ID. IDs should be unique, as only one result will be
// returned from the HTML document. There are not a lot of rules for valid IDs; they
// cannot contain spaces and must be at least one character. As with the conventions
// for naming variables, it is a best practice to make it descriptive and avoid special
// characters. */

// EXCERCISE 10.2

// let ul = document.querySelector("ul");
// let lists = ul.children;

// lists[0].id = "first-list";

// console.log(document.getElementById("first-list"));

// // Accessing elements by tag name

// /* If we ask for elements by tag name, we get an array as a result. This is because there
// could be more than one element with the same tag name. It will be a collection of
// HTML elements, or HTMLCollection, which is a special JavaScript object. It's basically
// just a list of nodes. Execute the following command in the console

// document.getElementsByTagName("div"); 

// We can access them using the item() method to access them by index, like this:

// document.getElementsByTagName("div").item(1);

// We can also access them by name, using the namedItem() method, like this:

// document.getElementsByTagName("div").namedItem("one");

// When there is only one match, it will still return an HTMLCollection. There is only
// one h1 tag, so let's demonstrate this behavior:

// document.getElementsByTagName("h1"); */

// EXCERCISE 10.3

// let lists = document.getElementsByTagName("li");

// console.log(lists[1]);

// // Accessing elements by class name

// /* We can do something very similar for class names. In our example HTML, we have
// two different class names: example and something. If you get elements by class name,
// it gives back an HTMLCollection containing the results. The following will get all
// the elements with the class example:

// document.getElementsByClassName("example"); */

// EXCERCISE 10.4

// let lists = document.getElementsByClassName("list");
// console.log(lists[1]);

// // Element click handle

// // document.getElementById("one").onclick = function () {
// //     alert("Auch! Stop!");
// // }

// // function go() {
// //     alert("Yummy!");
// // }

// // // This and the DOM

// // /* The this keyword always has a relative meaning; it depends on the exact context
// // it is in. In the DOM, the special this keyword refers to the element of the DOM it
// // belongs to. If we specify an onclick to send this in as an argument, it will send in
// // the element the onclick is in. */

// // let boom = (action) => alert("Boom");

// // Adding classes to elements

// /* This might sound a bit vague, so let's have a look at an example where we are going
// to add a class to an element, which in this case will add a layout and make the
// element disappear */

// function disappear() {
//     document.getElementById("shape").classList.add("hide");
// }

// // Toggling classes

// /* In some cases, you would want to add a class when it doesn't already have that
// particular class, but remove it when it does. This is called toggling. There is a special
// method to toggle classes. Let's change our first example to toggle the hide class so the
// class will appear when we press the button the second time, disappear the third time,
// and so on. The blue class was removed to make it shorter; it's not doing anything in
// this example other than making the square blue. */

// function changeVisibility() {
//     document.getElementById("shape").classList.toggle("hide");
// }

// // Manipulating attributes

// /* With the setAttribute() method, we can add or change attributes on an element.
// This will change the HTML of the page. If you inspect the HTML in the browser you
// will see that the changed attributes are visible. */

// function changeAttr() {

//     let el = document.getElementById("shape");

//     el.setAttribute("style", "background-color: red; border: 1px solid black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");

// }

// // Event listeners on elements

// document.getElementById("square").addEventListener("click", changeColor);

// /* This is getting the element with the ID square and adding the changeColor function
// as the event for whenever it gets clicked. Note that when using event listeners, we
// remove the on prefix from the event type. For example, click here references the
// same event type as onclick, but we have removed the on prefix. */

// window.onload = function () {
//     document.getElementById("square").addEventListener("click", changeColor);
// }

// function changeColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

// Creating new elements

/* There is still an important one missing, the creation of new elements and adding
them to the DOM. This consists of two steps, first creating new elements and second
adding them to the DOM. */

// function addRandomNumber() {

//     let el = document.createElement("p");

//     el.innerText = Math.floor(Math.random() * 100);

//     document.body.appendChild(el);
// }

// let inputName = prompt("Insert an name.");

// document.getElementById("the-name").innerText = inputName;

// CHAPTER PROJECT 

// Collapsible accordion component

// let titles = document.querySelectorAll(".title");

// let text = document.querySelectorAll(".myText");

// titles.forEach((el) => {
//     el.addEventListener("click", (e) => {
//         remover();
//         el.nextElementSibling.classList.toggle("active");
//     })
// });

// function remover() {
//     text.forEach((ele) => {
//         ele.classList.remove("active");
//     })
// };

// Interactive voting system

// window.onload = build;

// const myArray = ["Laurence", "Mike", "John", "Larry"];

// const message = document.getElementById("message");

// const addNew = document.getElementById("addNew");

// const newInput = document.getElementById("addFriend");

// const output = document.getElementById("output");

// addNew.onclick = function () {

//     const newFriend = newInput.value;

//     adder(newFriend, myArray.length, 0);

//     myArray.push(newFriend);

// }

// function build() {

//     myArray.forEach((item, index) => {

//         adder(item, index, 0);

//     });
// }

// function adder(name, index, counter) {

//     const tr = document.createElement("tr");

//     const td1 = document.createElement("td");

//     td1.classList.add("box");

//     td1.textContent = index + 1;

//     const td2 = document.createElement("td");

//     td2.textContent = name;

//     const td3 = document.createElement("td");

//     td3.textContent = counter;

//     tr.append(td1);

//     tr.append(td2);

//     tr.append(td3);

//     tr.onclick = function () {

//         console.log(tr.lastChild);

//         let val = Number(tr.lastChild.textContent);

//         val++;

//         tr.lastChild.textContent = val;

//     }

//     output.appendChild(tr);
// }

// Hangman

const game = { cur: "", solution: "", puzz: [], total: 0 };

const myWords = ["learn Javascript", "learn html", "learn css"];

const score = document.querySelector(".score");

const puzzle = document.querySelector(".puzzle");

const letters = document.querySelector(".letters");

const btn = document.querySelector("button");

btn.addEventListener("click", startGame);

function startGame() {

    if (myWords.length > 0) {

        btn.style.display = "none";

        game.puzz = [];

        game.total = 0;

        game.cur = myWords.shift();

        game.solution = game.cur.split("");

        builder();

    } else {

        score.textContent = "No More Words.";

    }
}

function createElements(elType, parentEle, output, cla) {

    const temp = document.createElement(elType);

    temp.classList.add("boxE");

    parentEle.append(temp);

    temp.textContent = output;

    return temp;

}

function updateScore() {

    score.textContent = `Total Letters Left : ${game.total}`;

    if (game.total <= 0) {

        console.log("game over");

        score.textContent = "Game Over";

        btn.style.display = "block";
    }
}

function builder() {

    letters.innerHTML = "";

    puzzle.innerHTML = "";

    game.solution.forEach((lett) => {

        let div = createElements("div", puzzle, "-", "boxE");

        if (lett == " ") {

            div.style.borderColor = "white";

            div.textContent = " ";

        } else {

            game.total++;

        }

        game.puzz.push(div);

        updateScore();

    });

    for (let i = 0; i < 26; i++) {

        let temp = String.fromCharCode(65 + i);

        let div = createElements("div", letters, temp, "box");

        let checker = function (e) {

            div.style.backgroundColor = "#ddd";

            div.classList.remove("box");

            div.classList.add("boxD");

            div.removeEventListener("click", checker);

            checkLetter(temp);

        }

        div.addEventListener("click", checker);

    }
}

function checkLetter(letter) {

    console.log(letter);

    game.solution.forEach((ele, index) => {

        if (ele.toUpperCase() == letter) {

            game.puzz[index].textContent = letter;

            game.total--;

            updateScore();

        };
    });
}

// PROJECT QUIZ

/*

1. It will change the div's text to the following: "Hello <br> World"

2. 
Hello
 World

3. Does nothing.

4. Three

5. btn.removeEventListener();

*/