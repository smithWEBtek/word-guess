var computerLetter = ''
var userGuess = ''
var wins = "asdf"
var losses = 0
var userGuessesLeft = 26
var userGuessesSoFar = []
var word = 'Alphabet'

setWins = () => {
	document.getElementById('wins').innerText = 'asdf'
}

setLosses = () => {
	document.getElementById('losses').innerText = 'zxcv'
}

computerGuess = () => {
	let range = word.length
	guess = (range) => {
		return Math.floor(Math.random() * Math.floor(range));
	}
	console.log(guess(range));
}

userGuess = () => {
	console.log(document.onkeyup)
}








// setWins()
// setLosses()