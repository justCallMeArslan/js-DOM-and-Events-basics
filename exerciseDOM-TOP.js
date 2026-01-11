// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
// - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding 
// it to the container.


const container = document.querySelector("#container");

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red";
container.appendChild(para);

const childContainer = document.createElement("div");
childContainer.setAttribute("style", "background: pink; border: 3px solid black;");
const h1ChildCont = document.createElement("h1");
h1ChildCont.textContent = "I'm in div";
const pChildCont = document.createElement("p");
pChildCont.textContent = "ME TOO";
childContainer.appendChild(h1ChildCont);
childContainer.appendChild(pChildCont);
container.appendChild(childContainer);

console.log(container);
