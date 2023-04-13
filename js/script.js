function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById('output').innerHTML = 'Please enter a valid number between 1 and 100.';
  } else if (userGuess === randomNumber) {
    document.getElementById('output').innerHTML = `Congratulations! You guessed my number (${randomNumber}) correctly!`;
  } else {
    document.getElementById('output').innerHTML = `Sorry, you guessed ${userGuess}. The correct number was ${randomNumber}.`;
  }
}
