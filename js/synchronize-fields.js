'use strict';

window.synchronizeFields = function (firstElement, secondElement, firstArr, secondArr, propertyName) {
  var changeElement = function (event) {
    var target = event.target;
    var index;

    if (target === firstElement) {
      index = firstArr.indexOf(target[propertyName]);
      secondElement[propertyName] = secondArr[index];
    } else {
      index = secondArr.indexOf(target.value);
      firstElement[propertyName] = firstArr[index];
    }
  };

  firstElement.addEventListener('change', changeElement);
  secondElement.addEventListener('change', changeElement);
};
