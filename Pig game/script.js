'use strict';
//Select Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')


// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const random6 = Math.trunc(Math.random() * 6 + 1)
console.log(random6)
btnRoll.addEventListener('click', (e) => {
    console.log('clicked')
    console.log(e.target)
    console.log(diceEl.textContent)
    const change = (dice.attributes[0] = `./Pictures/dice-${random6}.png`)
})

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
     const scores = [0, 0];
     let currentScore = 0;
     let activePlayer = 0;
     let playing = true;

     score0El.textContent = 0;
     score1El.textContent = 0;
     current0El.textContent = 0;
     current1El.textContent = 0;
     
     diceEl.classList.add('hidden');
     player0El.classList.remove('player--winner')
     player1El.classList.remove('player--winner')
     player0El.classList.add('player--active')
     player1El.classList.remove('player--active')
     

}

const switchPlayer = function() {
     document.querySelector(`#current--${activePlayer}`).textContent = 0;
          currentScore = 0;
          activePlayer = activePlayer === 0 ? 1 : 0;
          player0El.classList.toggle('player--active')
          player1El.classList.toggle('player--active')
}
//Rolling Dice Functionality
btnRoll.addEventListener('click', () => {

     if (playing) {

     

     const dice = Math.trunc(Math.random() *6 ) + 1

     diceEl.classList.remove('hidden')
     diceEl.src = `./Pictures/dice-${dice}.png`; 

     // ---
     if(dice !== 1){
          // Add Dice to the current score
     currentScore += dice;
     document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
     // current0El.textContent = currentScore; //change later       
     } else {
          switchPlayer();

          // document.querySelector(`#current--${activePlayer}`).textContent = 0;
          // currentScore = 0;
          // activePlayer = activePlayer === 0 ? 1 : 0;
          // player0El.classList.toggle('player--active')
          // player1El.classList.toggle('player--active')
     }
     }
})

btnHold.addEventListener('click', () => {
     if(playing) {

     
     scores[activePlayer] += currentScore;
     document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

     if(scores[activePlayer] >= 100) {
          playing = false;
          diceEl.classList.add('hidden')
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          33
     } else {          
          switchPlayer();
     }
}
})

btnNew.addEventListener('click', () => {
     score0El.textContent = 0;
     score1El.textContent = 0;
     current0El.textContent = 0;
     current1El.textContent = 0;
     player0El.classList.remove('player--winner')
     player1El.classList.remove('player--winner')
     player0El.classList.add('player--active')
     player1El.classList.remove('player--active')
     

})
 
