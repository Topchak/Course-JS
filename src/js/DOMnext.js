'use strict';


// получение всех узлов body
// console.log(document.body.childNodes);

// получение firstChild body (#text)
// console.log(document.body.firstChild);

//получение lastChild body
// console.log(document.body.lastChild);

// получение родительского узла
// console.log(document.querySelector('#current').parentNode);

//получение родительского Element
// console.log(document.querySelector('#current').parentElement);

//получение previousElementSibling
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//получение previousElementSibling
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);



// const first = document.querySelector('.first');
// console.log(first.childNodes);

// console.log(first.children);

// for (const iterator of first.children) {
//   iterator.classList.remove('#current');
//   console.log(iterator);
// }

// for (const iterator of first.childNodes) {
//   if (iterator.nodeName != '#text') {
//     console.log(iterator);
//   }
// }

// function pow1(num, degree) {
//   let res = 1;
//   for (let i = 0; i < degree; i++) {
//     res *= num;
//     // res = num * res;
//   }
//   return res;
// }
// console.log(pow1(2, 4));



// function pow(num, degree) {
//   if (degree === 1) {
//     return num;
//   } else {
//     return num * pow(num, degree - 1);
//   }
// }
// console.log(pow(2, 4));


// function fact(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(5));




let students = {
  js: [{
      name: 'John',
      progress: 100
    },
    {
      name: 'Ivan',
      progress: 60
    }
  ],

  html: {
    basic: [{
      name: 'Peter',
      progress: 20
    }, {
      name: 'Ann',
      progress: 18
    }],

    pro: [{
      name: 'Sam',
      progress: 10
    }]
  },
  some: {
    students: [{
      name: 'Test',
      progress: 100
    }]
  }
};


function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (const course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (const subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }


  return total / students;
}
getTotalProgressByIteration(students);


// function getTotalProgressByRecursion(data) {

//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }
//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (const subData of Object.values(data)) {
//       const subDataArray = getTotalProgressByRecursion(subData);
//       total[0] += subDataArray[0];
//       total[1] += subDataArray[1];
//     }
//     return total;
//   }

// }

// const result = getTotalProgressByRecursion(students);


// console.log(result[0] / result[1]);






// for (let course of Object.values(data)) {

//   if (Array.isArray(course)) {
//     students += course.length;

//     for (let i = 0; i < course.length; i++) {
//       total += course[i].progress;
//     }
//   } else {
//     for (let subCourse of Object.values(course)){
//       students += subCourse.length;

//       for (let i = 0; i < subCourse.length; i++) {
//         total += subCourse[i].progress;
//       }
//     }
//   }
// }

// function factorial(n) {
//   if (isNaN(n) || !Number.isInteger(n)) {
//     return 'Введите целое число больше нуля';
//   } else if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5));




// function power(num, degree) {
//   if (degree === 1) {
//     return num;
//   } else {
//     return num *= power(num, degree - 1);
//   }
// }

// console.log(power(2, 3));



