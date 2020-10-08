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


  var width = itemSlider.offsetWidth; // ширина картинки
  var count = 1; // видимое количество изображений

  var list = document.querySelector('.review-card');
  var wrap = document.querySelector('.reviews');
  var position = 0; // положение ленты прокрутки

  function scrollLeft() {
    wrap.querySelector('.slider__button--prev').addEventListener('click', function() {
      position += width * count;
      position = Math.min(position, 0);
      itemSlider.style.marginLeft = position + 'px';
    });
  }

  function scrollRight() {
    wrap.querySelector('.slider__button--next').addEventListener('click', function() {
      position -= width * count;
      position = Math.max(position, -width * (itemSlider.length - count));
      itemSlider.style.marginLeft = position + 'px';
    });
  }

  setTogglerMenuHandler(navigationToggler, navigation, 'navigation--close');
  showButtonScrollHandler();
  scrollTopWindowHandler();
  controlButtonSlider();
  scrollLeft();
  scrollRight();
})();
