const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1)) + min;

let guess;
let attempts = 0;
let isRunning = true;

console.log(answer);
while(isRunning){
    
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < min || guess > max ){
        window.alert(`Out of range`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low. Try again.`);
        }
        else if(guess > answer){
            window.alert(`Too high. Try again`);
        }
        else{
            window.alert(`You guessed it is ${answer}. You needed ${attempts} attempts`);
            isRunning=false;
        }
    }

}