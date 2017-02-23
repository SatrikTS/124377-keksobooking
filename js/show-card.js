'use strict';

window.showCard = (function () {
  return function () {
    var dialogWindow = document.querySelector('.dialog');
    dialogWindow.style.display = 'block';
  };
})();
