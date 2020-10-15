/*
 * Callback функція
 * Функція mapArray(array, cb), приймає 1-м параметром array - масив чисел, а другим параметром
 * cb - функцію зворотного виклику (callback). Функція mapArray створює новий масив numbers і заповнює
 * його числами із масиву array, що перетворені функцією cb.

 * Оформи створення масиву numbers потрібної довжини, використовуючи new Array () і необхідний аргумент
 * для задавання довжини, рівної довжині array.

 * Напиши функцію зворотного виклику addIndex, яка приймає два параметри - element і index та повертає
 * число - суму element і index (додавання).

 * Напиши функцію зворотного виклику subIndex, яка приймає два параметри - element і index та повертає
 * число - різницю element і index (віднімання).
 */

// Write code under this line
const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  "use strict";
  // Write code under this line
  const numbers = new Array(array.length);
  
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }

  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
