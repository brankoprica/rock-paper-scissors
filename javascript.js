const choices = ["rock", "paper", "scissors"]

let getComputerChoice = () => choices[(Math.floor((Math.random() *3)+1) -1)]
let computerChoice = getComputerChoice()
yourScore=0
computerScore=0
ties=0

let userChoice = ''
let i=1
let playRound = () => {   
        getComputerChoice()

        computerChoice=getComputerChoice()
        if (i <=5){
            if (computerChoice === userChoice){
                console.log(`You both chose ${userChoice}! Its a tie!`)
                ties ++
            } else if (computerChoice === "rock" && userChoice === "scissors"){
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You lose!`)
                computerScore ++
            } else if (computerChoice === "rock" && userChoice === "paper") {
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You win!`)
                yourScore ++
            } else if (computerChoice === "paper" && userChoice === "rock") {
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You lose!`)
                computerScore ++
            } else if (computerChoice === "paper" && userChoice === "scissors") {
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You win!`)
                yourScore ++
            } else if (computerChoice === "scissors" && userChoice === "rock") {
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You win!`)
                yourScore ++
            } else if (computerChoice === "scissors" && userChoice === "paper") {
                console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}. You lose!`)
                computerScore ++
            } 
            if (i <5){
                console.log(`Your score: ${yourScore}. Your Opponent's score: ${computerScore}. Ties: ${ties}`)
            }
        }
        if (i===5){
            console.log(`Game over. Your score: ${yourScore}. Your Opponent's score: ${computerScore}. Ties: ${ties}`)
            if (yourScore > computerScore) {
                console.log(`You win!`)
            } else if (yourScore < computerScore) {
                console.log(`You lose!`)
            } else {
                console.log(`It's a tie!`)
            }
        }
        if (i>5){
            alert(`You've run out of tokens.`)
        }
}
