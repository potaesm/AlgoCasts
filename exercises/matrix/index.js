// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     let startColumn = 0;
//     let startRow = 0;
//     let endColumn = n - 1;
//     let endRow = n - 1;
//     let counter = 1;
//     let results = [];
//     for (let x = 0; x < n; x++) {
//         results[x] = [];
//     }
//     while (startColumn <= endColumn && startRow <= endRow) {
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         for (let j = startRow; j <= endRow; j++) {
//             results[j][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;
//         for (let k = endColumn; k >= startColumn; k--) {
//             results[endRow][k] = counter;
//             counter++;
//         }
//         endRow--;
//         for (let l = endRow; l >= startRow; l--) {
//             results[l][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//     }
//     return results;
// }

function matrix(n) {
    const fillEmptyArray = (length, array = [], index = 0) => {
        if (index === length) {
            return array;
        }
        array[index] = [];
        index++;
        return fillEmptyArray(length, array, index);
    };
    const fillSpiralCounter = (results, endColumn, endRow, counter = 1, startColumn = 0, startRow = 0, generalIndex = 0, state = 0) => {
        if (startColumn > endColumn && startRow > endRow) {
            return results;
        }

        /** TOP */
        if (state === 0) {
            if (generalIndex > endColumn) {
                startRow++;
                generalIndex = startRow;
                state = 1;
            } else {
                results[startRow][generalIndex] = counter;
                generalIndex++;
                counter++;
                return fillSpiralCounter(results, endColumn, endRow, counter, startColumn, startRow, generalIndex, state);
            }
        }
        
        /** RIGHT */
        if (state === 1) {
            if (generalIndex > endRow) {
                endColumn--;
                generalIndex = endColumn;
                state = 2;
            } else {
                results[generalIndex][endColumn] = counter;
                generalIndex++;
                counter++;
                return fillSpiralCounter(results, endColumn, endRow, counter, startColumn, startRow, generalIndex, state);
            }
        }
        
        /** BOTTOM */
        if (state === 2) {
            if (generalIndex < startColumn) {
                endRow--;
                generalIndex = endRow;
                state = 3;
            } else {
                results[endRow][generalIndex] = counter;
                generalIndex--;
                counter++;
                return fillSpiralCounter(results, endColumn, endRow, counter, startColumn, startRow, generalIndex, state);
            }
        }
        
        /** LEFT */
        if (state === 3) {
            if (generalIndex < startRow) {
                startColumn++;
                generalIndex = startColumn;
                state = 0;
                return fillSpiralCounter(results, endColumn, endRow, counter, startColumn, startRow, generalIndex, state);
            } else {
                results[generalIndex][startColumn] = counter;
                generalIndex--;
                counter++;
                return fillSpiralCounter(results, endColumn, endRow, counter, startColumn, startRow, generalIndex, state);
            }
        }
    };
    return fillSpiralCounter(fillEmptyArray(n), n - 1, n - 1);
}

module.exports = matrix;
