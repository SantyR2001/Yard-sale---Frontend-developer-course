const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", toggleDesktopShow);
iconMenu.addEventListener("click", toggleMobileShow);

function toggleDesktopShow() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileShow() {
  mobileMenu.classList.toggle("inactive");
}
