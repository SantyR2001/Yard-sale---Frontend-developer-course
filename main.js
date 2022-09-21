const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cartMenu = document.querySelector(".navbar-shopping-cart");

navEmail.addEventListener("click", toggleDesktopShow);
iconMenu.addEventListener("click", toggleMobileShow);
cartMenu.addEventListener("click", toggleCartShow);

function toggleDesktopShow() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (isAsideClosed) {
    desktopMenu.classList.toggle("inactive");
    return;
  } else {
    aside.classList.toggle("inactive");
    desktopMenu.classList.toggle("inactive");
  }
}

function toggleCartShow() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  //if mobile menu and desktop menu are closed, only show the aside. else toggle elements
  if (isMobileMenuClosed && isDesktopMenuClosed) {
    aside.classList.toggle("inactive");
    return;
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
  }
}

function toggleMobileShow() {
  const isAsideClosed = aside.classList.contains("inactive");

  //if aside is closed, only show the aside. else toggle both elements
  if (isAsideClosed) {
    mobileMenu.classList.toggle("inactive");
    return;
  } else {
    aside.classList.toggle("inactive");
    mobileMenu.classList.toggle("inactive");
  }
}
