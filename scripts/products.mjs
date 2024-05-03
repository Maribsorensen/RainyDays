// https://api.noroff.dev/api/v1/rainy-days
import { fetchJackets } from "./utils/fetch.mjs";


export async function displayJackets() {
  const data = await fetchJackets();
  renderJackets(data);
}

async function filterJacketsByGender(gender) {
  const data = await fetchJackets();
  const filteredData = data.filter((jacket) => jacket.gender === gender);
  renderJackets(filteredData);
}

function renderJackets(jacketsData) {
  const jacketContainer = document.getElementById("product-cards-wrapper");
  jacketContainer.textContent = "";

  jacketsData.forEach((jacket) => {
    const jacketCard = createJacketCard(jacket);
    jacketContainer.appendChild(jacketCard);
  });
}

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
  anchorTag.appendChild(jacketImg);

  const jacketTitle = document.createElement("h2");
  jacketTitle.className = "jacket-info-1";
  jacketTitle.textContent = jacket.title;
  anchorTag.appendChild(jacketTitle);

  const jacketPrice = document.createElement("p");
  jacketPrice.className = "jacket-info-2";
  jacketPrice.textContent = jacket.price;
  anchorTag.appendChild(jacketPrice);

  jacketCard.appendChild(anchorTag);

  return jacketCard;
}

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