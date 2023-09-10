// 1: let a = 3
// 2: function addTwo(x) {
// 3:   let ret = x + 2
// 4:   return ret
// 5: }
// 6: let b = addTwo(a)
// 7: console.log(b)



// 1: let val1 = 2
// 2: function multiplyThis(n) {
// 3:   let ret = n * val1
// 4:   return ret
// 5: }
// 6: let multiplied = multiplyThis(6)
// 7: console.log('example of scope:', multiplied)


//  1: let val = 7
//  2: function createAdder() {
//  3:   function addNumbers(a, b) {
//  4:     let ret = a + b
//  5:     return ret
//  6:   }
//  7:   return addNumbers
//  8: }
//  9: let adder = createAdder()
// 10: let sum = adder(val, 8)
// 11: console.log('example of function returning a function: ', sum)

/* 

создание пременной 'функции' - createCounter
создание переменной increment = createCounter + ()
() createCounter 
создание пременной counter = 0
создание пременной 'функции' myFunction{
  counter = counter + 1
  return counter
}
возврат myFunction и присвоение myFunction к createCounter
createCounter =     
  counter = counter + 1
  return counter
  increment == createCounter
создание пременной c1 = increment()
counter = 0 + counter + 1 (counter 1)
return 1
c1 = 1

*/

function createCounter() {

  let counter = 0;

  const myFunction = function () {
    counter = counter + 1
    return counter
  }

  return myFunction

}


const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)


//  1: function createCounter() {
//  2:   let counter = 0
//  3:   const myFunction = function () {
//  4:     counter = counter + 1
//  5:     return counter
//  6:
//       }
//  7:   return myFunction
//  8:
//    }
//  9: const increment = createCounter()
//  10: const c1 = increment()
//  11: const c2 = increment()
//  12: const c3 = increment()
//  13: console.log('example increment', c1, c2, c3)
let c = 4

function addX(x) {
  return function (n) {
    return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)

function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Выведет 1
counter(); // Выведет 2
counter(); // Выведет 3



