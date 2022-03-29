"use strict";
let images = ["1.jpg", "2.jpg", "3.jpg"];

window.addEventListener("load", function() {
    let gallery = document.querySelector(".gallery");
    let selected = document.querySelector(".selected");
    
    selected.insertAdjacentHTML(
        "beforeend",
        `<img alt="pic" id="selected__img" src="./assets/${images[0]}">`
    );
    
    let selectedImg = document.getElementById("selected__img");
    
    images.forEach((src, i) => {
        gallery.insertAdjacentHTML(
            "beforeend",
            `<img alt="${i}" class="gallery__img" src="./assets/${src}">`
        );
        
        gallery.children[i].addEventListener("click", function() {
            selectedImg.src = this.src;
        });
    });
});
