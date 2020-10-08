'use strict';

(function () {
  var body = document.querySelector('body');
  var navigationToggler = document.querySelector('.navigation__toggler');
  var navigation = document.querySelector('.navigation');
  var buttonSlider = document.querySelectorAll('.slider__button');
  var itemSlider = document.querySelectorAll('.review-card__item');
  var scroll = document.querySelector('.scroll');

  function setTogglerMenuHandler(element, popup, className) {
    element.addEventListener('click', function () {
      popup.classList.toggle(className);
    });
  }

  function showButtonScrollHandler() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 1043) {
        scroll.classList.remove('scroll--close');
      }

      if (window.scrollY < 1043) {
        scroll.classList.add('scroll--close');
      }
    });
  }

  function scrollTopWindowHandler() {
    scroll.addEventListener('click', function () {
      window.scrollTo(0,0);
    });
  }

  function controlButtonSlider() {
    buttonSlider.forEach(function (item) {
      item.addEventListener('click', function () {
        var buttonSliderActive = document.querySelectorAll('.slider__button--active');
        buttonSliderActive.forEach(function (active) {
          active.classList.remove('slider__button--active');
        });
        item.classList.toggle('slider__button--active');
      });
    });
  }

  function showReviews() {
    var itemReviewsOne = document.querySelector('.review-card__item--one');
    var itemReviewsTwo = document.querySelector('.review-card__item--two');
    var itemReviewsThree = document.querySelector('.review-card__item--three');
    var widthItem = itemReviewsOne.offsetWidth + 34;
    var buttonSlider = document.querySelectorAll('.slider__button');
    for (var i = 0; i < buttonSlider.length; i++) {
      buttonSlider[0].addEventListener('click', function () {
        itemReviewsOne.style.left = 0 + 'px';
        itemReviewsTwo.style.left = widthItem  + 'px';
        itemReviewsThree.style.left = widthItem * 2 + 'px';
      });

      buttonSlider[1].addEventListener('click', function () {
        itemReviewsOne.style.left = (0 - widthItem) + 'px';
        itemReviewsTwo.style.left = 0 + 'px';
        itemReviewsThree.style.left = widthItem + 'px';
      });

      buttonSlider[2].addEventListener('click', function () {
        itemReviewsOne.style.left = (0 - widthItem) + 'px';
        itemReviewsTwo.style.left = (0 - widthItem) + 'px';
        itemReviewsThree.style.left = 0 + 'px';
      });
    }
  }

  setTogglerMenuHandler(navigationToggler, navigation, 'navigation--close');
  showButtonScrollHandler();
  scrollTopWindowHandler();
  controlButtonSlider();
  showReviews();
})();
