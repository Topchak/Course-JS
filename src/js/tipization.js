let num = 5;
console.log('htpps://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);

console.log(+'4');

let ann = +prompt('hello', '');
console.log(ann);

// to boolean

// 0, undefined, null, '', NaN == false


let switcher = null;

if (switcher) {
  console.log(1);
}

switcher = 1;
if (switcher) {
  console.log(1);
}

console.log(typeof(!!'asdd'));