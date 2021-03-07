// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Convert to counter object
    const inputStr = `${str}`;
    let counterObj = {};
    let charIndex = 0;
    while (charIndex < inputStr.length) {
        const prevExisting = counterObj[`${inputStr[charIndex]}`];
        counterObj[`${inputStr[charIndex]}`] = (prevExisting === undefined) ? 1 : prevExisting + 1;
        charIndex++;
    }
    // Find max number in object
    const counterEntries = Object.entries(counterObj);
    let maxCounterChar = '';
    let previousValue = 0;
    let entryIndex = 0;
    while (entryIndex < counterEntries.length) {
        const key = counterEntries[entryIndex][0];
        const value = counterEntries[entryIndex][1];
        if (value > previousValue) {
            previousValue = value;
            maxCounterChar = key;
        }
        entryIndex++;
    }
    return maxCounterChar;
}

maxChar("abccd");

module.exports = maxChar;
