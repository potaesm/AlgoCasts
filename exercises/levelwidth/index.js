// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//     const delimiter = '#';
//     let widthArr = [0];
//     let bufferArr = [root, delimiter];
//     while (bufferArr.length > 1) {
//         const node  = bufferArr.shift();
//         if (node === delimiter) {
//             widthArr.push(0);
//             bufferArr.push(delimiter);
//         } else {
//             widthArr.push(widthArr.pop() + 1);
//             bufferArr.push(...node.children);
//         }
//     }
//     return widthArr;
// }

function levelWidth(root, delimiter = '#', widthArr = [0], bufferArr = [root, delimiter]) {
    if (bufferArr.length > 1) {
        const node = bufferArr.shift();
        if (node === delimiter) {
            widthArr.push(0);
            bufferArr.push(delimiter);
        } else {
            widthArr.push(widthArr.pop() + 1);
            bufferArr.push(...node.children);
        }
        return levelWidth(root, delimiter, widthArr, bufferArr);
    } else {
        return widthArr;
    }
}

module.exports = levelWidth;
