// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let vowelCounter = 0;
//     const inputStr = `${str}`;
//     for (let i = 0; i < inputStr.length; i++) {
//         if (/[a|e|i|o|u]/.test(inputStr[i].toLowerCase())) {
//             vowelCounter++;
//         }
//     }
//     return vowelCounter;
// }

// function vowels(str, index = 0, counter = 0) {
//     const inputStr = `${str}`;
//     const vowelArr = ['a', 'e', 'i', 'o', 'u'];
//     if (index > inputStr.length - 1) {
//         return counter;
//     }
//     if (vowelArr.includes(inputStr[index].toLowerCase())) {
//         counter += 1;
//     }
//     index += 1
//     return vowels(str, index, counter);
// }

function vowels(str) {
    const matches = `${str}`.match(/[aeiuo]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
