import { addToCart } from "./addToCart.mjs";
import { showPopup } from "./shared/popup.mjs";
import { fetchJackets } from "./utils/fetch.mjs";

function getJacketId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function fetchJacketInformation() {
  const jacketId = getJacketId();
  if (!jacketId) {
    return;
  }

  try {
    const jackets = await fetchJackets();
    const specificJacket = jackets.find(jacket => jacket.id === jacketId);
    return specificJacket;
  } catch (error) {
    console.error("Error fetching jacket information:", error);
    return null;
  }
}

function createJacketHeaderSection(jacket) {
  const jacketTopSection = document.createElement("section");

  const jacketTitle = document.createElement("h1");
  jacketTitle.textContent = jacket.title;
  jacketTopSection.appendChild(jacketTitle);

  const jacketGender = document.createElement("h2");
  jacketGender.classList.add("gender");
  jacketGender.textContent = jacket.gender;
  jacketTopSection.appendChild(jacketGender);

  const jacketPrice = document.createElement("h3");
  jacketPrice.classList.add("price");
  jacketPrice.textContent = jacket.price;
  jacketTopSection.appendChild(jacketPrice);

  return jacketTopSection;
}

function createJacketImageAndInformationSection(jacket) {
  const informationSection = document.createElement("section");
  informationSection.classList.add("fridarunner-box");

  const jacketImageBox = document.createElement("div");
  jacketImageBox.classList.add("fridarunner-img-box");
  const jacketImage = document.createElement("img");
  jacketImage.classList.add("fridarunner-img");
  jacketImage.src = jacket.image;
  jacketImageBox.appendChild(jacketImage);

  const jacketInformationBox = document.createElement("div");
  jacketInformationBox.classList.add("fridarunner-information-box");

  const jacketInformationHeaderAbout = document.createElement("h2");
  jacketInformationHeaderAbout.classList.add("fr-headers");
  jacketInformationHeaderAbout.textContent = "About the jacket";

  const jacketInformationParagraph = document.createElement("p");
  jacketInformationParagraph.classList.add("fridarunner-information");
  jacketInformationParagraph.textContent = jacket.description;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-button");
  addToCartButton.textContent = "Add to cart";
  addToCartButton.addEventListener("click", () => {
    addToCart(jacket);
    showPopup("Jacket added to cart!");
  })

  jacketInformationBox.append(jacketInformationHeaderAbout, jacketInformationParagraph, addToCartButton);
  informationSection.append(jacketImageBox, jacketInformationBox);

  return informationSection;
}

export async function generateJacketHTML() {
  const jacket = await fetchJacketInformation();
  const jacketHeaderSection = createJacketHeaderSection(jacket);
  const jacketImageAndInformationSection = createJacketImageAndInformationSection(jacket);

  document.querySelector("main").append(jacketHeaderSection, jacketImageAndInformationSection);
  document.querySelector("main").appendChild(jacketImageAndInformationSection);

}




generateJacketHTML();
