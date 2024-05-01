import { fetchJackets } from "./utils/fetch.mjs";
// click button
// get cart from local storage
//  if it exists, return it
//  if not, create one and add item
// add to cart
//
export function addToCart(jacket) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}

function createCartMainBorder(jacket) {
  const cartMainBorder = document.createElement("div");
  cartMainBorder.className = "cart-border";

  const imageContainer = document.createElement("div");
  imageContainer.className = "cart-jacket-box";

  const jacketImg = document.createElement("img");
  jacketImg.className = "fridarunner-img";
  jacketImg.src = jacket.image;

  const cartInformation = document.createElement("div");
  cartInformation.className = "cart-info";

  const jacketTitle = document.createElement("h2");
  jacketTitle.className = "cart-content";
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("h3");
  jacketPrice.className = "cart-price";
  jacketPrice.textContent = jacket.price;

  imageContainer.appendChild(jacketImg);
  cartInformation.appendChild(jacketTitle);
  cartMainBorder.appendChild(imageContainer);
  cartMainBorder.appendChild(cartInformation);
  cartMainBorder.appendChild(jacketPrice);

  return cartMainBorder;
}

function createCartSubtotalBorder(jackets) {
  const subtotalBorder = document.createElement("div");

  const subtotal = document.createElement("h4");
  subtotal.className = "subtotal";
  subtotal.textContent = "Subtotal";

  const subtotalPrice = document.createElement("h5");
  subtotalPrice.className = "subtotal-price";
  subtotalPrice.textContent = "test";

  subtotalBorder.appendChild(subtotal);
  subtotalBorder.appendChild(subtotalPrice);

  return subtotalBorder;
}

export function generateCartHTML() {
  const jackets = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.querySelector(".cart-container");

  jackets.forEach(jacket => {
    const cartBorder = createCartMainBorder(jacket);
    cartContainer.appendChild(cartBorder);
  });

  const cartBorderSubtotal = createCartSubtotalBorder(jackets);
  cartContainer.appendChild(cartBorderSubtotal);
}

generateCartHTML();
