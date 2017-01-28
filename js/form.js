'use strict';

var pinObject = document.querySelectorAll('.pin');
var closeDialog = document.querySelector('.dialog__close');
var dialogWindow = document.querySelector('.dialog');

// Добавление и удаление класса у меток
for (var i = 0; i<pinObject.length; i++){
    pinObject[i].addEventListener('click', function () {
      for (var j=0; j<pinObject.length; j++){
        pinObject[j].classList.remove('pin--active');
      }
      this.classList.add('pin--active');
      dialogWindow.style.display = 'block';
    });
}

// Скрытие диалогового окна и удаление класса у метки
closeDialog.addEventListener('click', function(){
  dialogWindow.style.display = 'none';
  for (var i = 0; i<pinObject.length; i++){
    if(pinObject[i].classList.contains('pin--active')){
      pinObject[i].classList.remove('pin--active');
    }
  }
});

// Изменения значений в полях формы
// Синхронизация по времени
var timeOption = document.querySelector('#time');
var timeoutOption = document.querySelector('#timeout');

timeOption.addEventListener('click', function(){
  timeoutOption.value = timeOption.value;
});

timeoutOption.addEventListener('click', function(){
  timeOption.value = timeoutOption.value;
});

//Синхронизация по количетсву метс для гостей
var countRoom = document.querySelector('#room_number');
var capacityGuest = document.querySelector('#capacity');

countRoom.addEventListener('change', function(){
  var oneRoom = countRoom.value == '1room';
  if(oneRoom){
    capacityGuest.value = "noguest";
  } else {
    capacityGuest.value = "3guest";
  }
});
