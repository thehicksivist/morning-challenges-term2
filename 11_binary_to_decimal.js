/*
Write a method to convert a binary number to a decimal.

Examples:
    binaryToDecimal(1000) => 8
    binaryToDecimal(1011) => 11
    binaryToDecimal(1100) => 12

Your solution should not use parseInt

Test: mocha 11_binary_to_decimal

*/

function binaryToDecimal(binaryNumber) {
    // Your code here
    let arr = (""+binaryNumber).split('').map(Number).reverse()
    let arr2 = []
    let i = 1

    for (let num of arr) {
        if (num > 1){
            return null
        }
        num *= i
        arr2.push(num)
        // console.log(num)
        i *= 2
        // console.log(arr)

    }

    let result = arr2.reduce((a, b) => a + b);
    console.log(result)
    return result
    
}

// binaryToDecimal(1011)

let assert = require('assert')

describe('Binary to decimal', function () {
    it('Should convert a binary to its decimal value', function () {
        assert.equal((9),binaryToDecimal(1001))
        assert.equal((15),binaryToDecimal(1111))
        assert.equal((31),binaryToDecimal(11111))
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null),binaryToDecimal(1002))
        assert.equal((null),binaryToDecimal(1220))
    })
})