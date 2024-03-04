let level = 1;
let maxAttempts;
let targetScore;
let currentAttempts = 0;
let currentScore = 0;
let gameEnded = false;

const levelDisplay = document.getElementById("level");

const attemptsDisplay = document.getElementById("maxAttempts");
const currentAttemptsDisplay = document.getElementById("currentAttempts");

const targetScoreDisplay = document.getElementById("targetScore");
const currentScoreDisplay = document.getElementById("currentScore");

const scoreCircle = document.getElementById("scoreCircle");
const rollButton = document.getElementById("rollButton");


// start new game 
function startGame() {
  alert("New Game start!");

  currentAttempts = 0;
  currentScore = 0;
  gameEnded = false;

  clearContainer();
  startLevel();
}


// container clear
function clearContainer() {
  const container = document.getElementById("container"); // Assuming you have an existing element with the ID 'container'
  container.innerHTML = ""; // This will remove all child elements inside the container.
}



// circle create and call 
function callCirlcle() {
  const newDiv = document.createElement("span");

  // Set attributes or properties for the new element
  newDiv.id = "myNewDiv";

  // Style the new element (using the style property)
  newDiv.style.height = "25px";
  newDiv.style.width = "25px";
  newDiv.style.backgroundColor = "#1572fd56";
  newDiv.style.borderRadius = "50%";
  newDiv.style.display = "inline-block";
  const container = document.getElementById("container"); // Assuming you have an existing element with the ID 'container'

  container.appendChild(newDiv);
}

function startLevel() {

    clearContainer();
  maxAttempts = Math.floor(Math.random() * 25) + 1;
  targetScore = Math.floor(Math.random() * 50) + 1;

  currentAttempts = 0;
  currentScore = 0;
  gameEnded = false;

  levelDisplay.textContent = level;

  attemptsDisplay.textContent = maxAttempts;
  currentAttemptsDisplay.textContent = currentAttempts;

  targetScoreDisplay.textContent = targetScore;
  currentScoreDisplay.textContent = currentScore;

  scoreCircle.textContent = diceRoll;

  rollButton.disabled = false;


}

function rollDice() {
  if (!gameEnded) {
    const diceRoll = Math.floor(Math.random() * 5) + 1;

    if( currentScore +diceRoll <= targetScore) 
    currentScore += diceRoll;


    currentAttempts++;

    scoreCircle.textContent = diceRoll;
    currentAttemptsDisplay.textContent = currentAttempts;
    currentScoreDisplay.textContent = currentScore;

    for (let i = 0; i < diceRoll; i++) {
      callCirlcle();
    }

    if (currentScore == targetScore) {
      alert("You Win! Now move to the next LEVEL.");
      level++;
      startLevel();
    }

    if (currentAttempts >= maxAttempts) {
      gameEnded = true;
      alert("You lose! You reached the maximum number of attempts.");
      level = 1;

      startGame();
    }
  }
}

rollButton.addEventListener("click", rollDice);

// Start the game
startGame();

