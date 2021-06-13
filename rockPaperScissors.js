// Rock, Paper, Scissors

// Get the user's choice

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
  } else {
      console.log('Oops! I\'ve never seen that one before. Please enter a valid option.')
  }
};

// Get the computer's choice

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
  }
};

// Compare the two choices

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
  }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return 'You lost! Paper covers rock!'
    } else {
        return 'You win! Rock destroys scissors!'
    }
  }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lost! Scissors cuts paper!'
    } else {
        return 'You win! Paper covers rock!'
    }
  }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lost! Rock destroys scissors!'
    } else {
        return 'You win! Scissors cuts paper!'
    }
  }
    if (userChoice === 'bomb') {
      return 'You won! The secret bomb destroys everything!'
    }
};

// Start the program and display the results

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
