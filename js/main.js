const swiper = new Swiper('.swiper', {
  effect: 'cards',

  cardsEffect: {
    rotate: 0
  },
  mousewheel: {
    invert: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

function duplicateSlides(containerSelector, minSlides) {
  const container = document.querySelector(containerSelector);
  const slides = container.querySelectorAll('.swiper-slide');

  if (slides.length < minSlides) {
    for (let i = slides.length; i < minSlides; i++) {
      const clone = slides[i % slides.length].cloneNode(true);
      container.querySelector('.swiper-wrapper').appendChild(clone);
    }
  }
}

duplicateSlides('.swiperP-container', 4);

const swiperP = new Swiper('.swiperP-container', {
  parallax: true,
  centeredSlides: false,
  slidesPerView: 1.64,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: {
    invert: true
  }
});
const swiperLogos = new Swiper('.swiperLogos', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  autoplay: true
});

document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.menu').classList.add('menu-active');
  document.body.classList.add('lock-scroll');
});

document.querySelector('.menu__close').addEventListener('click', function () {
  document.querySelector('.menu').classList.remove('menu-active');
  document.body.classList.remove('lock-scroll');
});

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
