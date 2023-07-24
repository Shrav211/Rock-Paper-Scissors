// make global functions to hold the scores of the computer and the player
let computerScore = 0;
let playerScore = 0;

//make a function that gets the computer's choice randomly 

function getComputerChoice(){
    //store the choices in an array
    var choices = ['Rock', 'Paper', 'Scissors'];
    var pickedChoice = choices[Math.floor(Math.random()*choices.length)];
    return (pickedChoice);
}

//make another function that plays a single round 

function playRound(playerSelection, getComputerChoice){
    if (playerSelection == 'rock' && getComputerChoice == 'Scissors'){
        playerScore += 1;
        return ('You Win! Rock beats Scissors');
    }
    else if (playerSelection == 'rock' && getComputerChoice == 'Rock'){
        return ('You Tied!');
    }
    else if (playerSelection == 'rock' && getComputerChoice == 'Paper'){
        computerScore += 1;
        return ('You Lose! Paper beats Rock');
    }

    else if (playerSelection == 'paper' && getComputerChoice == 'Scissors'){
        computerScore += 1;
        return ('You Lose! Scissors beats Paper');
    }
    else if (playerSelection == 'paper' && getComputerChoice == 'Paper'){
        return ('You Tied!');
    }
    else if (playerSelection == 'paper' && getComputerChoice == 'Rock'){
        playerScore += 1;
        return ('You Won! Paper beats Rock');
    }

    else if (playerSelection == 'scissors' && getComputerChoice == 'Scissors'){
        return ('You Tied!');
    }
    else if (playerSelection == 'scissors' && getComputerChoice == 'Rock'){
        computerScore += 1;
        return ('You Lose! Rock beats Scissors');
    }
    else if (playerSelection == 'scissors' && getComputerChoice == 'Paper'){
        playerScore += 1;
        return ('You Win! Scissors beats Paper');
    }
}

//make a function that takes the input from the user

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    content.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}`;
    container.appendChild(content);

    console.log(`The player's score is ${playerScore} and the computer's score is ${computerScore}`);

    if (playerScore == 5 || computerScore == 5) {
        content1.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}`;
        container.appendChild(content1);
    }
});


const container = document.querySelector('#container');

const content = document.createElement('div');
const content1 = document.createElement('div');
content.classList.add('content');
content1.classList.add('content1');
content.textContent = `The player's score is ${playerScore} and the computer's score is ${computerScore}`;

container.appendChild(content);
// console.log($(playerScore))
//make a function that run the playRound function 5 times

// function game(){
    
//     let playerSelection = playerSelectionFn();
//     let computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));

// }

// game();

console.log("hello");

if (playerScore < computerScore) {
    console.log('The Player has Won');
} else if(playerScore == computerScore){
    console.log("It's a Tie");
} else {
    console.log('The computer has won');
}