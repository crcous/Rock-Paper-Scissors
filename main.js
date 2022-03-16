const getUserChoice =  function (userInput)  { 
    userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 
        'scissors' || userInput === 'bomb') {
            return userInput;
    } else { 
        return 'error'; 
    };
    };
   
//    console.log(getUserChoice('rock'));


let getComputerChoice = () => {
    var number = Math.floor(Math.random() * 3);  
  if (number === 0) {
      return 'rock';
  } else if (number === 1) {
      return 'paper';
  } else if (number === 2) {
      return 'scissors';
  } else {
      return 'error';
  };
};    
// console.log(getComputerChoice());

let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie';
    } 
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'computer won';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'user won';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'computer won';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'user won';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'computer won';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'user won';
    }
    if (userChoice === 'bomb' && computerChoice === 'rock') {
        return 'user won';
    }  else if(userChoice === 'bomb' && computerChoice === 'paper') {
            return 'user won';
    }   else if(userChoice === 'bomb' && computerChoice === 'scissors') {
        return 'user won';
    }
    
}



let playGame = () => {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();

console.log(determineWinner(userChoice, computerChoice));

console.log(userChoice);
console.log(computerChoice);

return playGame;
}
playGame();
