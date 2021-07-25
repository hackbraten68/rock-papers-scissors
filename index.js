let signHand = ["rock", "paper", "scissors"];
const startNewGame = 0
const userRock = document.getElementById("rock")
const userPaper = document.getElementById("paper")
const userScissors = document.getElementById("scissors")



// start the game

// 3 buttons für user
// 
// user button rock:
userRock.addEventListener("click", function() {
    console.log("button clicked!")
})
// user button paper:
userPaper.addEventListener("click", function() {
    console.log("button clicked!")
})
// user button scissors:
userScissors.addEventListener("click", function() {
    console.log("button clicked!")
})

// computer generiert random move
// 
function botRandomMove() {
    return Math.floor(Math.random() * 3)
}

console.log(botRandomMove())
// wer gewinnt die runde ?
// counter score wer vorne liegt
// nach 3 runden wer gewinnt das game


