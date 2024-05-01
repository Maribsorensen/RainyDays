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
//

// function createCartMainBorder() {
//   const cartMainBorder = document.createElement("div");
//   cartMainBorder.className = "cart-border";

//   const imageContainer = document.createElement("div");
//   imageContainer.className = "cart-jacket-box";
//   const imageURL =
//   // image url ?? hvor hentes den fra?

//   const jacketImg = document.createElement("img");
//   jacketImg.className = "fridarunner-img";
//   jacketImg.src = imageURL;


//   const cartInformation = document.createElement("div");
//   cartInformation.className = "cart-info";

//   const jacketTitle = document.createElement("h2");
//   jacketTitle.className = "cart-content";
//   jacketTitle.textContent = "title";
//   // hente tittel fra api

//   const jacketSize = document.createElement("h3");
//   jacketSize.className = "cart-content";
//   jacketTitle.textContent = "Size: ${.size}";
//   // hente size fra api

//   // const qty =

//   const jacketPrice = document.createElement("h3");
//   jacketPrice.className = "cart-price";
//   jacketPrice.textContent = "price"
//   // hente price fra api

//   // const removeJacket =


//   imageContainer.appendChild(jacketImg);
//   cartInformation.append(jacketTitle, jacketSize)
//   cartMainBorder.append(imageContainer, cartInformation, qty, jacketPrice, removeJacket);
// }


// function createCartSubtotalBorder {
//   const subtotalBorder = document.createElement("div");

//   const subtotal = document.createElement("h4");
//   subtotal.className = "subtotal";
//   subtotal.textContent = "Subtotal";

//   const subtotalPrice = document.createElement("h5");
//   subtotal.className = "subtotal-price";
//   subtotal.textContent = "test";
//   // textcontent her må inneholde en function for å få totalpris på alle jakkene

//   subtotalBorder.append(subtotal, subtotalPrice);
// }


// async function generateCartHTML() {
//   const jacket = await fetchJackets();
//   // må lages egen fetch ting for å få riktig ting fra local storage
//   const cartBorder = createCartMainBorder(jacket);
//   const cartBorderSubtotal = createCartSubtotalBorder(jacket);

//   document.querySelector(".cart-container").append(cartBorder, cartBorderSubtotal);
// }

// generateCartHTML();