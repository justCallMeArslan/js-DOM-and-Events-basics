// Events

// Events are actions that occur on your webpage, such as mouse-clicks or key-presses. Using JavaScript, we can 
// make our webpage listen to and react to these events.

// There are three primary ways to go about this:

// - can specify function attributes directly on HTML elements.
// - can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in JS.
// - can attach event listeners to the DOM nodes in JS

// We’re going to create three buttons that all alert “Hello World” when clicked. 

// 1. Refer to index.html file to check for method 1 usage.

// 2. This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the 
// problem that a DOM element can only have one “onclick” property.

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
btn.style.backgroundColor = "yellow"; // - just for better visibility

// 3. Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. 
// Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

const btnToo = document.querySelector("#btnToo");
btnToo.addEventListener("click", function alertFucnction() { // () => nameless function can be used too
    alert("Hello World");
});
btnToo.setAttribute("style", "color: pink; background: brown"); // - just for better visibility


// With all three methods, we can access more information about the event by passing a parameter to the 
// function that we are calling.

btnForE.addEventListener("click", function(e) {
    console.log(e);
})

// When we pass in alertFunction or function (e) {...} as an argument to addEventListener, we call this a 
// callback. A callback is simply a function that is passed into another function as an argument.

// The e parameter in that callback function contains an object that references the event itself. Within that 
// object you have access to many useful properties and methods (functions that live inside an object) such as 
// which mouse button or key was pressed, or information about the event’s target - the DOM node that was 
// clicked. JavaScript knows the parameter is an event because an event listener callback takes an Event object 
// by definition. When the callback is run, the event handler passes in its own reference to the event. 


// btnForE.addEventListener("click", function(e) { // - returns HTML element
//     console.log(e.target);
// })

// btnForE.addEventListener("click", function (e) { // - changes background color to blue
//   e.target.style.background = "blue";
// });


// Attaching listeners to group of nodes

// we can get a NodeList of all of the items matching a specific selector with querySelectorAll('selector'). In 
// order to add a listener to each of them, we need to iterate through the whole list:

const buttons = document.querySelectorAll("button");
console.log(buttons); // returns [] os all buttons

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})
