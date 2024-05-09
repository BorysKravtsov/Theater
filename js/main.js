const swiper = new Swiper('.swiper', {
    effect: 'cards',
    
    cardsEffect: {
        rotate: 0
    },
    mousewheel: {
        invert: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.add('menu-active');
});


document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('menu-active'); 
});
