// All element selectors
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector("#shoppingCart");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const closeProductDetailIcon = document.querySelector(".product-detail-close");

//Event listeners
navEmail.addEventListener("click", (e) =>
  toggleShowElements(e.target.classList[0])
);
iconMenu.addEventListener("click", (e) =>
  toggleShowElements(e.target.classList[0])
);
cartMenu.addEventListener("click", (e) =>
  toggleShowElements(e.target.classList[0])
);
closeProductDetailIcon.addEventListener("click", (e) =>
  productDetail.classList.add("inactive")
);

//Select the element to show
function toggleShowElements(element) {
  let e;
  switch (element) {
    case "product-img":
      e = productDetail;
      break;
    case "navbar-email":
      e = desktopMenu;
      break;
    case "menu":
      e = mobileMenu;
      break;
    case "img-shopping-cart":
      e = shoppingCart;
      break;
    default:
      break;
  }
  toggleShow(e);
}

//Check if all elements are closed
function allElementsAreInactive() {
  if (
    shoppingCart.classList.contains("inactive") &&
    mobileMenu.classList.contains("inactive") &&
    desktopMenu.classList.contains("inactive") &&
    productDetail.classList.contains("inactive")
  ) {
    return true;
  } else {
    return false;
  }
}

function closeAllElements() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCart.classList.add("inactive");
  productDetail.classList.add("inactive");
}

//Shows the element we passed to it and closes the others if necessary
function toggleShow(e) {
  if (!e.classList.contains("inactive")) {
    e.classList.add("inactive");
    return;
  }
  if (!allElementsAreInactive()) {
    closeAllElements();
    e.classList.remove("inactive");
  } else {
    e.classList.toggle("inactive");
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
  productImg.classList.add("product-img");
  productImg.addEventListener("click", (e) =>
    toggleShowElements(e.target.classList[0])
  );

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-card-info");

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
