/*allows for the lines in the menu icon to move on click*/
let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");

}