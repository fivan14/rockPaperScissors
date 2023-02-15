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