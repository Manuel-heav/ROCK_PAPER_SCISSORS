const playerImage = document.querySelector("#playerUrl");
const computerImage = document.querySelector("#computerUrl");
const resultText = document.querySelector("#resultText");
const scissorBtn = document.querySelector(".scissorBtn");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");

let player;
let computer;
let result;
let computerUrl;

const imgArray = [
  {
    imgUrl: "https://www.sickchirpse.com/wp-content/uploads/2011/11/rock.jpeg",
    value: "ROCK",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Rock-paper-scissors_(paper).png",
    value: "PAPER",
  },
  {
    imgUrl:
      "https://www.orjon.com/rockpaperscissors/images/hand_played_scissors.png",
    value: "SCISSOR",
  },
];

scissorBtn.addEventListener("click", () => {
  const scissorUrl = scissorBtn.children[0].getAttribute("src");
  playerImage.setAttribute("src", scissorUrl);
  player = "SCISSOR";
  computerTurn();
});

rockBtn.addEventListener("click", () => {
  const rockUrl = rockBtn.children[0].getAttribute("src");
  playerImage.setAttribute("src", rockUrl);
  player = "ROCK";
  computerTurn();
});

paperBtn.addEventListener("click", () => {
  const paperUrl = paperBtn.children[0].getAttribute("src");
  playerImage.setAttribute("src", paperUrl);
  player = "PAPER";
  computerTurn();
});

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3);
  computerUrl = imgArray[randNum].imgUrl;
  computerImage.setAttribute("src", computerUrl);
  computer = imgArray[randNum].value;
  resultText.textContent = checkWinner();
}

function checkWinner() {
  if (player == computer) {
    return "DRAW!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "YOU WIN!" : "YOU LOSE!";
  } else if (computer == "PAPER") {
    return player == "SCISSOR" ? "YOU WIN!" : "YOU LOSE!";
  } else if (computer === "SCISSOR") {
    return player === "ROCK" ? "YOU WIN!" : "YOU LOSE!";
  }
}
