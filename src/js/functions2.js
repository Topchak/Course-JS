const usdCur = 37;

function convert(amount, curr) {
  return amount * curr;
}

const discount = 0.8;

function promotion(result) {
  console.log(result * discount);
  return result * discount;
}

const res = convert(27.02, usdCur);

promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if(i === 3) return;
  }
  console.log('Done');
}
const test1 = test();
console.log(test1);


function returnNeighboringNumbers(num) {
  const arr = [];
  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;
  return arr;
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(base, multiply) {
  let string = '';
  
  if(multiply <= 0 || typeof multiply != 'number'){
      return base;
  }
  for(let i = 1; i <= multiply ; i++){
    
    if(i === multiply){
      string += `${base * i}`;
    }else{
      string += `${base * i}---`;
    }
  }
  
  return string;
}
console.log(getMathResult(3, 5));

let arrr = ['a:xyz', '777:12345'];
console.log(arrr[0]);

function calculateVolumeAndArea(num) {

  if (!isNaN(num) && Number.isInteger(num) && num >= 1) {
    return `Объем куба: ${Math.pow(num,3) }, площадь всей поверхности: ${(num * num) * 6}`;
  } else {
    return 'При вычислении произошла ошибка';
  }

}
let a = calculateVolumeAndArea(5);
console.log(typeof a);

// isNaN('abs') = true;
let s = 9;
console.log(Number.isInteger(s));
// console.log(isNaN(s));


function getCoupeNumber(num) {

  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.log('Ошибка. Проверьте правильность введенного номера места');
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (num === 0 || num > 36) {
    console.log('Таких мест в вагоне не существует');
    return 'Таких мест в вагоне не существует';
  } else {
    console.log(Math.ceil(num / 4));
    return Math.ceil(num / 4);
  }

}

getCoupeNumber(1);


function getTimeFromMinutes(min) {
  if (isNaN(min) || !Number.isInteger(min) || min < 0) {
    console.log('Ошибочка');
    return 'Ошибка, проверьте данные';

  } else if (min === 0) {
    console.log('Это 0 часов и 0 минут');
    return 'Это 0 часов и 0 минут';

  } else {
    const hours = Math.floor(min / 60); // Целое количество часов
    const remainingMinutes = min % 60; // Остаток в минутах

    let hoursText = 'часов';

    if (hours === 1 || (hours % 10 === 1 && hours !== 11)) {
      hoursText = 'час';
    } else if (
      (hours >= 2 && hours <= 4) ||
      ((hours % 10 >= 2 && hours % 10 <= 4) && !(hours >= 12 && hours <= 14))
    ) {
      hoursText = 'часа';
    }

    console.log(`Это ${hours} ${hoursText} и ${remainingMinutes} минут`);
    return `Это ${hours} ${hoursText} и ${remainingMinutes} минут`;
  }
}
getTimeFromMinutes(150.5);

console.log(Number.isInteger(1.5));

function findMaxNumber(num1, num2, num3, num4) {

  if (num1, num2, num3, num4) {

    if (typeof num1 == 'number' && typeof num2 == 'number' &&
      typeof num3 == 'number' && typeof num4 == 'number') {
      return Math.max(num1, num2, num3, num4);
    } else {
      return 0;
    }
  }
  return 0;
}
findMaxNumber(1, 5, '6', '10');

function fib1(num) {
  if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}

fib1(5);

let str = '    abc     ';
console.log(str);
console.log(str.trim());