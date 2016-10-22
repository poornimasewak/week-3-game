var wins = 0;
var losses = 0;
var missed = 0;
var guesses_left = 10;
var guesses = 10;
var guessedLetters = [];

var newGuess = null;
//array that contains letter choices
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create code for computer to randomly choose one of the options
var computerGuess = options[Math.floor(Math.random()*options.length)] ;
            
        newLetterToGuess();
        guessesLeft();

        document.onkeyup = function(event) {
             
             guesses_left-- ;
             
             // Determines which exact key was selected. Make it lowercase
             var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

             //Pushing that user letter to the array
             guessedLetters.push(userGuess);

             guessesLeft(); //function call to display number of guesses left
             guessesSoFar();  //function call to display "letters" entered by the user

            if(guesses_left > 0){
                       
                    if(userGuess === newGuess) {
                                    
                                                   wins++;
                                                   document.querySelector('#wins').innerHTML = "Wins: " + wins;
                                                   // var audioElement = document.createElement('audio');
                                                   // audioElement.setAttribute('src', 'https://www.youtube.com/embed/Gyu82WG_edM');
                                                   // // $('#wins').function(){ audioElement.play();}
                                                   // document.querySelector('#wins').innerHTML = audioElement.play();
			       		                              gameOverReset();
                     } else {

                                  missed++;
                             }
            } else if(guesses_left === 0){
                          
                        if (missed === 9) {
                                        
                                                losses++;
                                                document.querySelector('#losses').innerHTML = "Losses: " + losses;
                                                gameOverReset(); 
                                           }
                     }      
           
        }
         
          //reseting all the values to start a new game
         function gameOverReset(){
                 
  									guesses_left = 10;
  									guesses = 10;
 								   missed = 0;
  									guessedLetters = [];

  									newLetterToGuess();
  									guessesLeft();
  									guessesSoFar();
                
         } 

         //function to display number of guesses left  
         function guessesLeft() {

            document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guesses_left;

         }    

         //function call to display "letters" entered by the user, separated by commas.
         var guessesSoFar = function() {

                     document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
         };

         //function to randomly guess new letter by computer
         function newLetterToGuess() {

                     this.newGuess = this.options[Math.floor(Math.random() * this.options.length)];
         }
              
      