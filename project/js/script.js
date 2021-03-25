/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    movie = document.querySelector('.promo__interactive-list');

console.log(adv);

adv.forEach(i => {
    i.remove();
});

promoGenre.textContent = 'ДРАМА';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

movie.innerHTML = '';
movieDB.movies.sort().forEach((film, i) => {
    movie.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
        <div class="delete"></div>
    </li>
    `;
});
console.log(movieDB.movies);
// movieDB.movies.