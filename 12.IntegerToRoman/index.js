var intToRoman = function(num) {
  const map = {
      0: {
          1: 'I',
          4: 'IV',
          5: 'V',
          9: 'IX',
      },
      1: {
          1: 'X',
          4: 'XL',
          5: 'L',
          9: 'XC',
      },
      2: {
          1: 'C',
          4: 'CD',
          5: 'D',
          9: 'CM', 
      },
      3: {
          1: 'M',
      }
  };
  let result = '';
  for(let i = 3; i >= 0; i--) {
      let unit = Math.pow(10, i);
      let temp = Math.floor(num / unit);
      if (map[i][temp]) {
          result += map[i][temp]; 
          num = num % unit;
          continue;
      }
      if (temp > 5) {
          temp-=5;
          result += map[i][5];
      }
      while (temp--) {
          result += map[i][1];
      }
      num = num % unit;
  }
  return result;
};