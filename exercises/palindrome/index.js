// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const inputStr = `${str}`;
//     let reversedStr = '';
//     let charIndex = inputStr.length - 1;
//     while (charIndex >= 0) {
//         reversedStr = reversedStr.concat(inputStr[charIndex]);
//         charIndex--;
//     }
//     if (reversedStr === inputStr) {
//         return true;
//     }
//     return false;
// }

// function palindrome(str) {
//     const inputStr = `${str}`;
//     let reversedStr = '';
//     for (let char of inputStr) {
//         reversedStr = char + reversedStr;
//     }
//     if (reversedStr === inputStr) {
//         return true;
//     }
//     return false;
// }

// function palindrome(str) {
//     const inputStr = `${str}`;
//     if (inputStr.split('').reverse().join('') === inputStr) {
//         return true;
//     }
//     return false;
// }

// function palindrome(str) {
//     const inputStr = `${str}`;
//     const reversedStr = inputStr.split('').reduce((prev, curr) => curr + prev);
//     if (reversedStr === inputStr) {
//         return true;
//     }
//     return false;
// }

// function palindrome(str) {
//     const inputStr = `${str}`;
//     return inputStr.split('').every((char, index) => {
//         return char === inputStr[inputStr.length - index - 1];
//     });
// }

function palindrome(str) {
    const inputStr = `${str}`;
    const stopIndex = !!(inputStr.length % 2) ? (((inputStr.length + 1) / 2) - 1) : ((inputStr.length / 2) - 1);
    let index = 0;
    while (index <= stopIndex) {
        const oppositeIndex = inputStr.length - 1 - index;
        if (inputStr[index] !== inputStr[oppositeIndex]) {
            return false;
        }
        index++;
    }
    return true;
}

module.exports = palindrome;
