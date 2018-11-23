// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// mocha 05_sum_numbers.js

function addScores(scores) {
    const add = (a, b) => a + b
    const sum = scores.reduce(add)
    return sum
}

function findWinner(players) {
    // Your code here
    
    for (player of players) {
        let total = addScores(player.scores)
        player.scores = total
    }
   
    if (players[0].scores >= players[1].scores) {
        return players[0].name
    }   else {
        return players[1].name
    }

}


var assert = require('assert');

class Player {
    constructor(name, scores) {
        this.name = name
        this.scores = scores
    }
}

let players = []
describe('findWinner', function () {
    it('Should return the winner when winner is first in array', function () {
        players = [new Player('James', [200, 100, 85]), new Player('Nathan', [55, 90, 86])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the winner when winner is second in array', function () {
        players = [new Player('Nathan', [55, 90, 86]), new Player('James', [200, 100, 85])]
        assert.equal('James', findWinner(players))
    })
    it('Should return the first player when both players are tied', function () {
        players = [new Player('Nathan', [50, 100, 85]), new Player('James', [50, 100, 85])]
        assert.equal('Nathan', findWinner(players))
    })
}) 