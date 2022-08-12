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

  Object
    .entries(values)
    .forEach(([key,value]) => {
      if (str.includes(key)){
        str = str.replaceAll(key,`-${value}`);
        values[key] = null;
      }
    })
  
  return str.split('-')
    .filter(item => item != '')
    .map(item => parseInt(item))
    .reduce((acc, num) => acc + num)
};