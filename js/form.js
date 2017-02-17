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
var timeSelect = document.querySelector('#time');
var timeoutSelect = document.querySelector('#timeout');
var timeArray = ['twelve', 'thirteen', 'fourteen'];

// Синхронизация по количетсву метс для гостей
var countRoom = document.querySelector('#room_number');
var capacityGuest = document.querySelector('#capacity');
var guestArray = ['noguest', '3guest', '3guest'];
var roomCountArray = ['1room', '2room', '100room'];

// Синхронизация по минимальной цене
var housingType = document.querySelector('#type');
var roomArray = ['flat', 'shack', 'palace'];
var minPrice = ['1000', '0', '10000'];


window.synchronizeFields(timeSelect, timeoutSelect, timeArray, timeArray, 'value');
window.synchronizeFields(countRoom, capacityGuest, roomCountArray, guestArray, 'value');
window.synchronizeFields(housingType, noticeFormPrice, roomArray, minPrice, 'min');
