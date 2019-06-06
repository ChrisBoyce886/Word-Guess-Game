$(document).ready(function RunGame() {
  
 
  //List of words that will be guessed in the game
  var wordList = [
    "rodeo",
    "cowboy",
    "horse",
    "mustang",
    "cattle",
    "spur",
    "lasso",
    "tobacco",
    "shotgun",
    "pistol",
    "cowgirl",
    "mexico",
    "texas",
    "arizona",
    "oklahoma",
    "kansas",
    "farm",
    "crops",
    "saddle",
    "wrangler",
    "saloon",
    "whiskey",
    "western",
    "badlands",
    "tumbleweeds",
    "desert",
    "chaps",
    "outlaw",
    "sheriff",
    "steer",
  ];

  //Define variables to be used
  var underScore = [];
  var guessesLeftNumber = document.getElementById("guessesLeftNumber").textContent = 10; 
  var guessesLeft = parseInt(guessesLeftNumber);
  var lettersGuessed = document.getElementById("lettersGuessed");
  var lettersGuessed = []; 

  //Declare wins and losses variables as integers
  var wins = parseInt();
  var losses = parseInt();
  
  //Set wins and losses variable to display on HTML page
  var wins = document.getElementById("wins").textContent;
  var losses = document.getElementById("losses").textContent;  

  //Randomly select word from WordList    
  var randomWord = [Math.floor(Math.random() * wordList.length)];

  //Change randomly selected word to UpperCase letters
  var wordToGuess = wordList[randomWord].toUpperCase();

  //****FOR TESTING ONLY****
  //****Delete this line when publishing game****
  console.log(wordToGuess);
    

////////////////////////////////////////////////////////////////////////////////////////////////////////
 

  //Create For Loop that determines length of the randomly selected word and then replaces each letter with an underscore.
  for (var i = 0; i < wordToGuess.length; i++) {
    underScore.push("_");    
    console.log(underScore);
  }
  
  document.getElementById("underscore").textContent = underScore.join(' ');
  

////////////////////////////////////////////////////////////////////////////////////////////////////////


  //Create Function to prevent Enter Button from refreshing the whole game. 
  document.getElementById("guessButton").onsubmit = function Enter(e) {
    if (e.keyCode == 13) {
      return false;
    }
  };


///////////////////////////////////////////////////////////////////////////////////////////////////////


  //On-Click Function executed when submit button is pressed:
document.getElementById("guessButton").onclick = function buttonClick(event) {  
 
  //Prevent page from refreshing page data on button clicks 
  event.preventDefault();
  
  //Change "Enter A Letter To Begin" after letter is entered. 
  document.getElementById("press-start").textContent = "All words are 'Country Western' related";
  
  //Grab the value of the users guessed letter and convert to Uppercase
  var userInput = document.getElementById("guessLetter").value.toUpperCase();
  console.log(userInput);
  
  //Clear form input box after submit button is pressed
  document.getElementById("guessLetter").value = "";
  
  //Split the word to guess into individual letters
  var wordLetters = wordToGuess.split("");
  console.log(wordLetters);

  //Create function to alert user to enter alphabetic characters only
  function Letters(inputtext){ 
      var letters = /^[A-Za-z]+$/;
        if(inputtext.match(letters)){
          return true;
        }
        else {
          alert('Please enter letters only');
          return false;
        }
  //End of Letters function  
  };
  //Call Letters
  Letters(userInput);

////////////////////////////////////////////////////////////////////////////////////////////////////////


  //Run Function to check for the users letter input within the word to guess.
  function checkLetter(letter){
    var letterInWord = false;
     
  //Run loop to see if the letter is in the word change the letterInWord variable to true
  for (var i = 0; i <= wordLetters.length; i++) {      
    if (wordToGuess[i] === letter) {       
        letterInWord = true;
    }
  }
  //If the letter is in the word, run a loop to figure out where in the word it is and replace the underscore with the letter
    if (letterInWord) {
      for (var j = 0; j <= wordLetters.length; j++) {
        if (wordToGuess[j] == letter){
            underScore[j] = letter;            
        }
      }
      document.getElementById("underscore").textContent = underScore.join(' ')
        console.log(underScore);
    }
      
  //If letter is not in the word, push letter to Wrong Guesses box in HTML 
        else {
        lettersGuessed.push(letter);
        document.getElementById("lettersGuessed").textContent = lettersGuessed.join(", ");
        console.log(lettersGuessed); 

  //Subtract 1 from the number of guesses left
        guessesLeft--;
        document.getElementById("guessesLeftNumber").textContent = guessesLeft;
        console.log(guessesLeft);
        };
      
  //End of checkLetter Function      
  };
     

/////////////////////////////////////////////////////////////////////////////////////////////////////////


  //Run function to show wins and losses and update when necessary
  function winloss() {  
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
  
  //Check to see if the word has been spelled completely, if so add +1 to wins column on HTML, send "You Won" alert, restart game
    if (wordLetters.toString() === underScore.toString()) {
      wins++;
      document.getElementById("wins").textContent = wins; 
      
      //Play losing audio clip 
      var audio = new Audio();
      audio.src = "../HW3/Assets/Sounds/Winner.mp3";
      audio.play();

      //Alert and ask if user wants to play again; set 1 second delay to allow sound to play first
      setTimeout(function(){
      alert("Good Job! You spelled " + wordToGuess + " correctly! Let's Play again!");
      confirm("Would You like to start a New Game?!");
      }, 1000);     
      
      //Reset HTML displays
      document.getElementById("press-start").textContent = "Please enter a letter to begin";
      document.getElementById("lettersGuessed").textContent = "" ;
      RunGame();  
    }
  
  //Check to see if the user runs out of guesses left, if so alert "You Lost", add +1 to losses column, restart game
    else if (guessesLeft === 0) {
      losses++;
      document.getElementById("losses").textContent = losses; 

      //Play winning audio clip 
      var audio = new Audio();
      audio.src = "../HW3/Assets/Sounds/Loser.mp3";
      audio.play();

      //Alert and ask if user wants to play again; set 1 second delay to allow sound to play first
      setTimeout(function(){
      alert("You ran out of turns to guess the word " + wordToGuess + ". Let's give it another shot!");
      confirm("Would You like to start a New Game?!");
      }, 1000); 
      
      //Reset HTML displays
      document.getElementById("press-start").textContent = "Please enter a letter to begin";
      document.getElementById("lettersGuessed").textContent = "" ;
      RunGame();
    }
  
  //End of winloss Function  
  };

  //Call functions
  checkLetter(userInput); 
  winloss();

  //End of On-Click function
};
  //End of Document-Ready Run-Game function
}); 




