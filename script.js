
let playerScore = 0;
let computerScore = 0;
let attempts = 0;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random()* choices.length)]
}

function playRound() {
    attempts++;
    let result = "";
    const playerInput = prompt("Rock, Paper, or Scissors?", "rock"); 
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = computerPlay();
    console.log('Computer Selected:', computerSelection);
    console.log('Player Selected:', playerSelection);

    if (playerSelection == computerSelection){
        result = 'You both chose '+ playerSelection + '. Tie!';
        console.log('You tied!');
        playRound();
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === "scissors") ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ){
        computerScore += 1;
        result = (computerSelection + ' beats ' + playerSelection + '. Compy wins!');
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore += 1;
        result = playerSelection + ' beats ' + computerSelection + '. You win!';
    }
    else if (!choices.includes(playerSelection)) {
        console.log(`Choice '${playerSelection}' is not a valid choice!`);
        //How do I write this so that if they type anything else i.e. "gun" it would return this message?
        result = 'That\'s not a thing';
        playRound();
    }
    
    document.getElementById('demo').innerHTML = result
    document.getElementById('playerScore').innerHTML = ("Player Score = " + playerScore);
    document.getElementById('computerScore').innerHTML = ("Computer Score = " + computerScore); 
}


function playGame () {
    for (let i = 0; i < 5; i++) { 
        playRound();                  
    }
}


playGame();

console.log('Computer Score:', computerScore);
console.log('Player Score:', playerScore);
console.log(attempts);