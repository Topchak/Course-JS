'use strict';


const numberOfFilms = +prompt('Сколько', '');

const personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false
};

const a = prompt('Какой', ''),
  b = prompt('Какова', ''),
  c = prompt('Какой', ''),
  d = prompt('Какова', '');

  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[c] = d;

  console.log(personalMovieDB);
