'use strict';

const arr = [1, 2, 3, 4, 5];
console.log(arr.sort((a, b) => a - b));





arr.forEach(function (item, i, arr) {
  console.log(`${i} номер по порядку ${item} внутри массива ${arr}.`);
});

const str = prompt('', '');
const products = str.split(',');
console.log(products.join('; '));



