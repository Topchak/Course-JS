const solider = {
  health : 400,
  armor: 100,
  sayHello: function(){
    console.log('Hello');
  }
};

const john = Object.create(solider);

john.sayHello();