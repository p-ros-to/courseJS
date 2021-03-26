"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        rememberMyFilms: function() {
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
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                alert('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
                alert('Вы киноман');
            } else {
                alert ('Произошла ошибка');
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: function(){
            if (personalMovieDB.privat == true) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let gener = prompt(`Ваш любимый жанр под номером ${i}`);    
    
                // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
                if (gener == '' || gener == null) {
                    console.log('Ввелин не корректные данные или не ввели их вовсе');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = gener;
                }
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    };
    
    // function showMyDB () {
    //     if (!personalMovieDB.privat) {
    //         console.log(personalMovieDB);
    //     }
    // }
    
    // showMyDB(personalMovieDB.privat);
    
    
    // for mobile !!!!
    // touchstart
    //touchmove
    //touchend
    //touchenter
    //touchleave
    //touchcancel
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

//touches сколько пальцев на экране
//targetTouches с конкретным элементом
//changedTouches список пальцев которые совершили назначенное действие