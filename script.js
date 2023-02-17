const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const result = document.querySelector('#result')
const aiSymbol = document.querySelector('#ai-symbol')
const userSymbol = document.querySelector('#user-symbol')
const roundInfo = document.querySelector('#round-info')
const infoBox = document.querySelector('#round-info-box')
const buttonHolder = document.querySelector('#button-holder')

const simbols = [...document.querySelectorAll('button')]

// creating function for computer's choice
const symbols = ['rock', 'paper', 'scissors']

const computersChoice =  arr => {
    let random = Math.floor(Math.random() * 3)
    return arr[random]
}

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

// event listeners

let numOfGames = 1;
let totalUser = 0;
let totalAI = 0;

simbols.forEach(simbol=> {

    simbol.addEventListener('click', event => {
        infoBox.classList.add('box')

        let computer = computersChoice(symbols)
        let user = simbol.value
        
        if (numOfGames === 5) {
            
            infoBox.classList.remove('box')
            userSymbol.textContent = ''
            aiSymbol.textContent = ''
            roundInfo.textContent = ''
            buttonHolder.innerHTML = '<button onClick="window.location.reload()" class="button is-primary is-large">Play again</button>'

            
            simbols.forEach(simbol => {

                simbol.setAttribute('disabled', 'disabled')
                if(totalUser > totalAI) {
                    result.innerHTML = 'You won!</br> Congratulations'
                } else {
                    result.textContent = 'Human eliminated!'
                }
            })

        } else {

            if(outcomes[user][computer] > 0) {
                roundInfo.textContent = `You won! ${user} beats ${computer}`
                totalUser++
                numOfGames++
                result.textContent = `${totalUser}-${totalAI}`
            } else if (outcomes[user][computer]) {
                roundInfo.textContent = `You lost! ${computer} beats ${user}`

                totalAI++
                numOfGames++
                result.textContent = `${totalUser}-${totalAI}`
            } else {
                roundInfo.textContent = `It's a draw! You both chose ${user}`
            }
            userSymbol.textContent = user
            aiSymbol.textContent = computer
        }
    })
})