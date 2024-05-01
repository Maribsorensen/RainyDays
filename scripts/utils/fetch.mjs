import { RAINY_DAYS_API_URL } from "../shared/constants.mjs";
import { showLoadingIndicator, hideLoadingIndicator } from "../loadingindicator.mjs";

export async function fetchJackets() {
  showLoadingIndicator();
  try {
    const response = await fetch(RAINY_DAYS_API_URL);
    const data = await response.json();
    hideLoadingIndicator();
    return data;
  } catch (error) {
    console.log(error)
    hideLoadingIndicator();
  }
}