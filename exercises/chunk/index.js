// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const inputArr = [ ...array ];
//     const totalChunk = Math.floor(inputArr.length / size);
//     let outputArray = [];
//     let chunkNumber = 0;
//     let itemNumber = 0;
//     while (itemNumber < inputArr.length) {
//         if (!(itemNumber % size) && !!itemNumber) {
//             if (chunkNumber < totalChunk) {
//                 chunkNumber++;
//                 outputArray[chunkNumber] = [];
//                 outputArray[chunkNumber].push(inputArr[itemNumber]);
//             }
//         } else {
//             if (!outputArray[chunkNumber]) {
//                 outputArray[chunkNumber] = [];
//             }
//             outputArray[chunkNumber].push(inputArr[itemNumber]);
//         }
//         itemNumber++;
//     }
//     return outputArray;
// }

// function chunk(array, size) {
//     const inputArr = [ ...array ];
//     let outputArr = [];
//     let chunk = [];
//     let itemNumber = 0;
//     while (itemNumber < inputArr.length) {
//         if (chunk.length < size) {
//             chunk.push(inputArr[itemNumber]);
//         } else {
//             outputArr.push(chunk);
//             chunk = [inputArr[itemNumber]];
//         }
//         itemNumber++;
//     }
//     outputArr.push(chunk);
//     return outputArr;
// }

// function chunk(array, size) {
//     const inputArr = [ ...array ];
//     let chunkedArr = [[]];
//     let chunkNumber = 0;
//     let itemNumber = 0;
//     if (!size) {
//         return inputArr;
//     }
//     while (itemNumber < inputArr.length) {
//         if (chunkedArr[chunkNumber].length < size) {
//             chunkedArr[chunkNumber].push(inputArr[itemNumber]);
//         } else {
//             chunkNumber++;
//             chunkedArr[chunkNumber] = [inputArr[itemNumber]];
//         }
//         itemNumber++;
//     }
//     return chunkedArr;
// }

// function chunk(array, size) {
//     const inputArr = [ ...array ];
//     let chunkedArr = [];
//     let itemNumber = 0;
//     if (!size) {
//         return inputArr;
//     }
//     while (itemNumber < inputArr.length) {
//         chunkedArr.push(inputArr.slice(itemNumber, itemNumber + size));
//         itemNumber += size;
//     }
//     return chunkedArr;
// }

function chunk(array, size) {
    const inputArr = [...array];
    let chunkedArr = [[]];
    let chunkNumber = 0;
    let index = 0;
    while (index < inputArr.length) {
        if (chunkedArr[chunkNumber].length < size) {
            chunkedArr[chunkNumber].push(inputArr[index]);
        }
        if (!!index && !(index % size) ) {
            chunkNumber++;
            chunkedArr[chunkNumber] = [inputArr[index]];
        }
        index++;
    }
    return chunkedArr;
}

console.log(chunk([1, 2, 3, 4, 5], 0));

module.exports = chunk;
