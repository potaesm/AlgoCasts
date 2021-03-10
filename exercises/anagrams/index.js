// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const cleanStringA = `${stringA}`.replace(/[^\w]/g, '').toLowerCase();
//     const cleanStringB = `${stringB}`.replace(/[^\w]/g, '').toLowerCase();
//     let cleanStringX = cleanStringA;
//     let cleanStringY = cleanStringB;
//     if (cleanStringB.length > cleanStringA.length) {
//         cleanStringX = cleanStringB;
//         cleanStringY = cleanStringA;
//     }
//     let stringXCounterObj = {};
//     let stringYCounterObj = {};
//     for (let i = 0; i < cleanStringX.length; i++) {
//         const origXCounter = stringXCounterObj[`${cleanStringX[i]}`];
//         stringXCounterObj[`${cleanStringX[i]}`] = !!origXCounter ? origXCounter + 1 : 1;
//         if (i < cleanStringY.length) {
//             const origYCounter = stringYCounterObj[`${cleanStringY[i]}`];
//             stringYCounterObj[`${cleanStringY[i]}`] = !!origYCounter ? origYCounter + 1 : 1;
//         }
//     }
//     const keysX = Object.keys(stringXCounterObj);
//     const keysY = Object.keys(stringYCounterObj);
//     if (keysX.length !== keysY.length) {
//         return false;
//     }
//     for (let j = 0; j < keysX.length; j++) {
//         if (stringXCounterObj[`${keysX[j]}`] !== stringYCounterObj[`${keysX[j]}`]) {
//             return false;
//         }
//     }
//     return true;
// }

function anagrams(stringA, stringB) {
    const sortedStringA = `${stringA}`.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const sortedStringB = `${stringB}`.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    if (sortedStringA !== sortedStringB) {
        return false;
    }
    return true;
}

module.exports = anagrams;
