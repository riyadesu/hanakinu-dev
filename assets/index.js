console.log('Hello from assets/index.js');

const footerShopLists = document.querySelectorAll('.bl_footerShop .js_shopList');

footerShopLists.forEach((footerShopList) => {
  footerShopList.addEventListener('click', (event) => {
    if (event.target.tagName === 'P' || event.target.closest('p')) {
      footerShopList.classList.toggle('isOpen');
    }
  });
});

const body = document.querySelector('body');
const hamburger = document.querySelector('.js_hamb');
const headerNav = document.querySelector('.bl_headerNav');
const hambClose = document.querySelector('.js_hambClose');

hamburger.addEventListener('click', () => {
  body.classList.toggle('isOpen');
  hamburger.classList.toggle('isOpen');
  headerNav.classList.toggle('isOpen');
  hambClose.classList.toggle('isOpen');
});

hambClose.addEventListener('click', () => {
  body.classList.toggle('isOpen');
  hamburger.classList.toggle('isOpen');
  headerNav.classList.toggle('isOpen');
  hambClose.classList.toggle('isOpen');
});

const topSwiperThumb = new Swiper('.bl_thumbnailSwiper', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  loop: true,
});

const topSwiper = new Swiper('.bl_topSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 44,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.bl_topSwiper .swiper-pagination',
  },
  thumbs: {
    swiper: topSwiperThumb,
  },
});
