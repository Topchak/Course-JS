'use strict';

const btn = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
//  старый тип назначения 
// btn.onclick = () => {
//   alert('click!');
// };

// btn.addEventListener('click', () => {
//   alert('yes');
// });
let i = 0;
const deleteFunction = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteFunction);
  // }
};

// btn.addEventListener('click', deleteFunction);
// overlay.addEventListener('click', deleteFunction);

btn.forEach(element => {
  element.addEventListener('click', deleteFunction);
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();

});

//1.click 2.callback 3.option
//btn.addEventListener('click', deleteFunction, {once: true});