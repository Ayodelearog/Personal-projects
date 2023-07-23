"use strict"

const shoeElement = document.querySelector("#shoe1");

const shoeBtns = document.querySelectorAll(".shoe-btn");
const shoeBtnContainer = document.querySelector(".shoe-btns");


shoeBtns.forEach(shoeBtn => { 
    // console.log(shoeBtn)
    shoeBtn.addEventListener("click", () => {
        const currentlySelectedElem = document.querySelector(".shoe-btn.active");

        currentlySelectedElem && currentlySelectedElem.classList.remove("active");
        shoeBtn.classList.add("active");
        
        shoeElement.classList.add("shoeAnim");

        console.log(shoeBtn);
    })
})

