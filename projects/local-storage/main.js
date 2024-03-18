/*

Session Storage Object?
The session storage object (window.sessionStorage) stores data that persists for only one session of an opened tab.

Local Storage Object?
The local storage object (window.localStorage) stores data that persists even when users close 
their browser tab (or window).

////////////////////////

What are Web Storage’s Built-In Interfaces?

The web storage built-in interfaces are the recommended tools for reading and manipulating a browser’s 
sessionStorage and localStorage objects.

The six (6) built-in interfaces are:

setItem()
key()
getItem()
length
removeItem()
clear()

////////////////////////////////

What is web storage’s setItem() method?
The setItem() method stores its key and value arguments inside the specified web storage object.

webStorageObject.setItem("color", "Pink");

webStorageObject represents the storage object (localStorage or sessionStorage) you wish to manipulate.
key is the first argument accepted by setItem(). It is a required string argument representing 
the name of the web storage property you want to create or update.
value is the second argument accepted by setItem(). It is a required string argument 
specifying the value of the key you are creating or updating.

/////////////////////////

How to store serialized objects in the web storage

sessionStorage.setItem("myBio", JSON.stringify({ name: "Oluwatobi" }));

We used JSON.stringify() to convert the object to JSON before storing it in the web storage.

///////////////////////////////////

What is web storage’s key() method?
The key() method retrieves a specified web storage item’s name (key).

// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Get the name of the item at index 1:
localStorage.key(1);

///////////////////////////////////

What is web storage’s getItem() method?
The getItem() method retrieves the value of a specified web storage item.


*/