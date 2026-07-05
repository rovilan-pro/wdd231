// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Navigation
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {

    navigation.classList.toggle("open");
    menu.classList.toggle("open");

    menu.innerHTML = menu.classList.contains("open") ? "&times;" : "&#9776;";

});