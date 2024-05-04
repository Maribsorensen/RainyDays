
export function updateCartCounter() {
  const cartCounter = document.querySelector(".cart-counter");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartCounter.textContent = cartItems.length;
}

updateCartCounter();
