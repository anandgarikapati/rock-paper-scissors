const userChoice = (input) => {
    if(input === 'rock' || input === 'paper' || input === 'scissor') {
        return input
    }
}

const computerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        return 'rock'
    } else if(randomNumber === 1) {
        return 'paper'
    } else if (randomNumber === 2) {
        return 'scissor'
    }
}

const winner = (userChoice, computerChoice) => {
    
    if(userChoice === computerChoice) {
        return 'game was tie'
    }
    
    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'computer won the game'
        } else {
            return 'user won the game'
        }
    }
    
    if(userChoice === 'paper') {
        if(computerChoice === 'scissor') {
            return 'computer won the game'
        } else {
            return 'user won the game'
        }
    }
    
    if(userChoice === 'scissor') {
        if(computerChoice === 'rock') {
            return 'computer won the game'
        } else {
            return 'user won the game'
        }
    }
    
}

startGame = () => {
    const user = userChoice('rock')
    const computer = computerChoice()

console.log(`user choice is ${user} and computerchoice is ${computer}`)

console.log(winner(user,computer))
}

startGame()







