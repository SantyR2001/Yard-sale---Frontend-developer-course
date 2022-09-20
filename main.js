const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".inactive");

navEmail.addEventListener("click", toggleShow);

console.log(desktopMenu);

function toggleShow() {
  desktopMenu.classList.toggle("inactive");
}
