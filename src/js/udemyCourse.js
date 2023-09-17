/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        ganre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        inputForm = form.querySelector('.adding__input'),
        inputCheckbox = form.querySelector('.input-checkbox');
        

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let checkBox = inputCheckbox.checked;
        let newFilm = inputForm.value;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
                movieDB.movies.push(newFilm);
            }
            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, movieList);

            if (checkBox) {
                console.log('Добавляем любимый фильм!');
            }
        }

        form.reset();
    });


    const deleteAdv = (arr) => {
      arr.forEach(el => {
            el.remove();
        });
    };

    const makeChanges = (bg, block) => {
        bg.style.backgroundImage = 'url("../img/bg.jpg")';
        block.textContent = 'драма';
    };

    const sortArray = (arr) => {
        arr.sort();
    };


    const createMovieList = (movies, parent) => {
        movieList.innerHTML = '';
        sortArray(movieDB.movies);

        movies.forEach((el, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${el}
                <div class="delete"></div>
            </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((el, i) => {
            el.addEventListener('click', () => {
                el.parentElement.remove();
                movies.splice(i, 1);
                createMovieList(movies, parent);
            });
        });

    };

    makeChanges(poster, ganre);
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
});




