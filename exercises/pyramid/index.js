// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stack = '') {
    if (typeof n === 'number' && n >= 0) {
        if (n === row) {
            return;
        }
        if (stack.length === (2 * n) - 1) {
            console.log(stack);
            return pyramid(n, row + 1);
        }
        if (stack.length < (n - row - 1) || stack.length > (n + row - 1)) {
            stack += ' ';
        } else {
            stack += '#';
        }
        pyramid(n, row, stack);
    }
}

pyramid(3);

module.exports = pyramid;
