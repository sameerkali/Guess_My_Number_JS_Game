'use strict';
// console.log(document.querySelector(".message").textContent="hare it is ");

let score = 20;

var secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);
console.log('waie toh correct number upper hi hai par Bhaiya BHSDK inspect cheating kene ke lea nhi hota !!!')


document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = (document.querySelector('.guess').value)


        if (!guess) {
            document.querySelector('.message').textContent = 'oops no number';
        }
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📉 too low';
                score--;
                document.querySelector('.score').textContent = score;

            }
            else {
                document.querySelector('.message').textContent = '💥 You lose the game !';
            }

        }
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📈 too high';
                score--;
                document.querySelector('.score').textContent = score;

            }
            else {
                document.querySelector('.message').textContent = '💥 You lose the game !';
            }

        }
        else {
            document.querySelector('.message').textContent = '🎉 correct number';

            document.querySelector('body').style.background = "#60b347";
            document.querySelector('.number').style.width = '30rem';

        }

    });

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 21);

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').textContent = '';

        document.querySelector('body').style.background = "#222";
        document.querySelector('.number').style.width = '15rem';
    });

// Change Theam 

document.querySelector('.hack').addEventListener('click', function () {

    document.querySelector('body').style.backgroundImage = ' url("https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg")';
})



