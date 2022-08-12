/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    
  const splitEdgeCases = (str) => {
    const edgeCases = [
      "IV",
      "IX",
      "XL",
      "XC",
      "CD",
      "CM"
    ];

    const edgesArr = edgeCases.map(item => {
      if(str.includes(item)){
        str = str.replace(item, '')
        return item;
      }
      return null;
    })
    .filter(item => item !== null);
    return {normal: str.split(''), edge: edgesArr}
  }
  
  const assignValues = (data, modifier) => {
      
      const values = {
          "I": 1,
          "V": 5,
          "X": 10,
          "L": 50,
          "C": 100,
          "D": 500,
          "M": 1000
      } 
      
      return data.map(item => {
          if(modifier){
              return (values[item.split('')[0]] * -1) + (values[item.split('')[1]]);
          }
          return values[item];
      })
  }
    
  const dataSets = splitEdgeCases(s);

  return assignValues(dataSets.edge, true)
          .concat(assignValues(dataSets.normal))
          .reduce((a, b) => a + b, 0);    
};

console.log(romanToInt("MVIV"));