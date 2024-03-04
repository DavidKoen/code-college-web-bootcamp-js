// let num = [1, 2, 3, 4, 5];

// num.pop(); // REMOVES THE LAST VALUE

// num.shift(); // REMOVES THE FIRST VALUE.

// console.log(num);

// num.push(6); // ADDS A VALUE AT THE END OF THE ARRAY

// console.log(num);

// let strings = ["one", "two", "three", "four", "five"];

// let edit = num.concat(strings); // ADDS AN ARRAY AS A VALUE

// console.log(edit);

// num.splice(0, 2, "one", "two"); // THE FIRST TWO VALUES TAKES THE FIRST INDEXED VALUE OF THE ARRAY AND THE VALUE BEFORE THE SECOND CALLED INDEXED VALUE, AND REPLACES IT WITH THE FOLLOWING VALUES.

// console.log(num);

// // Multidimensional arrays

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];

// let twoDimArray = [someValues1, someValues2, someValues3]; // two-dimensional array

// let access = twoDimArray[1][2]; // THIS WILL ACCESS THE SECOND ARRAY IN THE CALLED ARRAY< THEN ACCESS IT'S THIRD VALUE.

// Working with objects and arrays

// Object in objects

// let fCompany = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// // Arrays in objects

// let sCompany = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// // Objects in arrays

// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];

// // Objects in arrays in objects

// let thCompany = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: [{
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     {
//         street: "1st West avenue",
//         number: "5",
//         zipcode: "75001",
//         city: "Addison",
//         state: "Texas"
//     }],
//     yearOfEstablishment: 2021
// };

// PRACTICE EXCERCISE 3.5

// let people = { friends: [] };

// let bestFriend = {
//     firstName: "Lukin",
//     lastName: "Potgieter",
//     Hobby: "Music"
// };

// let closeFriend = {
//     firstName: "Zee",
//     lastName: "Harva",
//     Hobby: "Gaming"
// };

// let distantFriend = {
//     firstName: "Josh",
//     lastName: "Nel",
//     Hobby: "Jogging"
// };

// people.friends.unshift([bestFriend, closeFriend, distantFriend]);  // TO CALL A VALUE IN AN OBJCT WE USE KEYWORDS NOT INDEXING.

// console.log(people);

// CHAPTER PROJECT

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', 
score: 55}, 
['one', 'two']];

theList.shift(); // REMOVES THE FIRST ELEMENT
theList.pop(); // REMOVES THE LAST ELEMENT
theList.unshift("FIRST"); // ADDS AN ELEMENT TO THE START OF THE ARRAY
theList.splice(4, 4, "hello world"); 
theList.splice(2, 3, "MIDDLE", "hello world");
theList.push("LAST"); // ADDS AN ELEMENT TO THE END OF THE ARRAY

console.log(theList);

// COMPNAY PRODUCT CATALOG

let storeItems = ["apples", "oil", "toilet paper"];

let extraItems = {
    hake: {
        cost: 20,
        type: "Seafood",
        quantity: 15
    },
    chips: {
        cost: 10,
        type: "Junkfood",
        quantity: 25
    },
    steak: {
        cost: 80,
        type: "Meat",
        quantity: 5
    }
};

storeItems.push(extraItems);
console.log(storeItems);

console.log(storeItems[3].steak.quantity);

// CHAPTER QUIZ

/*
1. The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.

2. The getLength() method.

3. 1 then 6.

4. myArr.splice(2, 3, 4)

5. myArr2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "test"]
undefined 

6. undefined */