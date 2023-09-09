'use strict';

function first() {

  setTimeout(function () {
    console.log(1);
  }, 500);

}
first();

function second (){
  console.log(2);
}
second();

function learnJS(lang, callback){
  console.log(`я учу${lang}`);
  callback();
}
function done () {
  console.log('Я прошел этот урок!!');
}

learnJS('JS', done); 