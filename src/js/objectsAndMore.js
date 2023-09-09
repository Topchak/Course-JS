'use strict';

// const = new Object();

const options ={
  name: 'test',
  width: 1024,
  heingth: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function(){
    console.log('test');
  }
};
options.makeTest();
console.log(options.colors.bg);



for (let key in options){
  if( typeof(options[key]) === 'object'){
    for(let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  }else{
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  } 
}
// console.log(Object.keys(options).length);

const { border, bg } = options.colors;
console.log(border, bg);