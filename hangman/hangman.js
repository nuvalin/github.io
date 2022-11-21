var words = [

  "javascript",

  "monkey",

  "amazing",

  "pancake",

  "robot",

  "computer"

];


var word = pickWord();

var answerArray = setupAnswerArray(word);




var remainingLetters = word.length;

var noOfRemainingGuesses = 
15;

while (remainingLetters > 
0 && noOfRemainingGuesses > 
0) {

  // Game code goes here

  // Show the player their progress

  showPlayerProgress(answerArray);


  // Take input from the player  

  var guess = getGuess();


  noOfRemainingGuesses--;

  if (guess === 
null) {

      break;

  } else 
if (guess.length !== 1) {

      alert("Please enter a single letter.");

  } else {

      // Update the game state with the guess

      var lettersUpdated = updateGameState(guess, word, answerArray);

      remainingLetters -= lettersUpdated;

  }

}


showAnswerAndCongratulatePlayer(answerArray);



function pickWord() {

  // Return a random word

  return words[Math.floor(Math.random() * words.length)];


}



function setupAnswerArray(word) {

  // Return the answer array

  var answArray = [];

  for (var i =
0; i < word.length; i++) {

      answArray[i] = "_";

  }

  return answArray;

}



function showPlayerProgress(answerArray) {

  // Use alert to show the player their progress

  alert(answerArray.join(" "));

}



function getGuess() {

  // Use prompt to get a guess

  var message = 
"Guess a letter, or click Cancel to stop playing. You have " + noOfRemainingGuesses +
" guesses left.";

  return prompt(message).toLowerCase();

}



function updateGameState(guess, word, answerArray) {

  // Update answerArray and return a number showing how many

  // times the guess appears in the word so remainingLetters

  // can be updated

  var lettersChanged = 
0;

  for (var j =
0; j < word.length; j++) {

      if (word[j] === guess && answerArray[j] ==
"_") {

          answerArray[j] = guess;

          lettersChanged++;

      }

  }

  return lettersChanged;

}



function showAnswerAndCongratulatePlayer(answerArray) {

  // Use alert to show the answer and congratulate the player

  alert(answerArray.join(" "));

  if (remainingLetters == 
0) {

      alert("Good job! The answer was " + word);

  } else {

      alert("Sorry you ran out of guesses. The answer was " + word);

  }

}

