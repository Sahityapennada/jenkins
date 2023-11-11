const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let gamePlaying = true;

const diceDOM = document.querySelector('.dice');

function rollDice() {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = 'block';
    diceDOM.src = "dice6.JPEG";

    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}

function holdScore() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
      diceDOM.style.display = 'none';
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
}

function nextPlayer() {
  roundScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = '0';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-panel:nth-child(1)').classList.toggle('active');
  document.querySelector('.player-panel:nth-child(2)').classList.toggle('active');
  diceDOM.style.display = 'none';
}

function newGame() {
  scores[0] = 0;
  scores[1] = 0;
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-panel:nth-child(1)').classList.remove('active');
  document.querySelector('.player-panel:nth-child(2)').classList.remove('active');
  document.querySelector('.player-panel:nth-child(1)').classList.add('active');
  diceDOM.style.display = 'none';
}

document.getElementById('btn-roll').addEventListener('click', rollDice);
document.getElementById('btn-hold').addEventListener('click', holdScore);
document.getElementById('btn-new').addEventListener('click', newGame);