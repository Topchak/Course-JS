// const shoppingMallData = {
//   shops: [{
//       width: 10,
//       length: 5
//     },
//     {
//       width: 15,
//       length: 7
//     },
//     {
//       width: 20,
//       length: 5
//     },
//     {
//       width: 8,
//       length: 10
//     }
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000
// };

// function isBudgetEnough(data) {
//   const multipliedValues = data.shops.map(item => item.width * item.length);
//   let result = 0;
//   multipliedValues.forEach(el => {
//     result += el;
//   });
//   if ((result * data.height) * data.moneyPer1m3 < data.budget) {
//     return 'Бюджета достаточно';
//   } else {
//     return 'Бюджета недостаточно';
//   }
// }
// const result = isBudgetEnough(shoppingMallData);
// console.log(result);




/*
Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
*/



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard'];

function sortStudentsByGroups(arr) {
  arr.sort();
  let str = 'Оставшиеся студенты:';
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let arrRes = [];
  let count = 0;

  arr.forEach((el, i) => {
    count++;
    if (i < 3) {
      a.push(el);
    } else if (i < 6) {
      b.push(el);
    } else if (i < 9) {
      c.push(el);
    } else if (i >= 9) {
      d.push(el);
    }
  });
  if (count <= 9) {
    str = 'Оставшиеся студенты: -';
  } else {
    str += ` ${d.join(', ')} `;
  }

  arrRes.push(a, b, c, str.trim());
  return arrRes;

}
const result = sortStudentsByGroups(students);
console.log(result);