console.log('Hello from assets/index.js');

const footerShopLists = document.querySelectorAll('.bl_footerShop .js_shopList');

footerShopLists.forEach((footerShopList) => {
  footerShopList.addEventListener('click', () => {
    footerShopList.classList.toggle('isOpen');
  });
});
