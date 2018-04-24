var computerGuess = ''
var userGuess = ''
var wins = "asdf"
var losses = 0
var userGuessesLeft = 26
var userGuessesSoFar = []
var word = 'ALPHABET'
var gameBoardDisplay = document.getElementById('game-board')
var gameBoard = ['___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ']


startGame = () => {
	startingGameBoard()
	getComputerGuess()
	document.onkeyup = (event) => {
		document.getElementById('user-guess').textContent = event.key.toUpperCase()
		event.preventDefault()
		userGuess = document.getElementById('user-guess').textContent
		userGuessesSoFar.push(userGuess)
		console.log('userGuessesSoFar', userGuessesSoFar);
		updateUserGuessesDisplay()
		matchGuesses()
	}
}

startingGameBoard = () => {
	gameBoard = ['___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ',]
	updateGameBoard()
}

updateGameBoard = () => {
	gameBoard[userGuess] = word[userGuess]
	gameBoardDisplay.textContent = gameBoard
}

getComputerGuess = () => {
	let index = Math.floor(Math.random() * Math.floor(word.length - 1));
	computerGuess = word.split('').slice()[index];
	console.log('computerGuess: ', computerGuess);
	return word.split('').slice()[index];
}

matchGuesses = () => {
	if (userGuess.textContent == computerGuess) {
		updateGameBoard();
	} else {
		losses++
	}
}

updateUserGuessesDisplay = () => {
	document.getElementById('guessesSoFar').textContent = userGuessesSoFar;
}

startGame()