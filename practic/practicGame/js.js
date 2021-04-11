'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.querySelector('.wrapper'),
    time = wrapper.querySelector('.time'),
    field = wrapper.querySelector('.field'),
    timeOver,
    timeAll = 60;
    
    let timer = setInterval(tick, 1000);

    function tick() {
        time.innerHTML = `осталось ${--timeAll}`;
    }


    function badGame() {
        timeOver = setInterval(gameOver, 60000);
    }



    function gameOver() {
        alert(`Game over =(`);
        location.reload(); // window.location.reload()
    }

    let from = 1,
        to = 25,
        arr = [],
        sqrt = Math.sqrt(arr.length);

    arr = createSimpleArr(from, to);
    arr = toShafle(arr);

    arr = createMultiArr(sqrt, arr);
    
    createField(arr, field);
    
    function createSimpleArr(from, to) {
        let arrFun = [];

        for (let i = from; i <= to; i++){
            arrFun.push(i);
        }
        return arrFun;
    }


    
    function toShafle(arr) {
        let resault = [],
            len = arr.length;
        
        for(let i = 0; i < len; i++) {
            let randomNum = getRandomInt(0, arr.length - 1);
            let elem = arr.splice(randomNum, 1)[0];
            resault.push(elem);
        }

        return resault;
    }
    
    function createMultiArr(n, arr) {
        n = Math.sqrt(arr.length);
        let multiResault = [];
        let iterCount = Math.ceil(arr.length / n);
        for(let i = 0; i < iterCount; i++) {
            let elems = arr.splice(0, n);
            multiResault.push(elems);
        }
        return multiResault;
    }

    function createField(arr, elem) {
        for(let i = 0; i < arr.length; i++) {
            let tr = document.createElement('tr');
            for(let j = 0; j < arr[i].length; j++) {
                let td = document.createElement('td');
                td.innerHTML = arr[i][j];
                tr.appendChild(td);
            }
            elem.appendChild(tr);
        }
    }

    let tdGame = wrapper.querySelectorAll('td');
    console.log(tdGame);
    activeCell(tdGame);

    function activeCell(cells) {
        let counter = 1;

        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function() {
                if(this.innerHTML == counter) {
                    counter++;
                    this.classList.add('active');

                }
                else if(this.innerHTML != counter) {
                    location.reload(); // window.location.reload()
                    alert(`Wrong number`);
                }
            });
        }
    }

    badGame();

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});