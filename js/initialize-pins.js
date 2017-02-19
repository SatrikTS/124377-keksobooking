'use strict';

window.initializePins = (function () {
  return function () {
    var pinNodes = document.querySelectorAll('.pin');
    var closeDialog = document.querySelector('.dialog__close');
    var dialogWindow = document.querySelector('.dialog');
    var tokyoPinMap = document.querySelector('.tokyo__pin-map');
    var CODE_ENTER_KEY = 13;

    // Обработчик события по клику
    var clickHandler = function (event) {
      removeClassPinActive();
      var clickedElement;
      if (event.target.classList.contains('pin')) {
        clickedElement = event.target;
      } else if (!event.target.classList.contains('pin')) {
        clickedElement = event.target.parentNode;
      }
      clickedElement.classList.add('pin--active');
      clickedElement.setAttribute('aria-pressed', 'true');
      dialogWindow.style.display = 'block';
    };
    tokyoPinMap.addEventListener('click', clickHandler, true);

    // Обработчик события по клавиатуре
    var keydownHandler = function (event) {
      if (event.keyCode === CODE_ENTER_KEY) {
        removeClassPinActive();
        var clickedElement = event.target;
        clickedElement.classList.add('pin--active');
        clickedElement.setAttribute('aria-pressed', 'true');
        dialogWindow.style.display = 'block';
      }
    };
    tokyoPinMap.addEventListener('keydown', keydownHandler, true);

    // Скрытие диалогового окна и удаление класса у метки
    closeDialog.addEventListener('click', function () {
      dialogWindow.style.display = 'none';
      removeClassPinActive();
    });

    // функция удаления активного класса у обьектов с классом pin
    var removeClassPinActive = function () {
      for (var j = 0; j < pinNodes.length; j++) {
        pinNodes[j].classList.remove('pin--active');
        pinNodes[j].setAttribute('aria-pressed', 'false');
      }
    };
    // Назначение атрибутов элементам на карте
    for (var i = 0; i < pinNodes.length; i++) {
      var element = pinNodes[i];
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '1');
      if (element.classList.contains('pin--active')) {
        element.setAttribute('aria-pressed', 'true');
      } else {
        element.setAttribute('aria-pressed', 'false');
      }
    }
  }();
})();
