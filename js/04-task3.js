/*
 * Callback функція для отримання одного значення масиву, що вичисляється
 * Функції add, sub і mult приймають два параметри - accum і element, повертає число - суму, різницю або
 * добуток параметрів.

 * Доповни тіло функції reduceArray рядком присвоєння accum виклику функції cb. Функція reduceArray
 * повинна буде розрахувати суму або різницю або добуток всіх елементів масиву в залежності від того,
 * яка саме із трьох функцій (add, mult, sub) буде передана у якості cb.
 */

const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  "use strict";
  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
  }
  if (arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  for (i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
    accum = cb(accum, element);
  }
  return accum;
}

const arr = [1, 2, 3, 4, 5];

console.log(reduceArray(arr, add)); // 15
console.log(reduceArray(arr, add, 10)); // 25

console.log(reduceArray(arr, mult)); // 120
console.log(reduceArray(arr, mult, 10)); // 1200

console.log(reduceArray(arr, sub)); // -13
console.log(reduceArray(arr, sub, 10)); // -5
