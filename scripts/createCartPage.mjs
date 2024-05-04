import { getCartSubtotal } from "./getCartSubtotal.mjs";
import { updateCartCounter } from "./shared/cartCounter.mjs";
import { initializeHamburgerMenu } from "./shared/hamburgerMenu.mjs";

// Create section that shows images, title, price and a remove icon, per jacket.
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
  cartInformation.append(jacketTitle, jacketPrice, removeItemContainer);
  cartMainBorder.append(imageContainer, cartInformation);

  removeItemIcon.addEventListener("click", () => {
    removeFromCart(jacket);
    cartMainBorder.remove();
  });

  return cartMainBorder;
}

// Creates the subtotal section showing total price of all jackets in the cart
function createCartSubtotalBorder(jackets) {
  const subtotalBorder = document.createElement("div");
  subtotalBorder.className = "cart-border-subtotal"
  const subtotal = document.createElement("h4");
  subtotal.className = "subtotal";
  subtotal.textContent = "Subtotal";

  const subtotalPrice = document.createElement("h5");
  subtotalPrice.className = "subtotal-price";
  subtotalPrice.textContent = "€" + getCartSubtotal();

  subtotalBorder.append(subtotal, subtotalPrice);

  return subtotalBorder;
}

// Generates the cart
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
  updateCartCounter();
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

// Empties the cart when confirm purchase button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const confirmPurchaseButton = document.querySelector(".form-button");

  if (confirmPurchaseButton) {
    confirmPurchaseButton.addEventListener("click", function () {
      removeAllItemsFromLocalStorage();
    });
  }
});

generateCartHTML();
initializeHamburgerMenu();