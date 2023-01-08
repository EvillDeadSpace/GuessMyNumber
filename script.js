'use strict';

let randomFnction = Math.trunc(Math.random() * 20) + 1;
let secretNumber = randomFnction;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

//button for restart a game 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('🙌 Start guessing...');
    document.body.style.background = '#222';
    document.querySelector('.bigt').textContent = 'Guess My Number!';
    secretNumber = randomFnction;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

});

//button for check bigger or smaller

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    //condition if player not enter a number
    if (!guess) {
        displayMessage('⚠️ No number');
        document.body.style.background = 'red';
        score--;
        document.querySelector('.score').textContent = score;

        //condition if player win a game 
    } else if (guess == secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎊 Correct Number!');
        document.body.style.background = '#60b347';
        document.querySelector('.bigt').textContent = 'YOU WIN!!!!';

        //save a highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }


        //when player guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = guess > secretNumber ? '😐 To Big!' : '😢 To Low!';
            document.body.style.background = '#222';
        } else {
            //when the player does not guess the number
            displayMessage('😢 You LOST');
            document.body.style.background = 'red';
            document.querySelector('.bigt').textContent = 'YOU LOST!!!!';
        }
    }
});