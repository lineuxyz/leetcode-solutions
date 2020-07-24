var convertToTitle = function(n) {
    
  let charMap = {
      0: "Z",
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
      7: "G",
      8: "H",
      9: "I",
      10: "J",
      11: "K",
      12: "L",
      13: "M",
      14: "N",
      15: "O",
      16: "P",
      17: "Q",
      18: "R",
      19: "S",
      20: "T",
      21: "U",
      22: "V",
      23: "W",
      24: "X",
      25: "Y"
  };
  
  
  let title = "";
  
  if (n <= 26) {
      return charMap[n%26]
  }
  
  while (n > 0) {
      let r = n%26;
     
      n = Math.floor(n/26);
      
      if (r == 0) {
          r = 0;
          n = n-1;
      }
      title = charMap[r] + title;
  }
  
  return title;
  
};