/* How to Use the Fetch API with Promises

The Fetch API is a built-in JavaScript feature that allows you to make network requests, such as fetching data 
from a server. It is a modern alternative to the older XMLHttpRequest API and is designed to be 
easier and more powerful. 

fetch('https://some-api.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

In this example,

The fetch() method is used to make a request to the server located at "https://some-api.com/data". 
The returned value is a promise that will be fulfilled with the server's response.
The first .then() method is called to consume the promise and extract JSON data from the response.  
The next then() method is called to log the extracted data to the console.
If any errors occur, they will be caught in the catch() method and logged to the console.

Async Functions with async/await
Async/Await is a feature that allows you to write asynchronous code in a more synchronous, readable way.

async is a keyword that is used to declare a function as asynchronous.
await is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.

Here's an example of how you can use async/await:

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getData();

In this example,

The getData function is declared as an asynchronous function using the async keyword.
Inside the asynchronous function, we use the await keyword to wait for the fetch function to complete and retrieve some data from an API.
Once the data is retrieved, we use await again to wait and parse the retrieved data as JSON.
And then finally, we log the data to the console.
*/

let bttn = document.getElementById("first");

let anotherBttn = document.getElementById("second");

let div = document.querySelector("div");

bttn.addEventListener("click", fetchFirstProduct);

anotherBttn.addEventListener("click", fetchSecondProduct);

async function fetchFirstProduct() {

  console.log("Started request…");

  try {
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[0].name);

  }

  catch (error) {
    console.error(`Could not get products: ${error}`);
  }

};

async function fetchSecondProduct() {

  console.log("Started request…");

  try {
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[1].name);

  }

  catch (error) {
    console.error(`Could not get products: ${error}`);
  }

};