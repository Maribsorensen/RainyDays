// https://cssloaders.github.io/

export function showLoadingIndicator() {
  const loadingIndicators = document.querySelectorAll('.loading-indicator');
  loadingIndicators.forEach(indicator => {
    const loader = document.createElement('span');
    loader.classList.add('loader');
    indicator.appendChild(loader);
    setTimeout(() => {
      loader.remove(); // Remove the loader after a delay
    }, 10000);
  });
}

export function hideLoadingIndicator() {
  const loadingIndicators = document.querySelectorAll('.loading-indicator');
  loadingIndicators.forEach(indicator => {
    const loader = indicator.querySelector('.loader');
    if (loader) {
      loader.remove();
    }
  });
}