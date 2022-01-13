const scoresToWin = 5;
let playerScore = 0;
let computerScore = 0;
let attempts = 0;
const choices = ["rock", "paper", "scissors"];
const playerRock = document.getElementById('rockbtn');
const playerPaper = document.getElementById('paperbtn');
const playerScissor = document.getElementById('scissorbtn');

function computerPlay() {
    return choices[Math.floor(Math.random()* choices.length)]
}

function playRound(choice) {
    attempts++;
    let result = "";
    const playerSelection = choice;
    const computerSelection = computerPlay();
    const btn = document.querySelector('btn')

    if (playerSelection == computerSelection){
        result = 'You both chose '+ playerSelection + '. Tie!';
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
        result = '';
    }    
    document.getElementById('demo').innerHTML = result
    document.getElementById('playerScore').innerHTML = ("Player Score = " + playerScore);
    document.getElementById('computerScore').innerHTML = ("Computer Score = " + computerScore); 
}


function handleClick (choice) {
    playRound(choice);

    if (playerScore >= scoresToWin) {
        document.getElementById('winner').innerHTML = ("PLAYER WINS!");
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore >= scoresToWin) {
        document.getElementById('winner').innerHTML = ("COMPY WINS!");
        computerScore = 0;
        playerScore = 0;
    } 
    else if (computerScore && playerScore != scoresToWin)
        document.getElementById('winner').innerHTML = ("");
}

playerRock.addEventListener('click', () => handleClick('rock'));
playerPaper.addEventListener('click', () => handleClick('paper'));
playerScissor.addEventListener('click', () => handleClick('scissors'));
