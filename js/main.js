const dropdownButton = document.querySelector("#dropdown__button");
const header = document.querySelector("header");
const list = document.querySelector("ul");
const logo = document.querySelector("#logo");
const returnButton = document.querySelector("#return__btn");
const sectionSecond = document.querySelector("#section__2nd");
const sectionThird = document.querySelector("#section__3rd");
const mainSections = document.querySelector("#main__sections");
const footer = document.querySelector("footer");

dropdownButton.addEventListener("click", (e)=>{
    dropdownButton.classList.toggle("pressed");
    list.classList.toggle("hidden");
    list.classList.toggle("background");
})

middleObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if (entry.intersectionRatio > 0) {
            returnButton.classList.add("return__anim");
        } else {
            returnButton.classList.remove("return__anim");
            returnButton.style.transition = "300ms";
        }
    })
})

footerObserver = new IntersectionObserver((e)=>{
    e.forEach(entry =>{
        if (entry.intersectionRatio > 0) {
            returnButton.classList.add("return__absolute");
            returnButton.style.transition = "none";
        } else {
            returnButton.classList.remove("return__absolute");
        }
    })
})

middleObserver.observe(mainSections);
footerObserver.observe(footer);