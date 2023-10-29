
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


function playRound(playerSelection) {

    let result ='';

    let score =  {
        wins: 0,
        losses: 0,
        ties: 0
    };

    for (let i = 1; i <= 5; i++) {

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
        
    }
        /* 5 game score tracker and winner output */

    if (score.wins >= 3) {
        console.log(score);
        return 'You Won';
    } else if (score.losses >= 3) {
        console.log(score)
        return 'You Lose';
    } else if (score.ties >= 3) {
        console.log(score);
        return 'Scores Tied';
    } else {
        console.log(score);
        return 'No one wins';
    }  

}






const playerSelection = prompt('Enter Rock, Paper, or Scissors:');

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

