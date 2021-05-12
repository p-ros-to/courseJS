'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const field = document.querySelector('.field'),
        cells = field.querySelectorAll('.cells'),
        progress = document.querySelector('.progress'),
        startGame = document.querySelector('.start'),
        win = [
            [0, 4, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6]
        ];
    let count = 0,
        step = true,
        circle = `<svg class="circle">
                <circle r="45" cx="85" cy="85" stroke="blue" stroke-width="10" fill="none" stroke-linecap="round" />
            </svg>`,
        cross = `<svg class="cross">
                <line class="first" x1="47" y1="47" x2="120" y2="120" stroke="red" stroke-width="10" stroke-linecap="round" />
                <line class="second" x1="120" y1="47" x2="47" y2="120" stroke="red" stroke-width="10" stroke-linecap="round" />
            </svg>`;



    function hide() {
        field.classList.add('hide');
    }


    startGame.addEventListener('click', (e) => {
        field.classList.remove('hide');
        field.classList.add('fade');

        startGame.classList.add('hide');
        randomMove();
    });


    field.addEventListener('click', (event) => {
        // whoseMove();
        const target = event.target;
        console.log(target);

        if(target.className == 'cells') {

            function cheked() {
                if(target.hasAttribute('occupied')) {
                    console.log(target.innerHTML);
                }
                else {
                    if(step == true) {
                        target.innerHTML = cross;
                        target.classList.add('occupied', 'x');
                        progress.innerHTML = 'Ходит O';
                        step = false;
                        count++;
                        console.log(count);
                        checkWinner();
                    } else {
                        target.innerHTML = circle;
                        target.classList.add('occupied', 'o');
                        progress.innerHTML = 'Ходит Х';
                        step = true;
                        count++;
                        console.log(count);
                        checkWinner();
                    }
                }
            }

            cheked();
            
        }
    });


    function checkWinner() {
        for (let i = 0; i < win.length; i++) {
            if(count == 9) {
                if(cells[win[i][0]].classList.contains('x') &&
                cells[win[i][1]].classList.contains('x') &&
                cells[win[i][2]].classList.contains('x')) {
                    setTimeout(() => {
                        cells[win[i][0]].classList.contains('x');
                        cells[win[i][1]].classList.contains('x');
                        cells[win[i][2]].classList.contains('x');
                        progress.innerHTML = 'Выиграл Х';
                        hide();
                        startGame.classList.remove('hide');
                        clearField();
                    }, 1250);
                }
                else if(cells[win[i][0]].classList.contains('o') &&
                cells[win[i][1]].classList.contains('o') &&
                cells[win[i][2]].classList.contains('o')) {
                    setTimeout(() => {
                        cells[win[i][0]].classList.contains('o');
                        cells[win[i][1]].classList.contains('o');
                        cells[win[i][2]].classList.contains('o');
                        progress.innerHTML = 'Выиграл O';
                        hide();
                        startGame.classList.remove('hide');
                        clearField();
                    }, 1250);
                }
                else {
                    setTimeout(() => {
                        progress.innerHTML = 'Ничья';
                        hide();
                        startGame.classList.remove('hide');
                        clearField();
                    }, 1250);
                }
            }
            else if(cells[win[i][0]].classList.contains('x') &&
            cells[win[i][1]].classList.contains('x') &&
            cells[win[i][2]].classList.contains('x') && count !== 9) {
                setTimeout(() => {
                    cells[win[i][0]].classList.contains('x');
                    cells[win[i][1]].classList.contains('x');
                    cells[win[i][2]].classList.contains('x');
                    progress.innerHTML = 'Выиграл Х';
                    hide();
                    startGame.classList.remove('hide');
                    clearField();
                }, 1250);
            }
            else if(cells[win[i][0]].classList.contains('o') &&
            cells[win[i][1]].classList.contains('o') &&
            cells[win[i][2]].classList.contains('o') && count !== 9) {
                setTimeout(() => {
                    cells[win[i][0]].classList.contains('o');
                    cells[win[i][1]].classList.contains('o');
                    cells[win[i][2]].classList.contains('o');
                    progress.innerHTML = 'Выиграл O';
                    hide();
                    startGame.classList.remove('hide');
                    clearField();
                }, 1250);
            }
        }
    }


    function randomMove() {
        let random = getRandomInt(0, 1);
        console.log (random);
        
        (random == 0) ? step = true : step = false;
        console.log(step);
        (step == true) ? progress.innerHTML = 'Ходит Х' : progress.innerHTML = 'Ходит O';
        
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function clearField() {
        cells.forEach(e => {
            e.classList.remove('occupied', 'x', 'o');
            e.innerHTML = '';
            count = 0;
        });
    }


    hide();

});