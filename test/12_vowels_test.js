let vowels = require('../12_vowels')

var assert = require('assert');

describe('vowels', function() {
    it('Should return the vowels from a string', function() {
        assert.deepEqual(vowels("The quick brown fox"), ["e","u","i","o","o"]);
    })

    it('Should return e, o, o from Hello World', function(){
        assert.deepEqual(vowels("Hello World"), ["e","o","o"]);
    })

    it('Should return null when passed words without vowels', function(){
        assert.deepEqual(vowels("vtt wwwsss mnhnpp"), (null))
    })

    it('Test vowels casing', function() {
        assert.deepEqual(vowels("cAse tEst"), ["A","e","E"])
    })
})