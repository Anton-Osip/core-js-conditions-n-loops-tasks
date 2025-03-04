/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  )
    return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) return false;
  if (a > 0 && b > 0 && c > 0 && a === b && b === c && c === a) return false;
  if (a > 0 && b > 0 && c > 0 && (a === b || b === c || c === a)) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num >= 10) return `X${convertToRomanNumerals(num - 10)}`;
  if (num >= 9) return `IX${convertToRomanNumerals(num - 9)}`;
  if (num >= 5) return `V${convertToRomanNumerals(num - 5)}`;
  if (num >= 4) return `IV${convertToRomanNumerals(num - 4)}`;
  if (num >= 1) return `I${convertToRomanNumerals(num - 1)}`;
  return '';
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
        str += 'point ';
        break;
      case ',':
        str += 'point ';
        break;
      case '-':
        str += 'minus ';
        break;
      case '0':
        str += 'zero ';
        break;
      case '1':
        str += 'one ';
        break;
      case '2':
        str += 'two ';
        break;
      case '3':
        str += 'three ';
        break;
      case '4':
        str += 'four ';
        break;
      case '5':
        str += 'five ';
        break;
      case '6':
        str += 'six ';
        break;
      case '7':
        str += 'seven ';
        break;
      case '8':
        str += 'eight ';
        break;
      case '9':
        str += 'nine ';
        break;
      default:
        break;
    }
  }
  let newStr = '';
  for (let i = 0; i < str.length - 1; i += 1) {
    newStr += str[i];
  }
  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i]) === digit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];

    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  let count = 1;
  let x = 0;
  let y = -1;
  let movementAlongTheRows = 0;
  let movementAlongTheColumns = 1;

  while (count <= size ** 2) {
    if (
      x + movementAlongTheRows >= 0 &&
      x + movementAlongTheRows < size &&
      y + movementAlongTheColumns >= 0 &&
      y + movementAlongTheColumns < size &&
      arr[x + movementAlongTheRows][y + movementAlongTheColumns] === 0
    ) {
      x += movementAlongTheRows;
      y += movementAlongTheColumns;
      arr[x][y] = count;
      count += 1;
    } else if (movementAlongTheColumns === 1) {
      movementAlongTheRows = 1;
      movementAlongTheColumns = 0;
    } else if (movementAlongTheRows === 1) {
      movementAlongTheRows = 0;
      movementAlongTheColumns = -1;
    } else if (movementAlongTheColumns === -1) {
      movementAlongTheRows = -1;
      movementAlongTheColumns = 0;
    } else if (movementAlongTheRows === -1) {
      movementAlongTheRows = 0;
      movementAlongTheColumns = 1;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const temp = matrix;
  for (let j = 0; j < matrix[0].length; j += 1) {
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
      const t = matrix[left][j];
      temp[left][j] = matrix[right][j];
      temp[right][j] = t;
      left += 1;
      right -= 1;
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix[0].length; j += 1) {
      const t = matrix[i][j];
      temp[i][j] = matrix[j][i];
      temp[j][i] = t;
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function swap(items, leftIndex, rightIndex) {
  const arr = items;
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
function partition(items, left, right) {
  const arr = items;
  const pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  const arr = items;
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return items;
}
function sortByAsc(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let count = 0;
  let newStr = str;
  const arr = [];
  let iter = iterations;

  while (arr[arr.length - 1] !== str) {
    let add = '';
    let notAdd = '';
    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2 === 0) {
        add += newStr[i];
      } else {
        notAdd += newStr[i];
      }
    }
    newStr = add + notAdd;
    arr[count] = newStr;
    count += 1;
  }
  while (iter > arr.length - 1) {
    iter -= arr.length;
  }

  return arr[iter - 1];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function getNearestBigger(number) {
  const str = String(number);
  const arr = new Array(str.length);
  const n = arr.length;
  for (let j = 0; j < str.length; j += 1) {
    arr[j] = str[j];
  }
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Number(arr[i]);
  }
  if (n === 1) return arr;

  let i = 0;
  for (i = n - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) break;
  }
  if (i !== 0) {
    for (let j = n - 1; j >= i; j -= 1) {
      if (arr[i - 1] < arr[j]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }

  let num = '';
  for (let index = 0; index < i; index += 1) {
    num += arr[index];
  }
  for (let index = arr.length - 1; index >= i; index -= 1) {
    num += arr[index];
  }
  return Number(num);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
