/*
 * Callback функція і метод push
 * Функція isUniq приймає три параметри - element, index і arr. Функція повертає true або false
 * в залежності від того, чи зустрічається елемент перший раз в масиві (true) або цей елемент в масиві
 * вже зустрічався (false).

 * Функція isEven приймає один параметр - element. Функція повертає true або false в залежності від того
 * чи є елемент парним числом чи ні.

 * Функція filterArray(array, cb), приймає 1-м параметром array - масив чисел, а другим параметром cb -
 * функцію зворотного виклику (callback). Доповни тіло функції так, щоб функція filterArray заповнювала
 * новий порожній масив numbers тільки тими елементами із масиву array, для яких виклик функції cb
 * поверне true.
 */

const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;

    // Write code under this line
    if (cb(element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
