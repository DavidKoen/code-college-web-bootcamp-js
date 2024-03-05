// let s = "Hello";
// console.log(
//  s.concat(" there!")
//  .toUpperCase()
//  .replace("THERE", "you")
//  .concat(" You're amazing!")
// );

// ENCODING AND DECODING URI

// let uri = "https://www.example.com/submit?name=maaike van putten";

// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);

// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

/////////////////////////////////////////////////////////////////////////////

// let uri2 = "https://www.example.com/submit?name=maaike van putten";

// let encoded_uri2 = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);

// let decoded_uri2 = decodeURIComponent(encoded_uri2);
// console.log("Decoded:", decoded_uri2);

// EXCERCISE 8.1

// let strng = "How's%20it%20going%3F";
// let strngFixed = decodeURIComponent(strng);

// console.log(strngFixed);

// let strng2Fixed = encodeURIComponent(strngFixed);

// console.log(strng2Fixed)

// let brokenURI = "http://www.basescripts.com?=Hello World";
// let fixedURI = encodeURI(brokenURI);

// console.log(fixedURI);


// Making integers with parseInt()

// let string = "7.6";

// let int = parseInt(str_float);

// console.log("Type of", int, "is", typeof int);

/* First of all, JavaScript doesn't like crashing or
using errors as a way out, so it is trying to make it work to the best of its abilities. The
parseInt() method simply stops parsing when it runs into a non-numeric character.
This is the specified behavior, and you need to keep that in mind while working with
parseInt(). In the first case, it stops parsing as soon as it finds the dot, so the result
is 7 */

// let string = "hello!";

// let int = parseInt(string);

// console.log("Type of", int, "is", typeof int);

// Since the first character is non-numeric, JavaScript will convert this string to NaN.

// Making floats with parseFloat()

// let string = "2.3.4";

// let float = parseFloat(string);

// console.log("Type of", float, "is", typeof float);

/* With the parseInt(), this value became 7, because it would stop parsing as soon as
it finds a non-numeric character. However, parseFloat() can deal with one dot in
the number, and the numbers after that are interpreted as decimals. */

// Executing JavaScript with eval() LOOK AT THE HTML

/* This global method executes the argument as a JavaScript statement. This means
that it will just do whatever JavaScript is inserted in there, as if that JavaScript were
written directly on the spot instead of eval(). 

Yes, this is probably the worst thing security-wise you can
do in most situations. You are going to execute external code. This code could be
malicious. It is a method for supporting code injection. The well-respected OWASP
(Open Web Application Security Project) Foundation creates top 10s for security
threats every 3 years. Code injection has been on it since their first top 10 and it is
still in the OWASP top 10 security threats now. */

// Array methods

// Performing a certain action for every item

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {
//     console.log("Printing stuff:", element, "on array position:", index);
// }

// arr.forEach(printStuff); // The first parameter will always be the first element of the called variable, the 2nd will always be the index if the 2nd parameter was not called.

/* As you can see, it called the printStuff() function for every element in the array.
And we can also use the index, it is the second parameter. We don't need to
control the flow of the loop here and we cannot get stuck at a certain point. We
just need to specify what function needs to be executed for every element. And
the element will be input for this function. This is used a lot, especially for a more
functional programming style in which many methods get chained, for example,
to process data */

// Filtering an array

/* The filter method takes a function as an argument, and this function should
return a Boolean. If the Boolean has the value true, the element will end up in the
filtered array. If the Boolean has the value false, the element will be left out. */

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) { // THIS  LOOKS FOR STRINGS THEN RETURNS IT.
//  return typeof element === "string";
// }

// let filterArr = arr.filter(checkString); // THIS WILL OUTPUT ALL THE TRUE VALUES.

// /* You can use the every() method to see whether something is true for all elements
// in the array. If that is the case, the every() method will return true, else it will
// return false. */

// console.log(filterArr.every(checkString));

////////////////////////////////////////////////////////////////////////////

// String methods

/* Combining strings

// let s1 = "Hello ";  

// let s2 = "JavaScript";

// let result = s1.concat(s2);

// console.log(result);

When you want to concatenate strings, you can use the concat() method. This does
not change the original string(s); it returns the combined result as a string. You will
have to capture the result in a new variable, else it will get lost */

// Converting a string to an array

// let result = "Hello JavaScript";

// let arr_result = result.split(" ");

// console.log(arr_result);

/* With the split() method we can convert a string to an array. Again, we will have to
capture the result; it is not changing the original string. Let's use the previous result
containing Hello JavaScript. We will have to tell the split method on what string it
should split. Every time it encounters that string, it will create a new array item */

// Converting an array to a string

// let letters = ["a", "b", "c"];

// let x = letters.join();

// console.log(x);

////////////////////////////////////////////////

// let letters = ["a", "b", "c"];

// let x = letters.join('-');

// console.log(x);

// Working with index and positions

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let index_re = poem.indexOf("re");

// console.log(index_re); // This is logging 7 to the console, because the first occurrence of re is in are, and the re begins at index 7.

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let pos1 = poem.charAt(10);

// console.log(pos1);

/* Sometimes you will have to do the reverse; instead of looking for what index a string
occurs at, you will want to know what character is at a certain index position. This is
where the charAt(index) method comes in handy, where the specified index position
is taken as an argument */

// Creating substrings

// let str = "Create a substring";

// let substr1 = str.slice(5);

// let substr2 = str.slice(0,3);

// console.log("1:", substr1);

// console.log("2:", substr2);

/* The first one only has one argument, so it starts at index 5 (which holds an e) and
grabs the rest of the string from there. The second one has two arguments, 0 and 3. C
is at index 0 and a is at index 3. Since the last index is not included in the substring,
it will only return Cre. */

// Replacing parts of the string

let hi = "Hi buddy";

let new_hi = hi.replace("buddy", "Pascal");

console.log(new_hi);

//////////////////////////////////////////////////////////

let s3 = "hello hello";

let new_s3 = s3.replaceAll("hello", "oh");

console.log(new_s3);

/* This logs oh hello. If we wanted to replace all the occurences, we could use the
replaceAll() method. This will replace all occurrences with the specified new string */

// Date methods

// Methods to get and set the elements of a date

let d = new Date();

console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

// Parsing dates

let d1 = Date.parse("June 5, 2021");

console.log(d1);

/* With the built-in parse() method we can parse epoch dates from strings. It accepts
many formats, but again you will have to be careful with the order of days and
months */