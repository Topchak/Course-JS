'use strict';

class Rectengle {
  constructor(height, width) {
    this.height = height;
    this.width = width;

  }

  calcArea() {
    return this.height * this.width;
  }
}


class ColoredRectengleWithText extends Rectengle {
  constructor(height, width, text, bgColor) {
    super(width, height);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps(){
    console.log(`текст ${this.text} цвет ${this.bgColor}`);
  }

}

// class ColoredRectengleWithText extends Rectengle {
//   constructor(height, width,text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps(){
//     console.log(`Текст ${this.text}, цвет ${this.bgColor}`);
//   }
// }

const div = new ColoredRectengleWithText(25, 10, 'text', 'red');
div.showMyProps();
console.log(div.calcArea());



// const square = new Rectengle(10, 10);
// const long = new Rectengle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());