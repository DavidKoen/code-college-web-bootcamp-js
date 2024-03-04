// WHILE LOOP

// let guess = prompt("Username");

// while(guess !== "david") { // will only enter the code box if the condition is true.
//     alert("Wrong");
//     break;
// };

// DO WHILE GROUP

// do { // executes the code box at least once.
//     console.log("Loop executed.")
//     let guess = prompt("Username")
// } while (guess !== "david");

// FOR LOOP

// let names = ["Bob", "Phile", "Jack"]

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// };

// let arrOfArrays = [];

// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]); // INSERTS AN EMPTY ARRAY INTO THE CALLED VERIABLE UNTIL IT'S CONDITION IS MET.
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j); // EXITS THE PREVIOUS CODE BOX THEN INSERTS j VALUE INTO THE CALLED VERIABLE UNTIL IT'S CONDITION IS MET.
//     }
// }

// console.table(arrOfArrays);

// let names = ["Nick", "Jason", "Nathan", "Nate", "Jack"];
// let nNames = [];
// let jNames = [];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("N")) { // THE startWith() METHOD LOOKS AT THE FIRST INDEX OF AN ELEMENT/VALUE.
//         nNames.unshift(names[i]);
//     } else if (names[i].startsWith("J")) {
//         jNames.unshift(names[i]);
//     }
// };

// console.log(nNames);
// console.log(jNames);

// LOOPS AND ARRAYS

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// for (let name of names) { // So you can read it like this: "For every value of the array, call it variableName and do the following.
//     console.log(name);
// }

// LOOPS AND OBJECTS

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };

// for (let prop in car) {
//     console.log(car[prop]);
// }
/* As you can see, all the names of the properties get printed, and not the values. This
is because the for in loop is getting the property names (keys) and not the values.
The for of is doing the opposite; it is getting the values and not the keys */

// EXCERCISE 5.7

// let object = {
//     itemOne: "valueOne",
//     itemTwo: "valueTwo",
//     itemThree: "valueThree"
// };

// for (let items in object) {
//     console.log(items);
// }

// let array = [object];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };

// break and continue and labeled blocks

// let names = ["Jess", "Jason", "Harvey", "Helen", "Jude"];
// let jNames = [];

// outer:
// for (let i = 0; i < names.length; i++) {
//     let repeatNames = names[i];
//     inner:
//     if (names[i].startsWith("J")) {
//         jNames = names[i];
//         console.log(jNames);
//         break outer; // THIS WILL BREAK OUT OF THE MAIN LOOP BEFORE THE LOOP IS FINISHED.
//     }
// }

// CHAPTER PROJECT

let finalTable = [];
let value = 4;

outer:
for (let v = 0; v < value; v++) {
    let tempArray = [];
    inner:
    for (let mv = 0; mv < value; mv++) {
        tempArray.push(v * mv)
    }
    finalTable.push(tempArray);
}

console.log(finalTable);

/* PROJECT QUIZ

1. 

0
3
6
9 

(Because the for loop keeps adding the value of the step variable to the i variable. Once the condition of the inner loop is met, it breaks out the loop and into the log command.)

2. 

0 
5
1
6
2
7

*/