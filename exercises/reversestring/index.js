// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const charArray = [ ...`${str}` ];
//     return charArray.reverse().join('');
// }

// function reverse(str) {
//     const inputStr = `${str}`;
//     let outputStr = '';
//     let strLength = inputStr.length;
//     while (strLength > 0) {
//         outputStr = outputStr.concat(inputStr[strLength - 1]);
//         strLength--;
//     }
//     return outputStr;
// }

function reverse(str) {
    let outputStr = '';
    for (let char of `${str}`) {
        outputStr = char + outputStr;
    }
    return outputStr;
}

// function reverse(str) {
//     return `${str}`.split('').reduce((previous, current) => current + previous, '');
// }

module.exports = reverse;
