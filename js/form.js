'use strict';

// Валидация форм
var noticeFormNode = document.querySelector('.notice__form');
var noticeFormTitle = noticeFormNode.querySelector('#title');
var noticeFormPrice = noticeFormNode.querySelector('#price');
var noticeFormAddress = noticeFormNode.querySelector('#address');

noticeFormTitle.required = true;
noticeFormTitle.minLength = 30;
noticeFormTitle.maxLength = 100;

noticeFormPrice.required = true;
noticeFormPrice.type = 'number';
noticeFormPrice.min = 1000;
noticeFormPrice.max = 1000000;

noticeFormAddress.required = true;

// Изменения значений в полях формы - синхронизация
// Синхронизация по времени
/*
var timeSelect = document.querySelector('#time');
var timeoutSelect = document.querySelector('#timeout');

timeoutSelect.value = timeSelect.value;
timeSelect.addEventListener('change', function () {
  timeoutSelect.value = timeSelect.value;
});

timeoutSelect.addEventListener('change', function () {
  timeSelect.value = timeoutSelect.value;
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
*/
