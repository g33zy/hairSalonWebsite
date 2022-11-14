let burgerButton = document.querySelector(".hamburger")
//assign var burgerButton value of button element w/ class hamburger
let dropDown = document.querySelector("nav")
//assign var nav 
const navDrop = () => {
    //print value of button in var to screen
    console.log(burgerButton)
    burgerButton.classList.toggle('x-style');
    //print value of nav in var to screen
    console.log(dropDown)
    dropDown.classList.toggle('nav-style')
}

