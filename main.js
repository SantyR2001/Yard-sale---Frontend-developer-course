const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "./logos/pexels-photo-276517.jpeg",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "./logos/pexels-photo-276517.jpeg",
});
productList.push({
  name: "Computadora",
  price: 350,
  image: "./logos/pexels-photo-276517.jpeg",
});

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productInfoFigure = document.createElement("figure");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./iconos/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.append(productPrice, productName);
  productInfo.append(productInfoDiv, productInfoFigure);
  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
}
