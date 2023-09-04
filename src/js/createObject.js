'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false
};





// for (let i = 0; i < 2; i++) {
//   const a = prompt('Какой', '');
//   const b = prompt('Какова', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     i--;
//   };
// };

// if (personalMovieDB.count < 10) {
//   alert('Просмотрено мало фильмов!')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   alert('Вы классный зритель');
// } else if (personalMovieDB.count >= 30) {
//   alert('Вы киноман');
// }else{
//   alert('Произошла ошибка!')
// }


for (let i = 0; i < 2; i++) {
  const nameOfFilm = prompt('Какой фильм вы посмотрели?', '');
  const rateOfFilm = prompt('Как бы вы его оценили?', '');

  if (nameOfFilm != null && rateOfFilm != null && nameOfFilm != '' && rateOfFilm != '' && nameOfFilm.length < 50) {
    personalMovieDB.movies[nameOfFilm] = rateOfFilm;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {

  alert('Просмотрено мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка!');
}

console.log(personalMovieDB);
