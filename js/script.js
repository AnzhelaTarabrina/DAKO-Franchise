const portfolioFrchSlider  = document.querySelector(".portfolio-frch__slider");

if (portfolioFrchSlider) {
  const swiperPortfolioFrch = new Swiper('.portfolio-frch__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".portfolio-frch__pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      590: {
          slidesPerView: 1.5,
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      1060: {
          slidesPerView: 2.5,
          spaceBetween: 20
      },
      1350: {
          slidesPerView: 3,
          spaceBetween: 20
      }
  }
  });
}

