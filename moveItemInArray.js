/**
 * Write a function to move an array element from one position to another.
 *
 * Examples:
 *
 * console.log(move([10, 20, 30, 40, 50], 0, 2));
 * [20, 30, 10, 40, 50]
 *
 * console.log(move([10, 20, 30, 40, 50], -1, -2));
 * [10, 20, 50, 30, 40]
 *
 */

/**
 *
 * @param {*} arr
 * @param {*} pos
 * @param {*} shift
 * @returns
 */

const moveItem = (arr, pos, shift) => {
  const len = arr.length;
  pos = pos < 0 ? len + pos - 1 : pos;
  shift = shift < 0 ? len + shift - 1 : shift;
  const itemToMove = arr.splice(pos, 1);
  arr.splice(pos + shift, 0, itemToMove[0]);
  return arr;
};

console.log(moveItem([10, 20, 30, 40, 50], 0, 2)); //[20, 30, 10, 40, 50]
console.log(moveItem([10, 20, 30, 40, 50], -1, -2)); //[10, 20, 30, 50, 40]
