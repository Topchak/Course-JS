'use strict';


// const obj = {
//   a: 20,
//   b: 10,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();




// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function(){
//     console.log(`Hello ${this.name}!`);
//   };
// }

// let ivan = new User('Ivan', 23);
// ivan.hello();





// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + ' ' + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'I am');

// sayName.apply(user, ['Smith']);


// function count(num) {
//   return this * num;
// }
// const double = count.bind(13);

// console.log(double(2));


// стрелочная f берет контекст у родителя
// обычная f this = window, but if use 'use strict' this = undifined
// контекст у методов обьекта - сам обьект 
// this в конструкторах и классах - это новый экземпляр обьекта
// ручаная привязка this: call(), apply() , bind()
// call - использует в виде агрументов строку
// apply - использует в виде агрументов массив ['1','2',...]
// bind() - помогает создать свой this в функции
// bind() - создает новую функцию 


// const user = {
//   name: "John",
//   greet: function() {
//     console.log(`Привет, меня зовут ${this.name}!`);
//   }
// };

// // Создаем функцию, которая будет вызвана через setTimeout
// function delayedGreeting() {
//   console.log("Прошло 2 секунды:");
//   user.greet(); // Попытка вызвать greet без bind приведет к ошибке
// }

// // Используем setTimeout для вызова delayedGreeting через 2 секунды
// setTimeout(delayedGreeting, 2000);
document.querySelector('button').addEventListener('click', function () {
  console.log(this);
});

const doble = (a) => {
  return a * 2;
};
console.log(doble(2));


var numbers = {  
  array: [3, 5, 10],
  getNumbers: function() {
    return this.array;    
  }
};

var boundGetNumbers = numbers.getNumbers.bind(numbers);  
console.log(boundGetNumbers()); 
var simpleGetNumbers = numbers.getNumbers.bind(numbers);  
console.log(simpleGetNumbers()); 