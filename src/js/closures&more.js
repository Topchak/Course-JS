'use strict';

// function createCounter() {
//   let counter = 0;

//   const myFucnction = function () {
//     counter++;
//     return counter;
//   };
//   return myFucnction;
// }
// const increment = createCounter();
// const increment2 = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment2();
// const c4 = increment2();
// console.log(c1, c2, c3, c4);


// function f() {
//   let counter = 0;debugger

//   const myFucnction  = function() {debugger
//     counter++;debugger  
//     return counter;debugger
//   };
//   return myFucnction;debugger
// }
// let increment = f();debugger

// let a = increment();debugger
// let b = increment();debugger
// console.log(a,b);debugger

// function f() {
//   let value = Math.random();

//   return function () {
//     console.log(value);
//   };
// }

// 3 функции в массиве, каждая из которых ссылается на лексическое окружение
// из соответствующего вызова f()

// let arr = [f(), f(), f()];

// 3 функции в массиве, каждая из которых ссылается на лексическое окружение
// из соответствующего вызова f()
// let arr = [f(), f(), f()];



// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());





function makeArmy() {
  let shooters = [];
  let i = 0;

  while(i < 10){
    let j = i;
    let shooter = function(){
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
army[6]();