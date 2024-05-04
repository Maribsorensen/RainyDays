import { RAINY_DAYS_API_URL } from "../shared/constants.mjs";
import { showLoadingIndicator, hideLoadingIndicator } from "../shared/createLoadingIndicator.mjs";

export async function fetchJackets() {
  try {
    const response = await fetch(RAINY_DAYS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch jackets. Please try again later.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Something went wrong, please try again later :(";
    errorMessage.className = "error-msg";
    const contentSection = document.getElementById("product-cards-wrapper");
    contentSection.appendChild(errorMessage);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showLoadingIndicator();
  fetchJackets().finally(() => hideLoadingIndicator());
});