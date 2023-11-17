
/* Random number generator for Comp choice for RPS */
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < (1/3)) {
        return 'Rock';
    } else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
        return 'Paper';
    } else if (randomNumber >= (2/3) && randomNumber < 1) {
        return 'Scissors';
    }
}

/* Output result based on Player input and computer selection from previous function */

const playerSelectionRock = document.querySelector(".playerRock");

playerSelectionRock.addEventListener("click", () => {
    playRound('Rock');
});

const playerSelectionPaper = document.querySelector(".playerPaper");

playerSelectionPaper.addEventListener("click", () => {
    playRound('Paper');
});


const playerSelectionScissors = document.querySelector(".playerScissors");

playerSelectionScissors.addEventListener("click", () => {
    playRound('Scissors');
});

  let score =  JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };

function playRound(playerSelection) {

    let result ='';

        let computerSelection = getComputerChoice();
   
        if (playerSelection.toLowerCase() === 'rock') {
            if (computerSelection === 'Rock'){
                result = 'You Tied';
            } else if (computerSelection === 'Paper') {
                result = 'You Lose!';
            } else if (computerSelection === 'Scissors'){
                result = 'You Win!';
            }
        }   
        
        if (playerSelection.toLowerCase() === 'paper') {
            if (computerSelection === 'Rock'){
                result = 'You Win!';
            } else if (computerSelection === 'Paper') {
                result = 'You Tied';
            } else if (computerSelection === 'Scissors'){
                result = 'You Lose!';
            }
        }

        if (playerSelection.toLowerCase() === 'scissors') {
            if (computerSelection === 'Rock'){
                result = 'You Lose!';
            } else if (computerSelection === 'Paper') {
                result = 'You Win!';
            } else if (computerSelection === 'Scissors'){
                result = 'You Tied';
            }
        }
    
        /* Score Counter */

        if (result === 'You Win!') {
            score.wins += 1;
        } else if (result === 'You Lose!') {
            score.losses += 1;
        } else if (result === 'You Tied') {
            score.ties += 1;
        }

        /* 5 game score tracker and winner output */

    if (score.wins === 5) {
        console.log('You Won');
        return score;
    } else if (score.losses === 5) {
        console.log('You Lose');
        return score;
    } else if (score.ties === 5) {
        console.log('You Tied');
        return score;
    } 

    console.log(score);
}      



const computerSelection = getComputerChoice();


