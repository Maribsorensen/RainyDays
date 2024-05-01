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


