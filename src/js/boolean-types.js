// const hamb = true;
// const fries = true;

if (hamb && fries) {
  console.log('I am full') // I am full
}
console.log(hamb && fries); //true


const hamb2 = true;
const fries2 = false;

if (hamb2 && fries2) {
  console.log('I am full') // -
}
console.log(hamb2 && fries2); //false

// 0, '', null, undefined, NaN === false !


const hamb3 = 3;
const fries3 = 3;
const cola3 = 0;
const nuggets3 = 3;

console.log(hamb3 === 3 && cola3 === 2 || fries3 === 3 && nuggets3)

if (hamb3 === 3 && cola3 === 2 || fries3 === 2 && nuggets3) {
  console.log('yes')
} else {
  console.log('no')
}

let johnReport, samReport, davidReport, mariaReport = 'done';

console.log(johnReport || samReport || davidReport || mariaReport);
// || возвращает  true
// || запинается на true 
// && запинается false
// && возвращает последнее значение true( true && >true< )
// && возвращает значение false( true && >false< )


// &&  >  ||
// ||  <  &&

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 && null || !3);

console.log(NaN || null || !3 || undefined || 5);
// игнорирует false и возвращают true;
console.log(NaN || null && !3 && undefined || 5);


// 
console.log(5 && 5 > 1 || !4);



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;





let x, y, z, result;

// Задачи с оператором || (логическое ИЛИ):
x = true;
y = false;
z = true;
result = (x || y) && (x || z) && (y || z);
console.log(result);

x = false;
y = true;
z = false;
result = (x || y) && (x || z) && (y || z);
console.log(result);

// Задачи с оператором && (логическое И):
x = true;
y = false;
z = true;
result = (x && y) || (x && z) || (y && z);
console.log(result);

x = false;
y = true;
z = false;
result = (x && y) || (x && z) || (y && z);
console.log(result);

// Смешанные задачи:
x = true;
y = false;
z = true;
result = (x || (y && z)) && (!x || (z && !y));
console.log(result);

x = false;
y = true;
z = true;
result = (x || (y && z)) && (!x || (z && !y));
console.log(result);