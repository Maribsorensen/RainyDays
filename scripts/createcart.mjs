import { getCartSubtotal } from "./getCartSubtotal.mjs";


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
  jacketPrice.textContent = "€" + jacket.price;

  const removeItemContainer = document.createElement("div");
  removeItemContainer.className = "cart-remove";

  const removeItemIcon = document.createElement("i");
  removeItemIcon.className = "fa-regular fa-trash-can";
  removeItemIcon.setAttribute("aria-label", "Remove Item");
  removeItemContainer.appendChild(removeItemIcon);

  imageContainer.appendChild(jacketImg);
  cartInformation.appendChild(jacketTitle);
  cartInformation.appendChild(jacketPrice);
  cartInformation.appendChild(removeItemContainer);
  cartMainBorder.appendChild(imageContainer);
  cartMainBorder.appendChild(cartInformation);

  removeItemIcon.addEventListener("click", () => {
    removeFromCart(jacket);
    cartMainBorder.remove();
  });

  return cartMainBorder;
}

function createCartSubtotalBorder(jackets) {
  const subtotalBorder = document.createElement("div");
  subtotalBorder.className = "cart-border-subtotal"
  const subtotal = document.createElement("h4");
  subtotal.className = "subtotal";
  subtotal.textContent = "Subtotal";

  const subtotalPrice = document.createElement("h5");
  subtotalPrice.className = "subtotal-price";
  subtotalPrice.textContent = "€" + getCartSubtotal();

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

export function removeFromCart(jacketToRemove) {
  let cartJackets = JSON.parse(localStorage.getItem("cart")) || [];
  cartJackets = cartJackets.filter(jacket => jacket.id !== jacketToRemove.id);
  localStorage.setItem("cart", JSON.stringify(cartJackets));

  updateSubtotal();
}

function updateSubtotal() {
  const subtotalPrice = document.querySelector(".subtotal-price");
  if (subtotalPrice) {
    subtotalPrice.textContent = getCartSubtotal();
  }
}

function removeAllItemsFromLocalStorage() {
  localStorage.clear();
}

document.addEventListener("DOMContentLoaded", function () {
  const confirmPurchaseButton = document.querySelector(".form-button");

  if (confirmPurchaseButton) {
    confirmPurchaseButton.addEventListener("click", function () {
      removeAllItemsFromLocalStorage();
    });
  }
});

generateCartHTML();
