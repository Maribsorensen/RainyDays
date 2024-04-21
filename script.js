// https://api.noroff.dev/api/v1/rainy-days

async function fetchJackets() {
  // showLoadingIndicator();
  const response = await fetch("https://api.noroff.dev/api/v1/rainy-days")
  const data = await response.json();
  return data;
}


function showLoadingIndicator() {
  const jacketContainer = document.getElementById("product-cards-wrapper");
  jacketContainer.innerHTML = "<p>Finding Jackets</p>"
}




async function displayJackets() {
  const data = await fetchJackets();
  const jacketContainer = document.getElementById("product-cards-wrapper");
  jacketContainer.innerHTML = "";

  data.forEach((jacket) => {
    const jacketCard = document.createElement("div");
    jacketCard.className = "shop-page-boxes";
    jacketCard.addEventListener("click", () => {
      window.location.href = `product/index.html?id=${jacket.id}`;
    });
    const imageUrl = jacket.image;
    jacketCard.innerHTML = `
    <img class="shop-jacket-img" src="${imageUrl}" alt="test"/>
    <h2 class="jacket-info-1">${jacket.title}</h2>
    <p class="jacket-info-2">${jacket.price}</p>`;
    jacketContainer.appendChild(jacketCard);
  });

}
displayJackets();




