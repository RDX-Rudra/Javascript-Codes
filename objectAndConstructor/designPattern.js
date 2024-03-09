// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function printName(player) {
  console.log(player.name);
}

function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner!");
}
