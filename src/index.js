/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// 

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(value) {
  if (!value) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

let favoriteGanre;

function writeYourGenres() {

  for (let i = 0; i < 3; i++) {

    favoriteGanre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

    if (favoriteGanre != '' && favoriteGanre != null && isNaN(favoriteGanre)) {
      personalMovieDB.genres[i] = favoriteGanre;
    } else {
      i--;
    }
  }
}

writeYourGenres();
console.log(personalMovieDB);
// let a = 1.1;
// console.log(!Number.isInteger(a));






function calculateVolumeAndArea(num) {

  if (!isNaN(num) && Number.isInteger(num) && num >= 1) {
    return `Объем куба: ${Math.pow(num,3) }, площадь всей поверхности: ${(num * num) * 6}`;
  } else {
    return 'При вычислении произошла ошибка';
  }

}
let a = calculateVolumeAndArea(5);
console.log(typeof a);

// isNaN('abs') = true;
let s = 9;
console.log(Number.isInteger(s));
// console.log(isNaN(s));


function getCoupeNumber(num) {

  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.log('Ошибка. Проверьте правильность введенного номера места');
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (num === 0 || num > 36) {
    console.log('Таких мест в вагоне не существует');
    return 'Таких мест в вагоне не существует';
  } else {
    console.log(Math.ceil(num / 4));
    return Math.ceil(num / 4);
  }

}

getCoupeNumber(1);


function getTimeFromMinutes(min) {
  if (isNaN(min) || !Number.isInteger(min) || min < 0) {
    console.log('Ошибочка');
    return 'Ошибка, проверьте данные';

  } else if(min === 0){
    console.log('Это 0 часов и 0 минут');
    return 'Это 0 часов и 0 минут';

  }else{
    const hours = Math.floor(min / 60); // Целое количество часов
    const remainingMinutes = min % 60; // Остаток в минутах

    let hoursText = 'часов';

    if (hours === 1 || (hours % 10 === 1 && hours !== 11)) {
      hoursText = 'час';
    } else if (
      (hours >= 2 && hours <= 4) ||
      ((hours % 10 >= 2 && hours % 10 <= 4) && !(hours >= 12 && hours <= 14))
    ) {
      hoursText = 'часа';
    }

    console.log(`Это ${hours} ${hoursText} и ${remainingMinutes} минут`);
    return `Это ${hours} ${hoursText} и ${remainingMinutes} минут`;
  }
}
getTimeFromMinutes(150);
// console.log(Math.floor(50 / 60));
// console.log(50 % 60);

// сделать проверку на 0 , 1 , 2 , 3 


