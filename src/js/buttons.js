'use strict';

const btn = document.querySelector('.btn');


// let timer,
//   i = 0;

function myAnimation() {

  const elem = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 5);


  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }

















  // function frame() {
  //   if (pos == 300) {
  //     clearInterval(id);
  //   } else {
  //     pos++;
  //     elem.style.top = pos + 'px';
  //     elem.style.left = pos + 'px';
  //   }
  // }

}





btn.addEventListener('click', myAnimation);



// function logger() {
//   console.log('Hello');
// }