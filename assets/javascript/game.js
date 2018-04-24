var computerGuess = ''
var userGuess = ''
var wins = "asdf"
var losses = 0
var userGuessesLeft = 26
var userGuessesSoFar = []
var word = 'ALPHABET'
var gameBoardDisplay = document.getElementById('game-board')
var gameBoard = ['___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ']


play = () => {
	if (word === "--------") {
		endGame()
	} else {
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
}

startingGameBoard = () => {
	gameBoard = ['___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ',]
}

getComputerGuess = () => {
	let letters = word.split('').filter((element, index) => element != '-')
	let letter = letters[Math.floor(Math.random() * letters.length)];
	let index = word.split('').findIndex(el => el === letter)
	computerGuess = word[index]
	console.log('index', index);
	console.log('computerGuess', computerGuess);
}

matchGuesses = () => {
	let updatedWord = []
	if (userGuess == computerGuess) {
		let index = word.split('').findIndex(el => el === userGuess)
		gameBoard[index] = userGuess
		gameBoardDisplay.textContent = gameBoard
		updatedWord = word.split('')
		updatedWord[index] = '-'
		word = updatedWord.join('')
		console.log('word: ', word);
		play()
	} else {
		play()
	}
}

updateUserGuessesDisplay = () => {
	document.getElementById('guessesSoFar').textContent = userGuessesSoFar;
}

endGame = () => {
	gameBoardDisplay.textContent = "Game over."
}

startingGameBoard()
play()