const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const scoreDisplay = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let score = 0;
let moleSquareId;
let timerId;

function loadMoleOnRandomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random * squares.length)];
  randomSquare.classList.add("mole");
  moleSquareId = randomSquare.id;

  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === moleSquareId) {
        score++;
        scoreDisplay.textContent = score;
        moleSquareId = null;
      }
    });
  });
}

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
