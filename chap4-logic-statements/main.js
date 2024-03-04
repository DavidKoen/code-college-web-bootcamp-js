// Conditional ternary operators

// let age = 19;

// /* age is the expression, the first operand is the statement for the true value, the second operand is the statement for the false value */
// let bouncer = age < 17 ? "Sorry, you are too young." : "You may come inside.";

// console.log(bouncer);

// COMBING CASES IN A SWITCH STATEMENT.

// let grade = prompt("What was your grade?").toUpperCase();

// switch (grade) {
//     case "A":
//     case "B":
//     case "C":
//     alert("You passed!");
//     break;

//     case "D":
//     case "E":
//     alert("Close call...");
//     break;

//     case "F":
//     alert("You failed.");
//     break;

//     default:
//     prompt("That is not an appropriate grade.");
// }

// CHAPTER PROJECTS

// Evaluating a number game

// let output = prompt("Input a number between 1 and 7.");
// let myNumber = 5;

// if (output > myNumber) {
//     alert("Your number is greater than mine.")
// } else if (output < myNumber) {
//     alert("Your number is less than mine.")
// } else {
//     alert("You guessed my number.")
// };

// Friend checker game

let yourFriend = prompt("Name one friend.").toLowerCase();

switch(yourFriend) {
    case "nick":
    alert("We have the same friend.");
    break;

    default:
    alert("I don't know them.");
    break;
}

// Rock Paper Scissors game

// let player = ["rock", "paper", "scissors"];
// let computer = ["rock", "paper", "scissors"];
// let generator = [Math.floor(Math.random() * 3)];
// let generatorTwo = [Math.floor(Math.random() * 3)];

// let playerChoice = player[generator];
// let compChoice = computer[generatorTwo];

// if (playerChoice === "rock" && compChoice === "rock") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("It is a draw!")
// } else if (playerChoice === "paper" && compChoice === "paper") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("It is a draw!")
// } else if (playerChoice === "scissors" && compChoice === "scissors") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("It is a draw!")
// } else if (playerChoice === "scissors" && compChoice === "paper") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("You win!")
// } else if (playerChoice === "scissors" && compChoice === "rock") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("You lose!")
// } else if (playerChoice === "rock" && compChoice === "paper") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("You lose!")
// } else if (playerChoice === "scissors" && compChoice === "paper") {
//     alert("You chose " + playerChoice + "and the computer chose " + compChoice + ".");
//     alert("You win!");
// }

// PROJECT QUIZ

/*
1. "one"

2. 1

3. "login"

4. "Welcome, that is a user: John"

5. "Wake up, it's morning"

6. true false true true

7. "100 is Even"
*/