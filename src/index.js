// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно */

'use strict';


console.log(1);

function actors() {
  console.log(2);
}
actors();
let a = 'hello!';

function s() {
  console.log(a);
}
s();


















const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && isNaN(a) && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function (value) {
    if (!value) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {

      let genres = prompt('Введите ваши любимые жанры через запятую').toLocaleLowerCase();

      if (genres != '' && genres != null && isNaN(genres)) {
        personalMovieDB.genres = genres.split(',');
        personalMovieDB.genres.sort();
      } else {
        console.log('Ошибка');
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Ваш любимый жанр ${item} под номером ${i}`);
    });
  },

};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.privat);


let x = 5;
//prefix
console.log(++x);

//postfix
console.log(x++);

// пустой массив == '' если складывать пустой массив
console.log([] + false - null + true);

// если проводить математический операции с НЕ числами = NaN



console.log(null || 2 && 3 || 4);
// 2&&3 = 3(&&) - last true
// null || 3 = 3 (return true)
// 3 || 4 = 3 - first truu(||)

// Оператор && запинается на false
// Оператор && имеет более высокий приоритет, чем ||
// Оператор && выполняется слева направо и возвращает последнее истинное значение или первое ложное значение.


// Оператор || запинается на true
// Оператор || также выполняется слева направо и возвращает первое истинное значение или последний операнд, если все ложные. 
console.log(2 && 1 || null && 0 && undefined );


let aa = [1, 2, 3];
let b = [1, 2, 3];
console.log(aa == b);
//маленькие буквы идут после больших букв в лексикографическом порядке a > A!
console.log('Ёжик' < 'яблоко'); //true


console.log(0 || '' || 2 || undefined || true || false); //2
console.log(0 || '' || undefined || false); //false





console.log(2 && 1 && null && 0 && undefined); // null