const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['rock', 'paper', 'scissors'];

const handleClick = (e) => {
  const clickedButton = e.target.innerHTML;
  const randomComputerChoice =
    choices[Math.floor(Math.random() * choices.length)];
  getResult(clickedButton, randomComputerChoice);
};

choices.forEach((choice) => {
  const button = document.createElement('button');
  button.innerHTML = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay.appendChild(button);
});

const getResult = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice} and you WIN`;
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice} and you LOSE`;
      break;
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice} and IT'S A DRAW`;
      break;
  }
};
