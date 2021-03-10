// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     return `${str}`.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

function capitalize(str) {
    const origStr = `${str}`;
    let newStrArr = [];
    for (let i = 0; i < origStr.length; i++) {
        let newChar = origStr[i];
        if ((i === 0) || (!!i && origStr[i - 1] === ' ')) {
            newChar = newChar.toUpperCase();
        }
        newStrArr.push(newChar);
    }
    return newStrArr.join('');
}

module.exports = capitalize;
