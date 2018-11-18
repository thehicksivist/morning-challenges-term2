/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largest_number.js
(You'll need mocha installed first: `npm install mocha -g`)
*/

function largestNumber(arr) {
    if (typeof arr !== 'undefined' && arr.length > 0) {
        for (let num of arr) {
            if (Number.isInteger(num)) {
                continue
            } else {
                arr.splice( arr.indexOf(num), 1 ) 
            }
        }
        let largestNumber = Math.max(...arr);
        return largestNumber
    } else {
        return null
    }
        
}


var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(largestNumber([5, -2, 10]), 10);
    })
    it('should ignore invalid array entries', function () {
        assert.equal(largestNumber([10, 10, 's']), 10);
    })
    it('should return null if the array is empty', function () {
        assert.equal(largestNumber([]), null)
    })

})