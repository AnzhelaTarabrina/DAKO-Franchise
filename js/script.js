// Слайдер portfolio-frch
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

// Попап Получить консультацию
const popupConsultationBtn = document.querySelector(".get-consultation__button");

if (popupConsultationBtn) {
  const popupConsultation = document.querySelector(".get-consultation__popup");
  const popupConsultationClose = document.querySelector(".get-consultation__popup-close");

  popupConsultationBtn.addEventListener("click", function (e) {
    popupConsultation.classList.add('get-consultation__popup--active');
    document.body.classList.add('popup-open');
  })
  popupConsultationClose.addEventListener("click", function (e) {
    popupConsultation.classList.remove('get-consultation__popup--active');
    document.body.classList.remove('popup-open');
  })
}

// Табы
const $btnsLists = document.querySelectorAll('.tabs-btns');
$btnsLists.forEach($btnsList => {
  const $btns = $btnsList.querySelectorAll('.tabs-btn');
  $btns.forEach(($btn, index) => {
    $btn.addEventListener('click', () => {
      const tabsName = $btnsList.dataset.tabsName;
      const $tabsList = document.querySelector(`.tabs-list[data-tabs-name="${tabsName}"]`);
      if (!$tabsList) {
        return;
      }

      const $selectedBtnLists = document.querySelectorAll(`.tabs-btns[data-tabs-name="${tabsName}`);
      $selectedBtnLists.forEach($seletedBtns => {
        const $oldBtn = $seletedBtns.querySelector('.tabs-btn--active');
        const $newBtn = $seletedBtns.querySelectorAll('.tabs-btn')[index];
        $oldBtn.classList.remove('tabs-btn--active');
        $newBtn.classList.add('tabs-btn--active');
      });

      const $oldItem = $tabsList.querySelector('.tabs-item--active');
      const $newItem = $tabsList.querySelectorAll('.tabs-item')[index];
      
      $oldItem?.classList.remove('tabs-item--active');
      $newItem.classList.add('tabs-item--active');
    });
  });
});