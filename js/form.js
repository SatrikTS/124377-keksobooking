'use strict';

var pinObject = document.querySelectorAll('.pin');
var closeDialog = document.querySelector('.dialog__close');
var dialogWindow = document.querySelector('.dialog');

// Добавление и удаление класса у меток
for (var i = 0; i < pinObject.length; i++) {
  pinObject[i].addEventListener('click', function (event) {
    removeClassPinActive();
    var target = event.currentTarget;
    target.classList.add('pin--active');
    dialogWindow.style.display = 'block';
  });
}

// Скрытие диалогового окна и удаление класса у метки
closeDialog.addEventListener('click', function () {
  dialogWindow.style.display = 'none';
  removeClassPinActive();
});

// функция удаления активного класса у обьектов с классом pin
var removeClassPinActive = function () {
  for (var j = 0; j < pinObject.length; j++) {
    pinObject[j].classList.remove('pin--active');
  }
};

// Изменения значений в полях формы
// Синхронизация по времени
var timeOption = document.querySelector('#time');
var timeoutOption = document.querySelector('#timeout');

timeOption.addEventListener('click', function () {
  timeoutOption.value = timeOption.value;
});

timeoutOption.addEventListener('click', function () {
  timeOption.value = timeoutOption.value;
});

// Тип жилья и синхронизация с минимальной ценной
var housingType = document.querySelector('#type');
var priceInput = document.querySelector('#price');

housingType.addEventListener('change', function () {
  if (housingType.value === 'flat') {
    priceInput.value = 1000;
  } else if (housingType.value === 'shack') {
    priceInput.value = 0;
  } else {
    priceInput.value = 1000000;
  }
});

// Синхронизация по количетсву метс для гостей
var countRoom = document.querySelector('#room_number');
var capacityGuest = document.querySelector('#capacity');

countRoom.addEventListener('change', function () {
  var oneRoom = countRoom.value === '1room';
  if (oneRoom) {
    capacityGuest.value = 'noguest';
  } else {
    capacityGuest.value = '3guest';
  }
});
