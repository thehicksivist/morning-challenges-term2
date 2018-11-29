
/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
count_vowels("Hello World") should return ["e","o","o"]

Check your solution by running the tests:
mocha 12_vowels.js
*/

let aeiou = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function vowels (string) {
    // Your code here
    let result = []
    for (char of string) {
        if (aeiou.includes(char)) {
            result.push(char)
        }
    }
    // console.log(result)
    return result
}

module.exports = vowels
