// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';
//   if (arr.length !== 0) {
//     let arrStr = arr.join(' ');
//     str += `Семья состоит из: ${arrStr}`;
//     return str;
//   } else {
//     return 'Семья пуста';
//   }
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(element => {
//     console.log(element.toLowerCase());
//   });
// }
// standardizeStrings(favoriteCities);




// const someString = 1;


// function reverse(str) {
//   if (typeof str == 'string') {
//     return str.split('').reverse().join('');
//   } else {
//     return 'Ошибка!';
//   }
// }
// console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length ? str = 'Доступные валюты: \n' : str = 'Нет доступных валют';

  arr.forEach(element => {
    if (element != missingCurr) {
      str += `${element}\n`;
    }
  });
  return str;
}


console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));