const hands = ["rock", "paper", "scissors"]

function computerPlay() {
	return hands[Math.floor(Math.random()*3)]
}

function play(playerSelection) {
	computerSelection = computerPlay();
	let winner = "";
	if ((playerSelection == "rock") && (computerSelection == "scissors")) {
		winner = "player";
	}
	else if ((playerSelection == "rock") && (computerSelection == "paper")) {
		winner = "comp";
	}
	else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
		winner = "comp";
	}
	else if ((playerSelection == "paper") && (computerSelection == "rock")) {
		winner = "player";
	}
	else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
		winner = "player";
	}
	else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
		winner = "comp";
	}
	updateScore(winner);
}

function updateScore(winner) {
	if (winner === "player") {
		document.getElementById("score").innerHTML = `Score: ${++pscore}-${cscore}`;
	}
	else if (winner === "comp") {
		document.getElementById("score").innerHTML = `Score: ${pscore}-${++cscore}`;
	}
}
function reset() {
	pscore = 0;
	cscore = 0;
	document.getElementById("score").innerHTML = `Score: 0-0`;
}

let pscore = 0;
let cscore = 0;