// click button
// get cart local storage
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
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// duplicated code can be made into a function and called into the function above

// export function getCartTotal() {
//   let totalCost = 0;
//   const cart = localStorage.getItem("cart");
//   if (cart !== null) {
//     const newCart = JSON.parse(cart);
//     for (let i = 0; i < newCart.length; i++) {
//       totalCost = totalCost + newCart[i].price;
//     }
//   }
//   return
// }