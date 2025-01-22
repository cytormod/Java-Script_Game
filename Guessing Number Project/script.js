'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number')
// document.querySelector('.score')

// console.log(document.querySelector('.guess').value);// to get the value in input field, you will use value property
// document.querySelector('.guess').value =23;

const checkBtn = document.querySelector('.check')
const message = document.querySelector('.message')
const againBtn = document.querySelector('.again')

let score = 20;
let highscore = 0
 
const numberguess = document.querySelector('.number')
// console.log(numberguess);
// let random = ((Math.random()*10)*2)
let randomNum = (Math.trunc(Math.random()*10)*2)
numberguess.textContent = randomNum



checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    
    
    if (!guess) {
        if (score > 1) {
            score--;
            message.textContent = 'No Number';
            document.querySelector('.score').textContent =score;
        }else {
            message.textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }

    }else if (guess > 20) {
        if (score > 1) {
            score--;
            message.textContent = 'Number cannot be higher than 20';
            // message.textContent = 'No Number';
            document.querySelector('.score').textContent =score;
        }else {
            message.textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < 0) {
        if (score > 1) {
            score--;
            message.textContent = 'Number cannot be lower than 0';
            // message.textContent = 'No Number';
            document.querySelector('.score').textContent =score;
        }else {
            message.textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < randomNum) {
        message.style.color = "red";
        if (score > 1) {
            score--;
            message.textContent = 'Too Low';
            // message.textContent = 'No Number';
            document.querySelector('.score').textContent =score;
        }else {
            message.textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
    } else if ( guess > randomNum) {
        if (score > 1) {
            score--;
            message.textContent = 'Too High';
            // message.textContent = 'No Number';
            document.querySelector('.score').textContent =score;
        }else {
            message.textContent = 'Game Over';
            document.querySelector('.score').textContent = 0;
        }
        message.style.color = "blue";
    } else {
        message.textContent = "Correct Number"
        message.style.color = "green";
        numberguess.textContent = randomNum;
        // const highscoreRecord = document.querySelector('.highscore').textContent = score;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    }
    
    // console.log(guess);
    // console.log(randomNum)
})

againBtn.addEventListener('click', () => {

    score = 20;
    randomNum = (Math.trunc(Math.random()*10)*2)

    document.querySelector('.guess').value = ''

    // numberguess.textContent = randomNum
    // console.log(randomNum);
    // numberguess.textContent = "?";
    message.textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    // guess.value = clearInterval;
})

