const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = xPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});

/*
document.querySelector("body") finds the <body> element in the HTML. bodyE1 is just a variable name (short for “body element”).
addEventListener("mousemove", ...) means: “Run this code every time the mouse moves inside the body.” The (event) object contains information about the mouse movement (like the mouse’s position).
event.offsetX: the X (horizontal) position of the mouse relative to the element.
event.offsetY: the Y (vertical) position of the mouse relative to the element.
const spanEl = document.createElement("span");
This makes a new <span> element in memory (not yet on the page).
spanEl.style.left = xPos + "px";
spanEl.style.top = yPos + "px";
That way the element goes exactly where the mouse is. Using xPos for both means it will move diagonally.
bodyE1.appendChild(spanEl); This takes the <span> you created and actually puts it into the <body> so it becomes visible.
console.log(event.offsetY); Prints the Y position to the browser console (useful for testing).
*/
