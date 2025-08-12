

let title = document.querySelector("#title");

// console.log(title.innerHTML);
// console.log(typeof title.innerHTML);

const arrayOfTitle = [...title.innerHTML];
title.innerText = "";
console.log(arrayOfTitle);

arrayOfTitle.forEach((Char, index) => {
    const div = document.createElement("div");
    console.log(index[0])
    div.style.animationDelay = 0.5 + index / 10 + "s";
    div.innerText = Char;
    div.className = "anime-element";
    title.appendChile(div);
    setTimeout(() => {
        div.style.opacity = 1;
    }, 1600);
    
    console.log(div);
});
