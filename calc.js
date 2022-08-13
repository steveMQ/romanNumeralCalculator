/**
 * @param {string} s
 * @return {number}
 */

console.clear();

const romanToInt = (str) => {
  
  const values = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  } 
  
  return [str].concat(Object.entries(values))
    .reduce((acc, val) => acc.replaceAll(val[0], `-${val[1]}`))
    .split('-')
    .slice(1)
    .reduce((acc, num) => parseInt(acc) + parseInt(num))
}

console.log(romanToInt('MMMDCCXXIV'))