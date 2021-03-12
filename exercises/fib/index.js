// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let numberArr = [];
//     for (let i = 0; i <= n; i++) {
//         if (i > 1) {
//             numberArr[i] = numberArr[i - 1] + numberArr[i - 2];
//         } else {
//             numberArr[i] = i;
//         }
//     }
//     return numberArr[n];
// }

// function fib(n, numberArr = [], index = 0) {
//     if (index > n) {
//         return numberArr[n];
//     }
//     if (index > 1) {
//         numberArr[index] = numberArr[index - 1] + numberArr[index - 2];
//     } else {
//         numberArr[index] = index;
//     }
//     index++;
//     return fib(n, numberArr, index);
// }

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (!!cache[args]) {
            return cache[args];
        }
        const result =  fn.apply(this, args);
        cache[args] = result;
        console.log(JSON.stringify(cache));
        return result;
    }
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
