'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let sendAnswer = document.querySelector('.btn'),
        resetBtn = document.querySelector('.btnReset'),
        question1 = document.querySelectorAll('.q1'),
        question2 = document.querySelectorAll('.q2'),
        question3 = document.querySelectorAll('.q3'),
        answerAll = {
            first: 'первый вопрос',
            alert1: '',
            second: 'второй вопрос',
            alert2: '',
            third: 'третий вопрос',
            alert3: ''
        },
        count = 0;

        resetBtn.addEventListener('click', (e) => {
            e.reset();
        });


    sendAnswer.addEventListener('click', (e) => {
        e.preventDefault();

            if (question1[1].checked) {
                count++;
                answerAll.alert1 = 'верно';
            } else if (question1[0].checked) {
                answerAll.alert1 = 'неверно';  
            } else if (question1[2].checked) {
                answerAll.alert1 = 'неверно';  
            } else {
                answerAll.alert1 = 'ничего';  
            }

            if (question2[1].checked) {
                answerAll.alert2 = 'неверно';
            } else if (question2[0].checked) {
                answerAll.alert2 = 'неверно';  
            } else if (question2[2].checked) {
                count++;
                answerAll.alert2 = 'верно';  
            } else {
                answerAll.alert2 = 'ничего';  
            }

            if (question3[1].checked) {
                answerAll.alert3 = 'неверно';
            } else if (question3[0].checked) {
                answerAll.alert3 = 'неверно';  
            } else if (question3[2].checked) {
                count++;
                answerAll.alert3 = 'верно';  
            } else {
                answerAll.alert3 = 'ничего';  
            }

        alert(`
            Ваш бал: ${count}. ${answerAll.first}: вы ответили ${answerAll.alert1},
            ${answerAll.second}: вы ответили ${answerAll.alert2},
            ${answerAll.third}: вы ответили ${answerAll.alert3}
        `);
    });

    console.log (sendAnswer);
    console.log (question1);
    console.log (question2);
    console.log (question3);

});