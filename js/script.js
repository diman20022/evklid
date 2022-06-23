// slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  speed: 300,
  a11y: {
    paginationBulletMessage: "Слайд {{index}}"
  },
});

// tabs
const tabsBtn = document.querySelectorAll('.how__list-btn');
const tabsItem = document.querySelectorAll('.how__item');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('how__list-btn--active'));
    e.currentTarget.classList.add('how__list-btn--active');

    tabsItem.forEach(el => el.classList.remove('how__item--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('how__item--active');
  });
});

// accordion
$(".accordion") .accordion ({
  heightStyle: "content"
});

// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const close = document.querySelector('.nav__close');

burger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  menu.classList.add('header__nav--visible');
});

close.addEventListener('click', () => {
  document.body.style.overflow = 'initial';
  menu.classList.remove('header__nav--visible');
});

//search
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form-show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form-show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
