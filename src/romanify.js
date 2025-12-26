/**
 * @param {String} roman
 * @returns {Number}
 */
export const romanToInt = (roman) => {
  if (roman == null) return -1;

  const len = roman.length;

  let current, previous;
  let number = convertSymbol(roman.charAt(0));

  for (let i = 1; i < len; i++) {
    current = convertSymbol(roman.charAt(i));
    previous = convertSymbol(roman.charAt(i - 1));

    if (current <= previous) {
      number += current;
    } else {
      number = number - previous * 2 + current;
    }
  }

  return number;
}

/**
 * @param {String} romanSymbol
 * @returns {Number}
 */
const convertSymbol = (romanSymbol) => {
  romanSymbol = romanSymbol.toUpperCase();

  switch (romanSymbol) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}

/**
 * @param {Number} number
 * @returns {String}
 */
export const intToRoman = (number) => {
  const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let roman = '';

  for (let item in lookup) {
    while (number >= lookup[item]) {
      roman += item;
      number -= lookup[item];
    }
  }

  return roman;
}
