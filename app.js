const userScore_span = document.querySelector('#user-score');
const robotScore_span = document.querySelector('#robot-score');
const userSelect_span = document.querySelector('#user-selection');
const robotSelect_span = document.querySelector('#robot-selection');
const resultText = document.querySelector('.result > p');
const rockChoice = document.querySelector('#Rock');
const paperChoice = document.querySelector('#Paper');
const scissorsChoice = document.querySelector('#Scissors');

let userScore = 0;
let robotScore = 0;

const getRobotChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const win = (userChoice, robotChoice) => {
  userScore++;
  userScore_span.textContent = userScore;

  userSelect_span.textContent = userChoice;
  robotSelect_span.textContent = robotChoice;

  if(userChoice === 'Rock' && robotChoice === 'Scissors') {
    resultText.textContent = `Rock breaks Scissors. You win🔥🥳`;
  } else if (userChoice === 'Paper' && robotChoice === 'Rock') {
    resultText.textContent = `Paper covers Rock. You win🔥🥳`;
  } else if (userChoice === 'Scissors' && robotChoice === 'Paper') {
    resultText.textContent = `Scissors cuts Paper. You win🔥🥳`;
  }
  console.log(document.getElementById(userChoice));
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

const lose = (userChoice, robotChoice) => {
  robotScore++;
  robotScore_span.textContent = robotScore;

  userSelect_span.textContent = userChoice;
  robotSelect_span.textContent = robotChoice;
  
  resultText.textContent = `${userChoice} loses to ${robotChoice}. You lose💩😟`

  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

const draw = (userChoice, robotChoice) => {
  userSelect_span.textContent = userChoice;
  robotSelect_span.textContent = robotChoice;
  resultText.textContent = `${userChoice} equals ${robotChoice}. It's a draw.`;

  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}
const game = (userChoice, robotChoice) => {
  switch(userChoice + robotChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice, robotChoice);
      break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      lose(userChoice, robotChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice, robotChoice);
      break;
  }
}

function main() {
  rockChoice.addEventListener('click', () => {
    game('Rock', getRobotChoice());
  });

  paperChoice.addEventListener('click', () => {
    game('Paper', getRobotChoice());
  });

  scissorsChoice.addEventListener('click', () => {
    game('Scissors', getRobotChoice());
  })
}

main();


