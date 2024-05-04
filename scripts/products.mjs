import { fetchJackets } from "./utils/fetch.mjs";
import { addToCart } from "./addToCart.mjs";
import { showPopup } from "./shared/popup.mjs";
import { initializeHamburgerMenu } from "./shared/hamburgerMenu.mjs";



export async function displayJackets() {
  const data = await fetchJackets();
  generateJackets(data);
}


async function filterJacketsByGender(gender) {
  const data = await fetchJackets();
  const filteredData = data.filter((jacket) => jacket.gender === gender);
  generateJackets(filteredData);
}

// Generates the create functions per jacket
function generateJackets(jacketsData) {
  const jacketContainer = document.getElementById("product-cards-wrapper");
  jacketContainer.textContent = "";

  jacketsData.forEach((jacket) => {
    const jacketCard = createJacketCard(jacket);
    jacketContainer.appendChild(jacketCard);
  });
}

// Creates the jacket card, with image, title and price, as well as an add to cart button
function createJacketCard(jacket) {
  const jacketCard = document.createElement("div");
  jacketCard.className = "shop-page-boxes";

  const anchorTag = document.createElement("a");
  anchorTag.href = `product/index.html?id=${jacket.id}`;
  anchorTag.className = "jacket-page-link";

  const imageUrl = jacket.image;
  const jacketImg = document.createElement("img");
  jacketImg.className = "shop-jacket-img";
  jacketImg.src = imageUrl;
  jacketImg.alt = "test";


  const jacketTitle = document.createElement("h2");
  jacketTitle.className = "jacket-info-1";
  jacketTitle.textContent = jacket.title;


  const jacketPrice = document.createElement("p");
  jacketPrice.className = "jacket-info-2";
  jacketPrice.textContent = "€" + jacket.price;

  // Add to cart button, with event listener and popup to give user information
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "add-button";
  addToCartButton.textContent = "Add to cart";
  addToCartButton.addEventListener("click", () => {
    addToCart(jacket);
    showPopup("Jacket added to cart!");
  })

  anchorTag.append(jacketImg, jacketTitle, jacketPrice);
  jacketCard.append(anchorTag, addToCartButton);
  return jacketCard;
}

// Filter that checks what chosen in the drop down menu
const genderFilterDropdown = document.getElementById("genderFilter");
genderFilterDropdown.addEventListener("change", function () {
  const selectedGender = this.value;
  if (selectedGender === "all") {
    displayJackets();
  } else {
    filterJacketsByGender(selectedGender);
  }
});

displayJackets();
initializeHamburgerMenu();
