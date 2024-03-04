/* object-oriented programming (OOP). OOP is a very important programming
paradigm wherein code is structured in objects, leading to more maintainable and
reusable code */

// class myClass { /* You may wonder, if classes do the exact same thing as simply defining an object,
// why do we even need classes? The answer is that classes are essentially blueprints
// for object creation. This means that we need to do much less typing if we need
// to create 20 dogs when we have a dog class. */
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

// vvd.greet(); gggg