/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function persistence(num) {
    //enter code here
    let loops = 0

    while (num >= 10) {
    // convert the number to a string, split the 'characters', and store them in an array as digits/numbers
    let digits = num.toString().split('').map(Number)
    // times all the digits together
    num = digits.reduce((a, b) => a * b)
    // increase loop count
    loops += 1
    }
    return loops
}

persistence(25)
// var assert = require('assert');

// describe('Initial Tests', function () {
//     it('Should return a single digit number', function() {
//         assert.equal(persistence(39),3);
//         assert.equal(persistence(25),2);
//         assert.equal(persistence(999),4);
//     })
//     it('Should return zero if num is a one digit number', function() {
//         assert.equal(persistence(4),0);
//         assert.equal(persistence(9),0);
//     })
// });