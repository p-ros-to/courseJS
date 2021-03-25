'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
    // hearts = wrapper.querySelectorAll('.heart'),
    // oneHeart = wrapper.querySelector('.heart'),

    console.log(box);
    console.log(btns);
    console.log(circle);
    console.log(hearts);
    console.log(oneHeart);

    // for (let i = 0; i < hearts.length; i++) {
    //     hearts[i].style.backgroundColor = 'green';
    // }

    hearts.forEach((i) => {
        i.style.backgroundColor = 'blue';
    });

    const div = document.createElement('div'); // существует только внутри js на странице ни как не появится
    const text = document.createTextNode('любой текст'); // текстовые узлы - элементы без оболочки тега использутеся не часто 
    
    div.classList.add('black');
    
    // document.body.append(div); // вставляет элемент в конец body
    wrapper.appendChild(div); //устаревшый 
    // document.querySelector('.wrapper').append(div);
    // wrapper.prepend(div);
    // hearts[1].before(div);
    // hearts[1].after(div);
    // wrapper.insertBefore(div, hearts[1]);

    // circle[0].remove();
    // wrapper.removeChild(hearts[1]);

    // замена
    // hearts[0].replaceWith(circle[0]);
    // wrapper.replaceChild(circle[0], hearts[1]);

    // div.innerHTML = 'Hello world';
    // div.innerHTML = '<h1>Hello world</h1>';
    // div.textContent = 'Hello'; // только с текстом

    div.innerHTML = '<h1>Hello world</h1>';
    div.insertAdjacentHTML('afterend', '<h2>Hi</h2>');