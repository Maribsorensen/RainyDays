

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

  const quantityContainer = document.createElement("div");
  quantityContainer.className = "cart-qty";

  const minusButton = document.createElement("button");
  minusButton.textContent = "-";
  quantityContainer.appendChild(minusButton);

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = "1";
  quantityInput.min = "1";
  quantityInput.max = "10";
  quantityContainer.appendChild(quantityInput);

  const plusButton = document.createElement("button");
  plusButton.textContent = "+";
  quantityContainer.appendChild(plusButton);

  const jacketPrice = document.createElement("h3");
  jacketPrice.className = "cart-price";
  jacketPrice.textContent = jacket.price;

  const removeItemContainer = document.createElement("div");
  removeItemContainer.className = "cart-remove";

  const removeItemIcon = document.createElement("i");
  removeItemIcon.className = "fa-regular fa-trash-can";
  removeItemIcon.setAttribute("aria-label", "Remove Item");
  removeItemContainer.appendChild(removeItemIcon);

  imageContainer.appendChild(jacketImg);
  cartInformation.appendChild(jacketTitle);
  cartInformation.appendChild(quantityContainer);
  cartInformation.appendChild(jacketPrice);
  cartInformation.appendChild(removeItemContainer);
  cartMainBorder.appendChild(imageContainer);
  cartMainBorder.appendChild(cartInformation);

  minusButton.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
      updateTotalPrice();
    }
  });

  plusButton.addEventListener("click", () => {
    if (parseInt(quantityInput.value) < 10) {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateTotalPrice();
    }
  });

  function updateTotalPrice() {
    const totalPrice = parseInt(jacket.price) * parseInt(quantityInput.value);
    jacketPrice.textContent = totalPrice.toFixed(2);
  }

  removeItemIcon.addEventListener("click", () => {
    removeFromCart(jacket);
    cartMainBorder.remove();
  });

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

export function removeFromCart(jacketToRemove) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems = cartItems.filter(jacket => jacket.id !== jacketToRemove.id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

generateCartHTML();
