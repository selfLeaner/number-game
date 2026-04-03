// NUMBER GUESSING GAME

const minNumb = 1;
const maxNumb = 100;
const answer = Math.floor(Math.random() * maxNumb) + minNumb;

const myGuess = document.getElementById("myGuess");
const myP = document.getElementById("myp");
const myH = document.getElementById("myH");
const myButton = document.getElementById("myButton");

let attempts = 0;
/*
let running = true;
let Guess;

while(running){
    Guess = window.prompt(`Guess a number between ${minNumb} - ${maxNumb}`)
    Guess = Number(Guess)

    if(isNaN(Guess)){
        window.alert(`PPlease enter a valid number"`)
    }
    else if(Guess < minNumb || Guess > maxNumb){
        window.alert(`"Please enter a valid number"`)
    }
    else{
        attempts++;
        if(Guess < answer){
            window.alert(`TOO LOW! TRY AGAIN`)
        }
        else if(Guess > answer){
            window.alert(`TOO HIGH! TRY AGAIN`)
        }
        else{
             window.alert(`CORRECT. THE ANSWER WAS ${answer} AND YOU TOOK ${attempts} ATTEMPTS`)
             running = false;
        }
        }
    }
*/
let guess;

myButton.onclick = function(){

    guess = myGuess.value;
    guess = Number(guess);

    if(isNaN(guess)){
        myP.textContent = `"Please enter a valid number"`;
    }
    else if(guess < minNumb || guess > maxNumb){
        myP.textContent = `"Please enter a valid number"`;
    }
    else{
        attempts++;
        if(guess < answer){
            myP.textContent =`TOO LOW! TRY AGAIN`;
        }
        else if(guess > answer){
            myP.textContent = `TOO HIGH! TRY AGAIN`;
        }
        else{
            myP.textContent = ``
            myH.textContent = `CORRECT. THE ANSWER WAS ${answer} AND YOU TOOK ${attempts} ATTEMPTS`

        }
    }
}