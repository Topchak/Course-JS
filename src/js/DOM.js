'use strict';

const box = document.getElementById('box');
// pseudoArray
const buttons = document.getElementsByTagName('button');
// pseudoArray
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const heards = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');



box.style.backgroundColor = 'blue';
box.style.width = '300px';

box.style.cssText = 'background-color: blue; width: 100px';

// buttons[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

heards.forEach(el => {
  el.style.backgroundColor = 'green'
});
const div = document.createElement('div');
div.classList.add('black');

// wrapper.prepend(div);
wrapper.append(div);
// console.log(circles[0]);
// circles[0].remove();
// heards[0].replaceWith(circles[0]);

// wrapper.appendChild(div);
// wrapper.insertBefore(div, heards[1])
div.innerHTML = '<h1>Hello World </h1>';
// div.textContent = 'Hello';
div.insertAdjacentHTML('afterbegin','<h2>Bello</h2>');