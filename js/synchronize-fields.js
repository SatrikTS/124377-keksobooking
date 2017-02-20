'use strict';

window.synchronizeFields = (function () {
  return function (firstElement, secondElement, firstArr, secondArr, propertyName) {
    var changeElement = function (event) {
      var target = event.target;
      var indexSelectValue;

      if (target === firstElement) {
        indexSelectValue = firstArr.indexOf(firstElement.value);
        secondElement[propertyName] = secondArr[indexSelectValue];
      } else {
        indexSelectValue = secondArr.indexOf(target[propertyName]);
        firstElement[propertyName] = firstArr[indexSelectValue];
      }
    };

    firstElement.addEventListener('change', changeElement);
    secondElement.addEventListener('change', changeElement);
  };
})();
