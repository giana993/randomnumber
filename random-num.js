
let win = false;

let randomNumber = 10;

let firstGuess = Number (prompt("Please enter your first guess"));


 if (firstGuess > randomNumber) {
     console.log(alert("You lose! Guess lower next time"));
 }   else if (firstGuess < randomNumber) {
    console.log(alert("You lose! Guess higher next time"));
 } else {
    console.log(alert("You win!"));
    win = true;
 }

if (win === false) {
    let secondGuess = Number (prompt("Please guess a second time..."));
    if (secondGuess > randomNumber) {
        console.log(alert("You lose! Guess lower next time"));
    }   else if (secondGuess < randomNumber) {
        console.log(alert("You lose! Guess higher next time"));
    }
       else {
        console.log(alert("You win!"));
        win = true;
}
}
 
if (win === false) {
let thirdGuess = Number (prompt("Please guess a final time"));
    if (thirdGuess === randomNumber) {
    console.log(alert("You win!"))
}       else {
    alert ("You lose! The answer was 10. Better luck next time.");
}
}
// asdfgh
// dfgh
// ghkk





var PROMPT_USER;
var FILL_ME_IN;
var USER_MESSAGE_HERE;
var CHECK_ATTEMPT_EQUALS_GUESS;