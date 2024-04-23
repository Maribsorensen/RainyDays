function getJacketId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

async function fetchJacketInformation() {
  // showLoadingIndicator();
  const jacketId = getJacketId();
  if (!jacketId) {
    return;
  }
  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
  const jacketInformation = response.json();
  return jacketInformation;
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
  jacketInformationBox.appendChild(jacketInformationHeaderAbout);

  const jacketInformationParagraph = document.createElement("p");
  jacketInformationParagraph.classList.add("fridarunner-information");
  jacketInformationParagraph.textContent = jacket.description;
  jacketInformationBox.appendChild(jacketInformationParagraph);

  informationSection.appendChild(jacketImageBox);
  informationSection.appendChild(jacketInformationBox);

  return informationSection;
}

async function generateJacketHTML() {
  const jacket = await fetchJacketInformation();
  const jacketHeaderSection = createJacketHeaderSection(jacket);
  const jacketImageAndInformationSection = createJacketImageAndInformationSection(jacket);

  document.querySelector("main").appendChild(jacketHeaderSection);
  document.querySelector("main").appendChild(jacketImageAndInformationSection);
}



generateJacketHTML();

{/* <button class="add-button">Add to cart</button> */ }