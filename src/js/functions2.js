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

promotion(res)

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
    if(i === 3) return
  }
  console.log('Done')
}
const test1 = test();


function returnNeighboringNumbers(num) {
  const arr = [];
  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;
  return arr
}
console.log(returnNeighboringNumbers(5))

// Место для третьей задачи
function getMathResult(base, multiply) {
  let string = '';
  
  if(multiply <= 0 || typeof multiply != 'number'){
      return base
  }
  for(i = 1; i <= multiply ; i++){
    
    if(i === multiply){
      string += `${base * i}`
    }else{
      string += `${base * i}---`
    }
  }
  
  return string
}
console.log(getMathResult(3, 5))

let arrr = ["a:xyz", "777:12345"];
console.log(arrr[0])