/*
Neo is stuck in the matrix and you need to help get him out. In order to
help him you will need to write a function which will take the values 
of two different matrices and return their sum total.

Check your solution by running mocha 13_matrix_addition

Examples:
function matrixAddition ([1,2,3,4], [2,3,4,5]) => [3,5,7,9]

function matrixAddition ([[1,2,3,4], [2,4,6,8]], [[1,2,3,4], [2,4,6,8]])    
                          => [[2,4,6,8], [4,8,12,16]]

Hint:
It may help to write out the array beforehand if the examples are confusing.

*/

function matrixAddition(matrixOne, matrixTwo) {
    // Your code here
    // at multiple points, before adding if arrayOne.length != arrayTwo.length, return null
    // check for multi-dimensional arrays
    // if multi-dimensional, add first array of matrixOne and matrix two, 
    // set as first of result matrix, repeat for second
    let result = []
    let i = 0
    let type = ''

    if (typeof matrixOne[0][0] == 'undefined') {
        type = '1D'
        console.log('1D')
    } else {
        type = '2D'
        console.log('2D')
    }

    if (type == '1D'){
        if (matrixOne.length != matrixTwo.length) {
            return null
            }
        for (num of matrixOne) {
            let res = num + matrixTwo[i]
            result.push(res)
            i++
           
        }
    return result

    } else if (type == '2D') {
        if (matrixOne[0].length != matrixTwo[0].length || matrixOne[1].length != matrixTwo[1].length) {
            return null
            }
        let result = [[],[]]
        let i = 0
        for (num of matrixOne[0]) {
            let res = num + matrixTwo[0][i]
            result[0].push(res)
            i++
        }

        i = 0

        for (num of matrixOne[1]) {
            let res = num + matrixTwo[1][i]
            result[1].push(res)
            i++
        }
        return result
    }

    // console.log(result)
    // return result
}

// matrixAddition([5,0,40,29,10], [5,4,10,2,7])
// matrixAddition([[1,2,3,4], [5,6,7,8]], [[1,2,3,4], [5,6,7,8]])
// matrixAddition([8,12,5], [40,21,8,17])

const assert = require ('assert');

describe('Matrix addition', function () {
    it('Should return the sum of one dimensional matrix', function () {
        assert.deepEqual([2,4,5,7], matrixAddition([1,3,4,3], [1,1,1,4]))
        assert.deepEqual([10,4,50,31,17], matrixAddition([5,0,40,29,10], [5,4,10,2,7]))
        assert.deepEqual([10,4,50,31,17], matrixAddition([5,0,40,29,10], [5,4,10,2,7]))
    })
    it('Should return the sum of multidimensional matrix', function () {
        assert.deepEqual([[2,4,6,8],[10,12,14,16]], matrixAddition([[1,2,3,4], [5,6,7,8]], [[1,2,3,4], [5,6,7,8]]))
    })
    it('Should return null if the sum of the matrix cannot be added', function() {
        assert.deepEqual(null, matrixAddition([4,2,1,7], [2,3,5]))
        assert.deepEqual(null, matrixAddition([8,12,5], [40,21,8,17]))
        assert.deepEqual(null, matrixAddition( [[8,12,5], [40,21,8,17]], [[3,2,1,6], [7,4,1,9]]))
    })
})