// add a table with possible outcomes for every game

const outcomes = {
    rock: {
        rock: 0, 
        paper: -1,
        scissors: 1,
    },

    paper: {
        rock: 1,
        paper: 0,
        scissors: -1,
    },

    scissors: {
        rock: -1,
        paper: 1,
        scissors: 0,
    }
}

// creating function for computer's choice
const symbols = ['rock', 'paper', 'scissors']

const computersChoice =  arr => {
    let random = Math.floor(Math.random() * 3)
    return arr[random]
}

console.log(computersChoice(symbols))

// creating users response, promting user checking if included(case insensitive)

const userPlay = (arr) => {
    let userInput = prompt('Enter your symbol:')
    if(arr.includes(userInput.toLowerCase())) {
        return userInput.toLowerCase()
    } else {
        alert('Did you entered rock, paper or scissors?')
        return userPlay(arr)
    }
}

// userPlay(symbols)

// creating for loop, playing 5 rounds per game
let totalUser = 0;
let totalAI = 0;

for (let i = 0; i < 5;) {
    
    let user = userPlay(symbols)
    let computer = computersChoice(symbols)
    if(outcomes[user][computer] > 0) {
        console.log(`You won! ${user} beats ${computer}`)
        i++
        totalUser++
    } else if (outcomes[user][computer]) {
        console.log(`You lost! ${computer} beats ${user}`)
        i++
        totalAI++
    } else {
        console.log(`It's a draw! You both chose ${user}`)
    }

}

if(totalUser > totalAI) {
    console.log(`User won-score is: ${totalUser}:${totalAI}`)
} else {
    console.log(`AI won-score is: ${totalUser}:${totalAI}`)
}

// added comment