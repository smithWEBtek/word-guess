var computerGuess = ''
var userGuess = ''
var wins = "asdf"
var losses = 0
var userGuessesLeft = 26
var userGuessesSoFar = []
var word = 'ALPHABET'
var gameBoardDisplay = document.getElementById('game-board')
var gameBoard = ['___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ', '___ ']

// play starts
// board is blank
// word is full
// computer guesses from existing array of word letters

// user types a guess
// userGuess is compared to computerGuess
// if matched:
// gameBoard is updated
// word is updated with replaced character "-"

// win is evaluated:
// (if word === "------") 
// endGame()
// resetGameBoard()
// show Game Over message
// else (if not a win and not game ended)
// computerGuess is updated
// else
// userGuessesSoFar is incremented by 1
// gameBoard remains unchanged



play = () => {
	until(word === "--------") {
		play()
		if (userGuess === computerGuess) {

		}

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