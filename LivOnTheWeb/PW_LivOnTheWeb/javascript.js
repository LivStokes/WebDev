// CONTACT BUTTON 
const btnEls = document.querySelector(".btn");

btnEls.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})

// PAGE PORTFOLIO
// BRIEF IMAGES

const images_DCGEl = document.querySelector(".images_DCG");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    images_DCGEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 3000);
}

updateGallery();



// let title = document.querySelector(".title");

// // console.log(title.innerHTML);
// // console.log(typeof title.innerHTML);

// const arrayOfTitle = [...title.innerHTML];
// title.innerText = "";
// console.log(arrayOfTitle);

// arrayOfTitle.forEach((Char, index) => {
//     const div = document.createElement("div");
//     console.log(index[0])
//     div.style.animationDelay = 0.5 + index / 10 + "s";
//     div.innerText = Char;
//     div.className = "anime-element";
//     title.appendChile(div);
//     setTimeout(() => {
//         div.style.opacity = 1;
//     }, 1600);
    
//     console.log(div);
// });
