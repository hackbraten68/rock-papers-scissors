let signHand = ["rock", "paper", "scissors"];
let userMove = 0
let botRandom = Math.floor(Math.random() * 3)
const startNewGame = 0
const userRock = document.getElementById("rock")
const userPaper = document.getElementById("paper")
const userScissors = document.getElementById("scissors")



// start the game

// 3 buttons für user
// 
// user button rock:
userRock.addEventListener("click", function() {
    userMove = 0
    console.log("You choose: ROCK!")
    botRandomMove()
    console.log(botRandomMove())
    whoWonRound()
    console.log(whoWonRound())
})
// user button paper:
userPaper.addEventListener("click", function() {
    userMove = 1
    console.log("You choose: PAPER!")
    botRandomMove()
    console.log(botRandomMove())
    whoWonRound()
    console.log(whoWonRound())
})
// user button scissors:
userScissors.addEventListener("click", function() {
    userMove = 2
    console.log("You choose: SCISSORS!")
    botRandomMove()
    console.log(botRandomMove())
    whoWonRound()
    console.log(whoWonRound())
})

// computer generiert random move
// 
function botRandomMove() {
    
        if (botRandom === 0) {
            return "Bot choose: ROCK!"
        }   else if (botRandom === 1) {
            return "Bot choose: PAPER!"
        }   else if (botRandom === 2) {
            return "Bot choose: SCISSORS!"
        }
}


// wer gewinnt die runde ?
// 
function whoWonRound() {
    // USER CHOOSE ROCK
    if (userMove === 0 && botRandom === 2) {
        return "ROCK beats SCISSORS"
    } else if (userMove === 0 && botRandom === 1) {
        return "PAPER beats ROCK"
    } else if (userMove === botRandom) {
        return "TIE GAME !"
    }
    // USER CHOOSE PAPER
    if (userMove === 1 && botRandom === 0) {
        return "PAPER beats ROCK"
    } else if (userMove === 1 && botRandom === 2) {
        return "SCISSORS beats PAPER"
    } else if (userMove === botRandom) {
        return "TIE GAME !"
    }
    // USER CHOOSE SCISSORS
    if (userMove === 2 && botRandom === 1) {
        return "SCISSORS beats PAPER"
    } else if (userMove === 2 && botRandom === 0) {
        return "ROCK beats SCISSORS"
    } else if (userMove === botRandom) {
        return "TIE GAME !"
    }
}
// counter score wer vorne liegt
// nach 3 runden wer gewinnt das game


