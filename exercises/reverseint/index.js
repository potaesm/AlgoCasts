// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Convert number to string
    const textNumber = `${n}`;
    // Check if the value is negative
    const isNegative = textNumber[0] === '-';
    // Get reversed text number
    let reverseTextnumber = '';
    let index = isNegative ? 1 : 0;
    while (index < textNumber.length) {
        reverseTextnumber = textNumber[index] + reverseTextnumber;
        index++;
    }
    // Create multiplier
    const multiplier = isNegative ? -1 : 1;
    // Return reverse int
    return Number(reverseTextnumber) * multiplier;
}

module.exports = reverseInt;
