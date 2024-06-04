// Basic cart functionality (without payment)
const cart = [];
const cartCountElement = document.querySelector('nav a:last-child');

function addToCart(productId)  {
  cart.push(productId);
  cartCountElement.textContent = `Cart (${cart.length})`;
//cartbutton
  const cartButton = document.querySelector('nav a:last-child');
cartButton.addEventListener('click', () => {
  cartButton.textContent = `Cart (${cart.length})`;
});

    // Add visual feedback for added item
    const addedItem = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    addedItem.classList.add('added-to-cart');
  }


function GoToOfficial() {
  window.location.href = "https://store.steampowered.com/app/504230/Celeste?ref=1816327172";
}


// New functionality for "Buy Now" buttons
function goToProductPage(productId) {
  // Replace "product.html" with the actual URL of your product page template
  window.location.href = `info.html?productId=${productId}`;
}
