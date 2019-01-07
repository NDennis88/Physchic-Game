var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var loses = 0; 
var guessesleft = 9;
var guesssessofar = [];


document.onkeypress = function(event) {
    var keys = event.key;
    var computerguess = letters[Math.floor(Math.random() * letters.length)];
    guesssessofar.push(keys)

    if(keys === computerguess) {
        alert("Great minds think alike!")
        wins++;
       
    }
    else {
        alert("Your phsychic abilities require more practice!")
        guessesleft--;
        
    }
    if(guessesleft === 0) {
        alert("How about we start over?")
        loses++;
        guessesleft = 9;
        guesssessofar.length = 0;

    }
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('loses').innerHTML = "Loses: " + loses;
    document.getElementById('guessesleft').innerHTML = "Guesses Left: " + guessesleft;
    document.getElementById('guessessofar').innerHTML = "Your Guesses Left: " + guesssessofar;
}

resetgame = function () {
   guessesleft  = 0;
   guessessofar = [];
   computerguess = letters[Math.floor(Math.random() * letters.length)];
   

}