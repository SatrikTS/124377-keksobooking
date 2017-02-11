'use strict';

/*
synchronize-fields.js — модуль, который экспортирует в глобальную область видимости функцию synchronizeFields.
Функция принимает на вход пять параметров: в первых двух параметрах передаются DOM-элементы синхронизируемых полей.
Следующие два параметра представляют собой два массива, которые содержат синхронизируемые значения.

Например, если при выборе в первом поле значения с value а, во втором должно выбираться значение b (и наоборот),
то массивы должны выглядеть как ['a'] и ['b'].
Последний параметр содержит строку, с названием свойства второго объекта,
которое нужно изменять при изменении первого (например, 'max' или 'value').

Значения в массивах, которые передаются в функцию должны быть явно заданы в JS,
а не посчитаны автоматически. Возьмите в качестве значений массивов те value,
которые вы поставили для соответствующих записей в полях option в предыдущих заданиях.
*/

window.synchronizeFields = function (firstDOMelement, secondDOMelement, arr1, arr2, value) {
  secondDOMelement.value = firstDOMelement.value;
  firstDOMelement.addEventListener('change', function (event) {
    secondDOMelement[value] = arr2[arr1.indexOf(firstDOMelement.value)];
  });
};

var guestArray = ['3guest', 'noguest'];
var roomArray = ['1room', '2room', '100room'];
var timeArray = ['twelve', 'thirteen', 'fourteen'];

var timeSelect = document.querySelector('#time');
var timeoutSelect = document.querySelector('#timeout');
window.synchronizeFields(timeoutSelect, timeSelect, timeArray, timeArray, 'value');
window.synchronizeFields(timeSelect, timeoutSelect, timeArray, timeArray, 'value');

var countRoom = document.querySelector('#room_number');
var capacityGuest = document.querySelector('#capacity');
window.synchronizeFields(countRoom, capacityGuest, guestArray, roomArray, 'value');
window.synchronizeFields(capacityGuest, countRoom, guestArray, roomArray, 'value');

/*
// Синхронизация по количетсву метс для гостей
var countRoom = document.querySelector('#room_number');
var capacityGuest = document.querySelector('#capacity');

capacityGuest.value = 'noguest';
countRoom.addEventListener('change', function (event) {
var oneRoom = event.target.value === '1room';
event.preventDefault();
if (oneRoom) {
capacityGuest.value = 'noguest';
} else {
capacityGuest.value = '3guest';
}
});

// Тип жилья и синхронизация с минимальной ценной
var housingType = document.querySelector('#type');

housingType.addEventListener('change', function (event) {
  if (housingType.value === 'flat') {
    noticeFormPrice.value = 1000;
    noticeFormPrice.min = 1000;
  } else if (housingType.value === 'shack') {
    noticeFormPrice.value = 0;
    noticeFormPrice.min = 0;
  } else {
    noticeFormPrice.value = 1000000;
    noticeFormPrice.min = 10000;
  }
});

*/
