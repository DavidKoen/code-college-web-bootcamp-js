/* object-oriented programming (OOP). OOP is a very important programming
paradigm wherein code is structured in objects, leading to more maintainable and
reusable code */

// class myClass { 

// // /* You may wonder, if classes do the exact same thing as simply defining an object,
// // // why do we even need classes? The answer is that classes are essentially blueprints
// // // for object creation. This means that we need to do much less typing if we need
// // // to create 20 dogs when we have a dog class. */

//     constructor(studentName, studentProfession, studentAccomodation) /* The constructor method is a special method that we use to initialize objects with
//     our class blueprint. There can only be one constructor in a class. This constructor
//     contains properties that will be set when initiating the class. */ {
//         this.student = studentName; 
//         this.profession = studentProfession;
//         this.accomodation = studentAccomodation;
//     }
// };

// let firstStudent = new myClass("Jason", "PHP Dev", "Midrand");
// let secondStudent = new myClass("Nick", "Java Dev", "Centurion");
// let thirdStudent = new myClass("Steve", "UI Designer", "Cape Town");

// EXCERCIES 7.1

// class Person {
//     constructor(firstnameinput, lastnameinput) {
//         this.firstname = firstnameinput;
//         this.lastname = lastnameinput;
//     }
// }

// let matthew = new Person("Matthew", "Cook");
// let jason = new Person("Jason", "Botha");

// console.log(matthew.firstname, matthew.lastname);

// METHODS

/* In a class, we can specify functions. This means that our object can start doing things
using the object's own properties—for example, printing a name. Functions on a
class are called methods */

// class lfcPlayers {
//     constructor(playersName, playerPosition, playerNation) {
//         this.playersName = playersName;
//         this.playerPosition = playerPosition;
//         this.playerNation = playerNation;
//     }

//     greet () {
//         console.log("Welcome " + this.playersName + " to the team.")
//     }
// }

// let vvd = new lfcPlayers("VVD", "CB", "Netherlands");

// vvd.greet();

// EXCERCISE 7.2

// class Person {
//     constructor(firstnameinput, lastnameinput) {
//         this.firstname = firstnameinput;
//         this.lastname = lastnameinput;
//     }

//     fullname() {
//         return this.firstname + " whose surname is " + this.lastname;
//     }
// }

// let matthew = new Person("Matthew", "Cook");

// console.log(matthew.fullname());

// PROPERTIES

// class Person {
//     #firstname; // this is a private property, meaning it can can't be manipulated outside the class.
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     // GETTERS AND SETTERS

//     /* Getters and setters are special properties that we can use to get data from a class and
//     to set data fields on the class. Getters and setters are computed properties. So, they
//     are more like properties than they are like functions. We call them accessors. They do
//     look a bit like functions, because they have () behind them, but they are not!

//     These accessors start with the get and set keywords. It is considered good practice to
//     make fields private as much as possible and provide access to them using getters and
//     setters. This way, the properties cannot be set from outside without the object itself
//     being in control. This principle is called encapsulation. The class encapsulates the
//     data, and the object is in control of its own fields. */

//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }

//         /* This will check whether firstname starts with an M, and if it does it will update the
//         value to whatever the firstname parameter is. If it doesn't, it will concatenate an M in
//         front of the parameter.

//         Please note that we do not access firstname as if it was a function. If you put two
//         parentheses () after it, you would actually get an error telling you that it is not a
//         function. */

//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }

// }

// INHERITANCE 

/* Inheritance is one of the key concepts of OOP. It is the concept that classes can have
child classes that inherit the properties and methods from the parent class. For
example, if you needed all sorts of vehicle objects in your application, you could
specify a class named Vehicle in which you specify some shared properties and
methods of vehicles. You would then go ahead and create the specific child classes
based on this Vehicle class, for example, boat, car, bicycle, and motorcycle. */

// class Vehicle {

//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("moving at", this.currentSpeed);
//     }

//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }

// }

// class Motorcycle extends Vehicle {

//     /* With the extends keyword we specify that a certain class is the child of another class.
// In this case, Motorcycle is a child class of Vehicle. 

// This means that we'll have access
// to properties and methods from Vehicle in our Motorcycle class. We have added a
// special doWheelie() method. This is not something that makes sense to add to the
// Vehicle class, because this is an action that is specific to certain vehicles. */

//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);

//         /* The super word in the constructor is calling the constructor from the parent, the
// Vehicle constructor in this case. This makes sure that the fields from the parent
// are set as well and that the methods are available without having to do anything
// else: they are automatically inherited. */

//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }

// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);

// motor.accelerate(50);
// motor.move();

//EXCERCISE 7.3

// class Animal {
//     constructor(nameInput, soundInput) {
//         this.name = nameInput;
//         this.sound = soundInput;
//     }
// };

// let pig = new Animal("Pig", "Oink");
// let bat = new Animal("Bat", "Squeek");

// Animal.prototype.food = function() {  

//     /* A prototype is the mechanism in JavaScript that makes it possible to have objects.
// When nothing is specified when creating a class, the objects inherit from the
// Object.prototype prototype. */

//     let theAct = prompt("What does the animal eat");
//     this.food = theAct;
// };

// pig.food();

// console.log("You have chosen the " + pig.name + " which likes to " + pig.sound + " and, eat " + pig.food + ".");

// CHAPTER PROJECTS

// Employee tracking app

class Employee {
    constructor(firstNameInput, lastNameInput, yearsInput) {
        this.firstname = firstNameInput;
        this.surname = lastNameInput;
        this.years = yearsInput;
    }
}

let employArr = [
    {
        firstName: "Bob",
        lastName: "Builder",
        workYears: 4
    },
    {
        firstName: "Nick",
        lastName: "Nickle",
        workYears: 2
    }
];

Employee.prototype.details = function() {
    var fn = employArr[0].firstName;
    var sn = employArr[0].lastName;
    var wy = employArr[0].workYears;

    this.firstname = fn;
    this.surname = sn;
    this.years = wy;

    return new Employee(fn, sn, wy)
};

let bob = new Employee().details();
console.log(bob.firstname + " " + bob.surname + " has worked here for " + bob.years + " years.")

// Menu items price calculator



// PROJECT QUIZ

/*
1. new

2. class Person {
    constructor(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
}

3. Inheritance

4. All true.
*/