'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movie = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newMovie) {

            if (newMovie.length >= 21) {
                newMovie = `${newMovie.substring(0, 22 )}...`;
            }

            if(favorite) {
                console.log('Любимый фильм');
            }

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);
            console.log(movieDB.movies);
    
            creatNewListFilm(movieDB.movies, movie);
        }

        e.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(i => {
            i.remove();
        });
    };


    const makeChenge = () => {
        promoGenre.textContent = 'ДРАМА';
    
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    
    };


    const sortArr = (arr) => {
        arr.sort();
    };

    // movieDB.movies.sort();

    function creatNewListFilm (films, parent) {

        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                creatNewListFilm(films, parent);
            });
        });
        console.log(movieDB.movies);
    }


    makeChenge();
    deleteAdv(adv);
    creatNewListFilm(movieDB.movies, movie);
    // movieDB.movies.
});