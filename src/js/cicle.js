'use strict';
let num = 50;

// while (num <= 55) {
//   console.log(num)
//   num++
// }

do {
  console.log(num);
  num++;
} while (num <= 55);

for (let i = 1; i <= 8; i++) {
  console.log(i);
}

for (i = 0; i <= 3; i++) {
  console.log(i);
  for (k = 0; k <= 3; k++) {
    console.log(k);
  }
}

for (i = 0; i < 1; i++) {
  let stars = '';
  for (k = 7; k > 0; k--) {
    console.log(stars += '*');
  }
}

// let result = '';

for (i = 1; i < 7; i++) {
  for (k = 0; k < i; k++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);


first: for (i = 0; i < 3; i++) {
  console.log(`level first ${i}`);

  for (k = 0; k < 3; k++) {
    console.log(`level second ${k}`);

    for (j = 0; j < 3; j++) {
      if (j === 2) break first;
      console.log(`level third ${j}`);
    }
  }
}

for (let i = 2; i <= 10; i++) {
  if (i % 2) {
    console.log(i - 1);
  }
}
let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {} else {
    console.log(i);
  }
  i++;
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}


function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;

  }

  // Не трогаем
  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}
fifthTask();

function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }


  // Не трогаем
  console.log(result);
  return result;
}
firstTask();

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут

  console.log(data);


  // for (let i = 0; i < data.length; i++) {
  //   let el = data[i];
  //   if(typeof el === 'number'){
  //     data[i] = el * 2;
  //   }else{
  //     data[i] = `${data[i]} - done`
  //   }
  // }
  console.log(data);

  return data;
}
// Не трогаем

secondTask();

function thirdTask() {
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];
  // счет с еденицы, если 1 <=data.legth; i++
  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
  }
  return result;
}

thirdTask();

// const lines = 5; // Количество строк (высота) пирамиды
// let result = ''; // Строка, в которую будет записан рисунок пирамиды

for (let i = 0; i <= lines; i++) {
  // Цикл i отвечает за строки пирамиды (от 0 до указанного количества строк)

  // Внутренний цикл j отвечает за добавление пробелов перед звездочками.
  // Количество пробелов уменьшается с увеличением номера строки (i).
  for (let j = 0; j < lines - i; j++) {
    result += ' ';
  }

  // Второй внутренний цикл j отвечает за добавление звездочек.
  // Количество звездочек увеличивается с увеличением номера строки (i).
  // Формула 2 * i + 1 используется для определения количества звездочек в строке.
  for (let j = 0; j < 2 * i + 1; j++) {
    result += '*';
  }

  // После добавления пробелов и звездочек в текущей строке, добавляем символ переноса строки "\n".
  // Это переход к следующей строке пирамиды.
  result += '\n';
}

// В итоге, переменная result содержит рисунок пирамиды.
console.log(result);





const lines = 5; // Количество строк (высота) пирамиды
let result = ''; // Строка, в которую будет записан рисунок пирамиды

for (let i = 0; i <= lines; i++) {

  for (let k = 0; k < lines - i; k++) {
    result += ' ';
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    result += '*';
  }

  result += '\n';
}
console.log(result);