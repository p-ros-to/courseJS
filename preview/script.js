const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// }

// btn.addEventListener('click', () => {
//     alert('clicl');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log('hover');
// });

// btn.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
// });


// const deleteElem = (e) => {
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElem);

// // let i = 0;
// const removeElem = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     // i++;
//     // if(i == 1) {
//     //     btn.removeEventListener('click', removeElem);
//     // }
// };

// btn.addEventListener('click', removeElem);
// overlay.addEventListener('click', removeElem);

const removeElem = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', removeElem);
// overlay.addEventListener('click', removeElem);

// btn.forEach(i => {
//     i.addEventListener('click', removeElem);
// });

btn.forEach(i => {
    i.addEventListener('click', removeElem, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // ставим в начало обработчика

    console.log(e.target);
});