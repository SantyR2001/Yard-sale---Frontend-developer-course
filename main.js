// All element selectors
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector("#shoppingCart");
const orderContent = document.querySelector(".order-content");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const closeProductDetailIcon = document.querySelector(".product-detail-close");
const quantityBadge = document.querySelector("#quantityBadge");
const orderPrice = document.querySelector("#orderPrice");
const btnAddToCart = document.querySelector(".add-to-cart-btn");

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
const selectedProducts = [];
productList.push({
  id: 0,
  name: "Bike",
  price: 120,
  image: "./logos/pexels-photo-276517.jpeg",
  desc: "The best bike to ride mountains!",
});
productList.push({
  id: 1,
  name: "Display",
  price: 220,
  image:
    "https://fotografias.lasexta.com/clipping/cmsimages01/2021/08/04/F80CD976-6299-407D-AF0D-14F40A563A19/98.jpg?crop=1300,731,x0,y7&width=1900&height=1069&optimize=high&format=webply",
  desc: 'Display 4K 32"',
});
productList.push({
  id: 2,
  name: "Computer",
  price: 350,
  image:
    "https://www.abc.com.py/resizer/DtszGYx1Xlr_U9kZiTaRMit_FKs=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/ZSJZZWLOZNBQ3FAJ3S6X4I5RAY.jpg",
  desc: `CPU: Intel atom\n
GPU: RTX 3090 Ti`,
});
productList.push({
  id: 3,
  name: "Computer",
  price: 350,
  image:
    "https://www.abc.com.py/resizer/DtszGYx1Xlr_U9kZiTaRMit_FKs=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/ZSJZZWLOZNBQ3FAJ3S6X4I5RAY.jpg",
  desc: `CPU: Intel atom\n
    GPU: RTX 3090 Ti`,
});
productList.push({
  id: 4,
  name: "Bike",
  price: 120,
  image: "./logos/pexels-photo-276517.jpeg",
  desc: "The best bike to ride mountains!",
});
productList.push({
  id: 5,
  name: "Bike",
  price: 120,
  image: "./logos/pexels-photo-276517.jpeg",
  desc: "The best bike to ride mountains!",
});
productList.push({
  id: 6,
  name: "Display",
  price: 220,
  image:
    "https://fotografias.lasexta.com/clipping/cmsimages01/2021/08/04/F80CD976-6299-407D-AF0D-14F40A563A19/98.jpg?crop=1300,731,x0,y7&width=1900&height=1069&optimize=high&format=webply",
  desc: 'Display 4K 32"',
});
productList.push({
  id: 7,
  name: "Computer",
  price: 350,
  image:
    "https://www.abc.com.py/resizer/DtszGYx1Xlr_U9kZiTaRMit_FKs=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/ZSJZZWLOZNBQ3FAJ3S6X4I5RAY.jpg",
  desc: `CPU: Intel atom\n
    GPU: RTX 3090 Ti`,
});
productList.push({
  id: 8,
  name: "Bike",
  price: 120,
  image: "./logos/pexels-photo-276517.jpeg",
  desc: "The best bike to ride mountains!",
});
productList.push({
  id: 9,
  name: "Display",
  price: 220,
  image:
    "https://fotografias.lasexta.com/clipping/cmsimages01/2021/08/04/F80CD976-6299-407D-AF0D-14F40A563A19/98.jpg?crop=1300,731,x0,y7&width=1900&height=1069&optimize=high&format=webply",
  desc: 'Display 4K 32"',
});
productList.push({
  id: 10,
  name: "Computer",
  price: 350,
  image:
    "https://www.abc.com.py/resizer/DtszGYx1Xlr_U9kZiTaRMit_FKs=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/ZSJZZWLOZNBQ3FAJ3S6X4I5RAY.jpg",
  desc: `CPU: Intel atom\n
    GPU: RTX 3090 Ti`,
});

for (let product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.classList.add("product-img");
  productImg.addEventListener("click", (e) => {
    toggleShowElements(e.target.classList[0]);
    setProductDetail(product);
  });

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
  productImgCart.addEventListener("click", (e) => {
    e.preventDefault();
    selectedProducts.push(product);
    addToCart(product);
  });

  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.append(productPrice, productName);
  productInfo.append(productInfoDiv, productInfoFigure);
  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
}

/* Add products to order content */

// Calculate order quantity
function quantityOfProducts() {
  let quantity = selectedProducts.length;
  quantityBadge.innerText = quantity;
}
quantityOfProducts();

// Calculate order amount
var amount = 0;
orderPrice.innerText = `$${amount}`;

function totalAmountSum(price) {
  amount = amount + price;
  orderPrice.innerText = `$${amount}`;
}

function totalAmountRes(price) {
  amount = amount - price;
  orderPrice.innerText = `$${amount}`;
}

function addToCart(product) {
  totalAmountSum(product.price);
  const productToCart = document.createElement("div");
  productToCart.classList.add(`shopping-cart`);
  productToCart.setAttribute("id", `shopping-cart${product.id}`);

  const elementImg = document.createElement("img");
  elementImg.setAttribute("src", `${product.image}`);

  const figure = document.createElement("figure");
  figure.appendChild(elementImg);

  const pName = document.createElement("p");
  pName.innerText = product.name;

  const pPrice = document.createElement("p");
  pPrice.innerText = `$${product.price}`;

  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "./iconos/icon_close.png");
  imgClose.classList.add("image-close");
  imgClose.addEventListener("click", (e) => {
    removeOfCart(product.id);
    totalAmountRes(product.price);
  });

  productToCart.append(figure, pName, pPrice, imgClose);

  orderContent.append(productToCart);
  quantityOfProducts();
}

function removeOfCart(id) {
  element = document.querySelector(`#shopping-cart${id}`);
  element.remove();
  selectedProducts.pop();
  quantityOfProducts();
}

{
  /* <div class="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="bike">
                </figure>
                <p>Bike</p>
                <p>$30,00</p>
                <img src="./iconos/icon_close.png" alt="close" />
</div> */
}

/* Product Detail in aside */

function setProductDetail(product) {
  let img = document.querySelector("#productImg");
  let name = document.querySelector("#productName");
  let price = document.querySelector("#productPrice");
  let desc = document.querySelector("#productDesc");

  img.setAttribute("src", product.image);
  name.innerText = product.name;
  price.innerText = `$${product.price}`;
  desc.innerText = product.desc;

  btnAddToCart.addEventListener((e) => {
    e.preventDefault();
    addToCart(product);
    selectedProducts.push(product);
  });
}
