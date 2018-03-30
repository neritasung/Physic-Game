//  Global Variables

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var wins = 0;
var loss = 0;
var guessRemaining = 9;
var currentGuess = [];
var computerGuess = ""; 

document.onkeyup = function(event){

   // Randomly a character from the options array. This is the Computer's guess.
   var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
   console.log(computerChoice[0]);

   // Identify which key was pressed.
   var userGuess = event.key;
   currentGuess.push(userGuess);
   document.getElementById("user-choices").innerHTML = userGuess; //To display guess so far onto the screen.

   if (userGuess === computerGuess) {
       wins++;
       document.getElementById('win').innerHTML = wins; //Display wins number onto the screen.
       currentGuess = []; //Clearing an array to start new game.
       document.getElementById('left-guesses').innerHTML = guessRemaining;
   }
   else{
    guessRemaining--; //If user guessed incorrect character we will decrement guessRemaining by 1.
       document.getElementById('left-guesses').innerHTML = guessRemaining; //Displaying guessRemaining onto the screen after decrementing by 1.

       if(guessRemaining===0) //Condition to check guessRemaining equals to 0 or no.
       {
           loss++; //if guessRemaining equals to 0 increment loss by 1.
           document.getElementById('losses').innerHTML = loss;
           currentGuess = []; //Clearing an array to start new game after loosing it.
           guessRemaining = 9; //Reset guessRemaining to original number after loosing the game.
       }    
   }
};