import { updateCartCounter } from "./shared/cartCounter.mjs";

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
  updateCartCounter();
}


