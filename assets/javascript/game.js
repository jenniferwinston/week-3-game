
// Global Variables---------

// Array of words
var wordList = ["fireworks", "boating", "hotdogs", "sunscreen", "sunset", "vacation", "flipflops", "barbeque"];

var chosenWord = "";
var lettersinChosenWord = [];
var numBlanks = 0;
var blanksandSuccess = [];
var wrongGuess = [];

//Counters
var winCount = 0;
var lossCount = 0;
var numGuesses = 9;


//Functions ----------------

function startGame() {
  //randomly select word, split into letters, count the length
  chosenWord = wordList[Math.floor(Math.random()* wordList.length)];
  lettersinChosenWord = chosenWord.split("");
  numBlanks = lettersinChosenWord.length;
    console.log(chosenWord);
    console.log(numBlanks);

  //reset variables on each game
  numGuesses = 9;
  blanksandSuccess = [];
  wrongGuess = [];

      // loop through word and replace with letter
       for (var i=0; i < numBlanks; i++){
          blanksandSuccess.push("_");
       }  
      console.log(blanksandSuccess);

      //print in the html
      document.getElementById("guessesLeft").innerHTML = numGuesses;
      document.getElementById("wordBlanks").innerHTML = blanksandSuccess.join(" ");
      document.getElementById("wrongGuesses").innerHTML = wrongGuess.join(" ");

}

// check if letter exsists in word
function checkLetters(letter) {
    var letterInWord = false;
      for (var i=0; i < numBlanks; i++) {
          if(chosenWord[i] == letter) {
          letterInWord = true;
        }
      }

      if(letterInWord) {
          for (var i =0; i < numBlanks; i++){
                if(chosenWord[i] == letter) {
                  blanksandSuccess[i] = letter;
                }
          } console.log(blanksandSuccess);
      }
      else {
              if(wrongGuess.indexOf(letter)> -1){
                console.log("Letter already guessed");
              } else{
          wrongGuess.push(letter);
          numGuesses--;
        }
      }
}


// game complete function
function gameComplete() {
    // update html to show updates
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordBlanks").innerHTML = blanksandSuccess.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuess.join(" ");

    // all letters guessed correct
    if (lettersinChosenWord.toString() == blanksandSuccess.toString()) {
          winCount++;
          alert("You win!");
          document.getElementById("winCounter").innerHTML = winCount;
          startGame();
    }

          else if(numGuesses == 0){
              lossCount++;
              alert("You Lost.");
              document.getElementById("lossCounter").innerHTML = lossCount;
              startGame();
              console.log(lossCount);
              console.log(winCount);
          }
}




// Start game process ---------

startGame();

// on key clicks capture
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    gameComplete();
}


