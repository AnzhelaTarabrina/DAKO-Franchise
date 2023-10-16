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

// Actions (делегирование события click)
document.addEventListener("click", documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('js-open-popup-agreement')) {
      document.querySelector('.popup-agreement').classList.toggle('popup-agreement--visible');
      e.preventDefault();
    } else if (targetElement.classList.contains('popup-agreement') && document.querySelector('.popup-agreement.popup-agreement--visible')) {
      document.querySelector('.popup-agreement').classList.remove('popup-agreement--visible');
    }
    if (targetElement.classList.contains('popup__close')) {
      document.querySelector('.popup-agreement').classList.remove('popup-agreement--visible');
    } 
}

// popup-main
let closeTimer;
const $popups = document.querySelectorAll('.popup-main');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      close($popup);
    }

    if (e.target.classList.contains('popup-main__btn')) {
      close($popup);
    }

    if (e.target.classList.contains('js-close-popup-main')) {
      close($popup);
    }
  });
});

const $openBtns = document.querySelectorAll('.js-open-popup-main');
$openBtns.forEach($btn => {
  const name = $btn.dataset.popupName;
  $btn.addEventListener('click', () => {
    const $popup = document.querySelector(`.popup-main[data-popup-name="${name}"]`);
    open($popup);
  });
});

function open($popup) {
  $popup?.classList.add('popup-main--show');
  document.body.classList.add('popup-lock');

  const delay = +$popup.dataset.closeDelay;
  if (delay) {
    setTimeout(() => close($popup), delay);
  }
}

function close($popup) {
  $popup?.classList.remove('popup-main--show');
  document.body.classList.remove('popup-lock');
  clearInterval(closeTimer);
}