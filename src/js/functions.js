
let num = 10;

function ret() {
  let num = 50;
  return num;
}
const newNum = ret();
console.log(newNum)

function fDec (){
  console.log('this is function declaration')
}
fDec()


const fEx = function () {
  console.log('This is function Expresion')
}

fEx();

const calc = (a,b) => a + b;
console.log(calc(10,10))
