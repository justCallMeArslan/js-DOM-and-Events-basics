//

// DOM - Document Object Model 

// The DOM is a tree-like representation of the contents of a webpage - a "tree" of nodes with different 
// relationships depending on how they are arranged in the HTML document.

// <div id="container">  - parent
//     <div class="display"></div> - child/sibling
//     <div class="controls"></div> - child/sibling
// </div>


// When working with DOM we use eletors to target the node we want to work on.

// In the above example, you could use the following selectors to refer to <div class="display"></div>:

// div.display
// .display
// #container > .display
// div#container > div.display
// firstElementChild or lastElementChild

// Precise example:

// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
// console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display1 = controls.previousElementSibling;
// console.log(display); // <div class="display"></div>



// DOM methods


// Query selectors 


element.querySelector(selector) // - returns reference to the first match of selector

element.querySeclectorAll(selector) // - returns a "NodeList" containing references to all of the matches of 
// the selectors. In order to manipulate with ease -> convert into Array with Array.from() or spread operator.


// Element creation 


document.createElement(tagName, ([options])) // - creates a new element of tag type tagName. [options] allows 
// to add some additional parameters. 

const div = document.createElement("div"); // - does not put element in DOM tree, but creates it in memory for 
// manipulation and setting before placing it.


// Append element


parentNode.appendChild(childNode) // - appends childNode as the last child of parentNode 

parentNode.insertBefore(newNode, referenceNode) // - inserts newNode into parentNode before referenceNode


// Remove elements 


parentNode.removeChild(child) // - removes child from parentNode on the DOM and returns a reference to child.


// Adding inline style


div.style.color = "blue"; // - adds the indicated style rule to the element in the div variable

div.style.cssText = "color: blue; background: white;"; // - adds several style rules

div.setAttribute("style", "color: blue; background: white;"); // - adds several style rules

// when accessing a kebab-cased CSS property like background-color with JS, you will need to either use 
// camelCase with dot notation or bracket notation. When using bracket notation, you can use either camelCase 
// or kebab-case, but the property name must be a string.

div.style.backgroundColor; // - correct way

div.style["background-color"]; // - correct way

div.style["backgroundColor"]; // - correct way 

div.style.background - color; // - wrong way


// Editing attributes


div.setAttribute("id", "theDiv"); // - if id exists, update it to 'theDiv', else create an id with value "theDiv"

div.getAttribute("id"); // - returns value of specified attribute, in this case "theDiv"

div.removeAttribute("id"); // - removes specified attribute


// Working with classes


div.classList.add("new"); // - adds class "new" to new div

div.classList.remove("new"); // - removes "new" class from div

div.classList.toggle("active"); // - if div doesnt have class "active" - add it, or if it does - remove it

// its a standard practice to toggle a CSS style rather than adding and removing inline CSS


// Adding text content

