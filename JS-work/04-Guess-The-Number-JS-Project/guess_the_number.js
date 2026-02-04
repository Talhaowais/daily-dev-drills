let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlots = document.querySelector('.guesses')
const remainingSlots = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const start = document.querySelector('.resultParas')

const p =document.createElement('p');
let prevGuess = [];
// let  numberGuess = 0;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};

function validateGuess (guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if((guess < 1)){
        alert('Please enter a number greater than 1');
    }else if((guess > 100)){
        alert('Please enter a number below 100');
    }else{
        prevGuess.push(guess);
        // numberGuess++;
        if(prevGuess.length > 9){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
};

function checkGuess (guess) {
    if(randomNumber === guess){
        displayMessage('You guessed it right. Congrats')
        endGame()
    }else if(randomNumber < guess){
        displayMessage('Number is Tooo High')
    }else if(randomNumber > guess){
        displayMessage('Number is Tooo Low')
    }
};

function displayGuess (guess) {
    userInput.value = '';
    guessSlots.innerHTML = `${prevGuess.join(", ")} `
    remainingSlots.innerHTML =+ `${10-prevGuess.length}`
};

function displayMessage (message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
};

function endGame () {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    start.appendChild(p)
    playGame = false ;
    newGame();
};

function newGame () {
    const newGameButton = document.querySelector('#newGame');  
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        // numberGuess = 0;
        guessSlots.innerHTML = '';
        remainingSlots.innerHTML = `${10 - prevGuess.length}`;
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        start.removeChild(p);
        playGame = true;
    });
};



