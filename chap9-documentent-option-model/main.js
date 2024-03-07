/* Browser Object Model (BOM)

we can explore the BOM and see the objects of it with the command
console.dir(window).  

The BOM contains many other objects. We can access these like we saw when
we dealt with objects, so for example, we can get the length of the history (in my
browser) accessing the history object of the window and then the length of the
history object, like this:

window.history.length; 

// EXCERCISE 9.1

2. Yes I can.

3. 
innerHeight: 732
innWidth: 903

Window history object

The window browser object also contains a history object. This object can actually
be written without the prefix of window because it has been made globally available,
so we can get the exact same object by using the console.dir(window.history) or
simply the console.dir(history) command in the console.

This object is actually what you can use to go back to a previous page. It has a builtin function for that called go.

window.history.go(-1); THIS WILL GO BACK IN BROWSE HISTORY

Window navigator object

In the window object that we just saw, there is a navigator property. This property
is particularly interesting because it contains information about the browser we are
using, such as what browser it is and what version we are using, and what operating
system the browser is running on.
This can be handy for customizing the website for certain operating systems. Imagine
a download button that will be different for Windows, Linux, and macOS.
You can explore it using this command in the console:

console.dir(window.navigator);

As you can see, we start with accessing the window, because navigator is an object
of the window object. So it is a property of the window object, which we specify with
the dot in between. In other words, we access these window objects in the same way
we do any other object. But, in this case, as navigator is also globally available, we
can also access this without window in front of it with this command:

console.dir(navigator);

Window location object

Another rather interesting and unique property of window is the location object.
This contains the URL of the current web page. If you override (parts of) that
property, you force the browser to go to a new page! How to do this exactly differs
per browser, but the next exercise will guide you through this.

The location object consists of a few properties. You can see them by using the
command 

console.dir(window.location) or console.dir(location) in the console

EXCERCISE 9.2

console.log(window.location.href);
"file:///C:/01-my-folder/Work/code-college/my-code/web/js/chap9-documentent-option-model/index.html"

console.log(window.location.protocol);
"file:"


Document Object Model (DOM) 

is a lot more exciting than it may sound at first. In this chapter, we will introduce you to the DOM. This is a fundamental
concept you will need to understand before working with JavaScript on web pages. It
grabs an HTML page and turns it into a logical tree. 

Browser Object Model (BOM). The BOM holds all the methods
and properties for JavaScript to interact with the browser. This is information related
to previous pages visited, the size of the window of the browser, and also the DOM.

The DOM is actually not very complicated to understand. It is a way of displaying
the structure of an HTML document as a logical tree. This is possible because of the
very important rule that inner elements need to be closed before outer elements get
closed. 

EXAMPLE:

<html>
    <head>
        <title>Tab in the browser</title>
    </head>
    <body>
        <h1>DOM</h1>
    <div>
        <p>Hello web!</p>
        <a href="https://google.com">Here's a link!</a>
    </div>
    </body>
</html>

As you can see, the most outer element, html, is at the top of the tree. The next
levels, head and body, are its children. head has only one child: title. body has two
children: h1 and div. And div has two children: p and a. These are typically used
for paragraphs and links (or buttons). Clearly, complex web pages have complicated
trees. This logical tree and a bunch of extra properties make up a web page's DOM.

Selecting Page Elements

To select page elements to use within your JavaScript code and in order to
manipulate elements, you can use either the querySelector() or querySelectorAll()
method. Both of these can be used to select page elements either by tag name, ID, or
class.

*/

// const ele1 = document.querySelector("h1");

// console.dir(ele1);

// let eles = document.querySelectorAll(".output");

// console.log(eles);

// EXCERCISE 9.3

// let output = document.querySelector(".output");

// output.textContent = "Hello I am David Koen.";

// output.classList = "red";

// output.id = "tester";

// output.style.backgroundColor = "red";

// output.textContent = document.URL

// CHAPTER PROJECT 

let output = document.querySelector(".output");

let mainList = document.querySelector("ul");

mainList.id = "mainList";

let divs = document.querySelectorAll("div");
console.log(divs);

for (let i = 0; i < divs.length; i++) {
    divs[i].id = i;
    divs[i].style.color = "blue";
}

// PROJECT QUIZ

/*

1. I see the whole HTML layout inside the body tags.

2. It blanked the window, and wrote the inputed text.

3. It lists the BOM environment.

4. It lists the DOM environement.

5: */

// let h1 = document.querySelector("h1");

// h1.textContent = "Hello World";