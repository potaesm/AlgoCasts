// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                const lessBackup = newArr[j + 1];
                newArr[j + 1] = newArr[j];
                newArr[j] = lessBackup;
            }
        }
    }
    return newArr;
}

function selectionSort(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const lessBackup = newArr[minIndex];
            newArr[minIndex] = newArr[i];
            newArr[i] = lessBackup;
        }
    }
    return newArr;
}

function mergeSort(arr = []) {
    if (arr.length === 1) {
        return arr;
    }
    const halfLength = Math.round(arr.length / 2);
    const left = arr.slice(0, halfLength);
    const right = arr.slice(halfLength);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];
    while(!!left.length && !!right.length) {
        let lesser = null;
        if (left[0] < right[0]) {
            lesser = left.shift();
        } else {
            lesser = right.shift();
        }
        results.push(lesser);
    }
    if (!!left.length) {
        results.push(...left);
    } else {
        results.push(...right);
    }
    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
