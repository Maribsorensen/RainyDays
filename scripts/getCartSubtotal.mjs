export function getCartSubtotal() {
  let subtotal = 0;
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      subtotal = subtotal + parseFloat(newCart[i].price);
    }
  }
  return subtotal.toFixed(2);
}